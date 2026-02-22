#!/usr/bin/env bun

/**
 * generate-image - OpenRouter Image Generation CLI
 *
 * Generate images using OpenRouter's various image generation models.
 * Supports DALL-E, Stable Diffusion, Flux, Gemini, and other OpenRouter models.
 *
 * Usage:
 *   bun run generate-image.ts --model "google/gemini-3-pro-image-preview" --prompt "..." --size "1792x1024" --output /tmp/image.png
 *
 * @see .claude/skills/art/SKILL.md
 */

import { writeFile, readFile } from "node:fs/promises";
import { resolve } from "node:path";

// ============================================================================
// Environment Loading
// ============================================================================

/**
 * Load environment variables from ~/.claude/.env
 * This ensures API keys are available regardless of how the CLI is invoked
 */
async function loadEnv(): Promise<void> {
  const envPath = resolve(process.env.HOME!, '.claude/.env');
  try {
    const envContent = await readFile(envPath, 'utf-8');
    for (const line of envContent.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eqIndex = trimmed.indexOf('=');
      if (eqIndex === -1) continue;
      const key = trimmed.slice(0, eqIndex).trim();
      let value = trimmed.slice(eqIndex + 1).trim();
      // Remove surrounding quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      // Only set if not already defined (allow overrides from shell)
      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  } catch (error) {
    // Silently continue if .env doesn't exist - rely on shell env vars
  }
}

// ============================================================================
// Types
// ============================================================================

interface CLIArgs {
  model: string;
  prompt: string;
  size?: string;
  output: string;
  quality?: string;
  aspectRatio?: string;
}

interface OpenRouterMessage {
  role: string;
  content: string;
}

interface OpenRouterRequest {
  model: string;
  messages: OpenRouterMessage[];
  modalities?: string[];
}

interface OpenRouterResponse {
  choices: Array<{
    message: {
      content: string;
      parts?: Array<{
        inlineData?: {
          mimeType: string;
          data: string;
        };
        text?: string;
      }>;
    };
  }>;
}

// ============================================================================
// Configuration
// ============================================================================

const DEFAULTS = {
  model: "google/gemini-3-pro-image-preview",
  size: "1792x1024",
  output: "/tmp/generated-image.png",
  quality: "hd",
};

const OPENROUTER_ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";

// Common OpenRouter image models
const COMMON_MODELS = {
  "dalle3": "openai/dall-e-3",
  "flux": "black-forest-labs/flux-1.1-pro",
  "gemini": "google/gemini-3-pro-image-preview",
  "gemini-flash": "google/gemini-2.5-flash-image",
  "sd": "stability-ai/stable-diffusion-xl",
};

// ============================================================================
// Error Handling
// ============================================================================

class CLIError extends Error {
  constructor(message: string, public exitCode: number = 1) {
    super(message);
    this.name = "CLIError";
  }
}

function handleError(error: unknown): never {
  if (error instanceof CLIError) {
    console.error(`Error: ${error.message}`);
    process.exit(error.exitCode);
  }

  if (error instanceof Error) {
    console.error(`Unexpected error: ${error.message}`);
    console.error(error.stack);
    process.exit(1);
  }

  console.error(`Unknown error:`, error);
  process.exit(1);
}

// ============================================================================
// Help Text
// ============================================================================

function showHelp(): void {
  console.log(`
generate-image - OpenRouter Image Generation CLI

Generate images using OpenRouter's various image generation models.

USAGE:
  bun run generate-image.ts --model <model> --prompt "<prompt>" [OPTIONS]

REQUIRED:
  --model <model>      OpenRouter model to use (see models below)
  --prompt <text>      Image generation prompt (quote if contains spaces)

OPTIONS:
  --size <size>        Image dimensions (e.g., "1792x1024", "1024x1024")
                       Default: 1792x1024 (landscape for blog headers)
  --aspect-ratio <ratio>  Aspect ratio (e.g., "16:9", "1:1", "4:3")
                          Some models use this instead of size
  --quality <quality>  Quality setting (e.g., "hd", "standard")
                       Model-dependent, default: hd
  --output <path>      Output file path (default: /tmp/generated-image.png)
  --help, -h           Show this help message

COMMON MODELS:
  google/gemini-3-pro-image-preview   - High quality, great for all content
  openai/dall-e-3                     - High quality, great for editorial content
  black-forest-labs/flux-1.1-pro      - Excellent for illustrations
  stability-ai/stable-diffusion-xl    - Flexible, open source

MODEL SHORTCUTS:
  dalle3  -> openai/dall-e-3
  gemini  -> google/gemini-3-pro-image-preview
  flux    -> black-forest-labs/flux-1.1-pro
  sd      -> stability-ai/stable-diffusion-xl

EXAMPLES:
  # Generate blog header with Gemini (landscape)
  bun run generate-image.ts --model gemini --prompt "Professional editorial header..." --size "1792x1024"

  # Generate square image with Flux
  bun run generate-image.ts --model flux --prompt "Abstract illustration..." --size "1024x1024"

  # Use full model name with custom output
  bun run generate-image.ts --model "openai/dall-e-3" --prompt "..." --output /tmp/header.png

ENVIRONMENT VARIABLES:
  OPENROUTER_API_KEY  Required for all OpenRouter models
  Set in ~/.claude/.env or export in your shell.

MORE INFO:
  Documentation: .claude/skills/art/SKILL.md
  OpenRouter models: https://openrouter.ai/models?output_modalities=image
`);
  process.exit(0);
}

// ============================================================================
// Argument Parsing
// ============================================================================

function parseArgs(argv: string[]): CLIArgs {
  const args = argv.slice(2);

  // Check for help flag
  if (args.includes("--help") || args.includes("-h") || args.length === 0) {
    showHelp();
  }

  const parsed: Partial<CLIArgs> = {
    model: DEFAULTS.model,
    size: DEFAULTS.size,
    output: DEFAULTS.output,
    quality: DEFAULTS.quality,
  };

  // Parse arguments
  for (let i = 0; i < args.length; i++) {
    const flag = args[i];

    if (!flag.startsWith("--")) {
      throw new CLIError(`Invalid flag: ${flag}. Flags must start with --`);
    }

    const key = flag.slice(2);
    const value = args[i + 1];

    if (!value || value.startsWith("--")) {
      throw new CLIError(`Missing value for flag: ${flag}`);
    }

    switch (key) {
      case "model":
        // Support model shortcuts
        parsed.model = COMMON_MODELS[value as keyof typeof COMMON_MODELS] || value;
        i++;
        break;
      case "prompt":
        parsed.prompt = value;
        i++;
        break;
      case "size":
        parsed.size = value;
        i++;
        break;
      case "aspect-ratio":
        parsed.aspectRatio = value;
        i++;
        break;
      case "quality":
        parsed.quality = value;
        i++;
        break;
      case "output":
        parsed.output = value;
        i++;
        break;
      default:
        throw new CLIError(`Unknown flag: ${flag}`);
    }
  }

  // Validate required arguments
  if (!parsed.prompt) {
    throw new CLIError("Missing required argument: --prompt");
  }

  if (!parsed.model) {
    throw new CLIError("Missing required argument: --model");
  }

  return parsed as CLIArgs;
}

// ============================================================================
// Prompt Enhancement
// ============================================================================

function enhancePrompt(prompt: string, args: CLIArgs): string {
  let enhanced = prompt;

  if (args.size) {
    enhanced += `\n\nOutput size: ${args.size}`;
  }

  if (args.aspectRatio) {
    enhanced += `\n\nAspect ratio: ${args.aspectRatio}`;
  }

  if (args.quality) {
    enhanced += `\n\nQuality: ${args.quality}`;
  }

  return enhanced;
}

// ============================================================================
// Image Generation
// ============================================================================

/**
 * Map MIME type to file extension
 */
function getExtensionFromMimeType(mimeType: string): string {
  const mimeMap: Record<string, string> = {
    'jpeg': 'jpg',
    'jpg': 'jpg',
    'png': 'png',
    'webp': 'webp',
    'gif': 'gif',
  };
  return mimeMap[mimeType.toLowerCase()] || 'png';
}

async function generateWithOpenRouter(args: CLIArgs): Promise<void> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new CLIError(
      "Missing environment variable: OPENROUTER_API_KEY\n" +
      "Set it in ~/.claude/.env or export it in your shell:\n" +
      "  echo 'OPENROUTER_API_KEY=your-key-here' >> ~/.claude/.env"
    );
  }

  console.log(`Generating with ${args.model}...`);

  const enhancedPrompt = enhancePrompt(args.prompt, args);

  const requestBody: OpenRouterRequest = {
    model: args.model,
    messages: [
      {
        role: "user",
        content: enhancedPrompt,
      },
    ],
    modalities: ["image", "text"],
  };

  console.log(`Sending request to OpenRouter...`);

  const response = await fetch(OPENROUTER_ENDPOINT, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "X-Title": "Art Skill CLI",
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new CLIError(
      `OpenRouter API error: ${response.status} - ${errorText}`
    );
  }

  const data = (await response.json()) as OpenRouterResponse;

  console.log(`Response received, extracting image...`);

  // Save full response for debugging
  await writeFile('/tmp/openrouter-response.json', JSON.stringify(data, null, 2));

  // Extract image from response
  let imageData: string | null = null;
  let imageMimeType: string | null = null;

  if (data.choices && data.choices.length > 0) {
    const message = data.choices[0].message as any;

    // Check for images array (Gemini 3 Pro format)
    if (message.images && Array.isArray(message.images)) {
      for (const image of message.images) {
        if (image.image_url && image.image_url.url) {
          const url = image.image_url.url;
          const dataUrlMatch = url.match(/data:image\/([^;]+);base64,([A-Za-z0-9+/=]+)/);
          if (dataUrlMatch) {
            imageMimeType = dataUrlMatch[1];
            imageData = dataUrlMatch[2];
            console.log(`Found image in images array (${imageMimeType})`);
            break;
          }
        }
      }
    }

    // Check for parts with inlineData (Gemini-style response)
    if (!imageData && message.parts && Array.isArray(message.parts)) {
      for (const part of message.parts) {
        if (part.inlineData && part.inlineData.data) {
          imageData = part.inlineData.data;
          imageMimeType = part.inlineData.mimeType?.split('/')[1] || null;
          console.log(`Found image in parts.inlineData${imageMimeType ? ` (${imageMimeType})` : ''}`);
          break;
        }
      }
    }

    // Check for base64 in content (some models return this way)
    if (!imageData && message.content) {
      const content = message.content;

      const dataUrlMatch = content.match(/data:image\/([^;]+);base64,([A-Za-z0-9+/=]+)/);
      if (dataUrlMatch) {
        imageMimeType = dataUrlMatch[1];
        imageData = dataUrlMatch[2];
        console.log(`Found base64 image in content (${imageMimeType})`);
      }

      // Look for URL
      const urlMatch = content.match(/https?:\/\/[^\s<>"{}|\\^`\[\]]+\.(?:png|jpg|jpeg|webp)/i);
      if (!imageData && urlMatch) {
        console.log(`Downloading image from URL: ${urlMatch[0]}`);
        const imageResponse = await fetch(urlMatch[0]);
        if (!imageResponse.ok) {
          throw new CLIError(`Failed to download image from URL: ${imageResponse.status}`);
        }
        const imageBuffer = await imageResponse.arrayBuffer();
        imageData = Buffer.from(imageBuffer).toString('base64');

        const contentType = imageResponse.headers.get('content-type');
        if (contentType?.startsWith('image/')) {
          imageMimeType = contentType.split('/')[1].split(';')[0];
        } else {
          const ext = urlMatch[0].split('.').pop()?.toLowerCase();
          if (ext === 'jpg') imageMimeType = 'jpeg';
          else if (ext) imageMimeType = ext;
        }
        console.log(`Image downloaded from URL${imageMimeType ? ` (${imageMimeType})` : ''}`);
      }
    }
  }

  if (!imageData) {
    console.error("Response data:", JSON.stringify(data, null, 2));
    throw new CLIError("No image data found in API response. See above for response details.");
  }

  const imageBuffer = Buffer.from(imageData, "base64");

  // Adjust output filename to match actual image format
  let outputPath = args.output;
  if (imageMimeType) {
    const correctExt = getExtensionFromMimeType(imageMimeType);
    const currentExt = outputPath.split('.').pop()?.toLowerCase();
    if (currentExt !== correctExt) {
      outputPath = outputPath.replace(/\.[^.]+$/, `.${correctExt}`);
      console.log(`Image is ${imageMimeType}, saving as .${correctExt} (not .${currentExt})`);
    }
  }

  await writeFile(outputPath, imageBuffer);
  console.log(`Image saved to ${outputPath}`);
}

// ============================================================================
// Main
// ============================================================================

async function main(): Promise<void> {
  try {
    await loadEnv();
    const args = parseArgs(process.argv);
    await generateWithOpenRouter(args);
  } catch (error) {
    handleError(error);
  }
}

main();
