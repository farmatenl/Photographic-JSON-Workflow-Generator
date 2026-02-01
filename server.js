const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.static("."));

// Configuration
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent";

if (!GEMINI_API_KEY) {
  console.error("⚠️  WARNING: GEMINI_API_KEY not found in .env file");
  console.log("Please create a .env file with your API key:");
  console.log("GEMINI_API_KEY=your_api_key_here");
}

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    hasApiKey: !!GEMINI_API_KEY,
    timestamp: new Date().toISOString(),
  });
});

// Gemini proxy endpoint for preset generation
app.post("/api/gemini/generate-preset", async (req, res) => {
  try {
    if (!GEMINI_API_KEY) {
      return res.status(500).json({
        error: "API key not configured",
        message: "Please set GEMINI_API_KEY in .env file",
      });
    }

    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const systemPrompt = `You are an expert at creating photographic scene configurations. Generate a complete preset configuration as a JSON object with these EXACT fields:

{
  "name": "Emoji + Short Name",
  "aspectRatio": "3:4 or 16:9 or 1:1 or 4:5 or 9:16",
  "resolution": "8K RAW / Master Quality",
  "engineMode": "Physical Rendering (PBR) or Cinematic Ray Tracing or Stylized Rendering",
  "identity": "Reference image",
  "gaze": "Description of eye direction and engagement",
  "expression": "Facial expression description",
  "hair": "Color / Length / Style (format with slashes)",
  "eyeColor": "Eye color description",
  "outfit": "Detailed clothing description",
  "accessories": "Comma-separated accessories list",
  "location": "Setting / Location Type",
  "season": "Winter or Spring or Summer or Autumn",
  "timeOfDay": "Crisp natural daylight or Golden hour / Warm sunset or Blue hour / Evening twilight or Midday harsh sunlight or Overcast soft lighting",
  "background": "Comma-separated background elements"
}

User's scene description: "${prompt}"

Return ONLY valid JSON, no markdown, no explanations.`;

    const response = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": GEMINI_API_KEY,
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: systemPrompt }],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 2048,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Gemini API error: ${response.status} - ${JSON.stringify(errorData)}`,
      );
    }

    const data = await response.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";

    // Extract JSON from response (handle markdown code blocks)
    let cleanedText = generatedText.trim();
    if (cleanedText.startsWith("```json")) {
      cleanedText = cleanedText
        .replace(/```json\s*/g, "")
        .replace(/```\s*$/g, "");
    } else if (cleanedText.startsWith("```")) {
      cleanedText = cleanedText.replace(/```\s*/g, "").replace(/```\s*$/g, "");
    }

    const presetConfig = JSON.parse(cleanedText);

    res.json({
      success: true,
      preset: presetConfig,
      rawResponse: generatedText,
    });
  } catch (error) {
    console.error("Generation error:", error);
    res.status(500).json({
      error: "Generation failed",
      message: error.message,
    });
  }
});

// Gemini proxy endpoint for JSON enhancement
app.post("/api/gemini/enhance-json", async (req, res) => {
  try {
    if (!GEMINI_API_KEY) {
      return res.status(500).json({
        error: "API key not configured",
        message: "Please set GEMINI_API_KEY in .env file",
      });
    }

    const { jsonConfig } = req.body;

    if (!jsonConfig) {
      return res.status(400).json({ error: "JSON config is required" });
    }

    const systemPrompt = `You are a photographic realism expert. Review this JSON configuration and suggest improvements for hyperrealism and physical accuracy.

Current JSON:
${JSON.stringify(jsonConfig, null, 2)}

Analyze for:
- Lighting consistency (does the lighting match time of day and season?)
- Seasonal accuracy (are wardrobe and environment appropriate?)
- Material physics (realistic fabric, hair, skin descriptions?)
- Environmental details (missing atmospheric elements?)
- Color harmony (do colors work together?)

Return a JSON array of suggestions with this format:
[
  {
    "category": "lighting" | "seasonal" | "material" | "environmental" | "color",
    "field": "path.to.field in the JSON",
    "currentValue": "what it currently says",
    "suggestion": "specific improvement",
    "reasoning": "why this improves realism"
  }
]

Return ONLY valid JSON array, no markdown, no explanations. If everything is perfect, return empty array [].`;

    const response = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": GEMINI_API_KEY,
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: systemPrompt }],
          },
        ],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 2048,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Gemini API error: ${response.status} - ${JSON.stringify(errorData)}`,
      );
    }

    const data = await response.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";

    // Extract JSON from response
    let cleanedText = generatedText.trim();
    if (cleanedText.startsWith("```json")) {
      cleanedText = cleanedText
        .replace(/```json\s*/g, "")
        .replace(/```\s*$/g, "");
    } else if (cleanedText.startsWith("```")) {
      cleanedText = cleanedText.replace(/```\s*/g, "").replace(/```\s*$/g, "");
    }

    const suggestions = JSON.parse(cleanedText);

    res.json({
      success: true,
      suggestions: suggestions,
      count: suggestions.length,
    });
  } catch (error) {
    console.error("Enhancement error:", error);
    res.status(500).json({
      error: "Enhancement failed",
      message: error.message,
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  if (GEMINI_API_KEY) {
    console.log("✅ Gemini API key configured");
  } else {
    console.log("❌ Gemini API key NOT configured - please update .env file");
  }
});
