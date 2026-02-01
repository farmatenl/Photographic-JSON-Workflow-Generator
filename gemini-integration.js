// Gemini AI Integration Module
// Handles communication with backend proxy for AI features

class GeminiClient {
  constructor(baseUrl = "http://localhost:3000") {
    this.baseUrl = baseUrl;
  }

  // Check if backend is available
  async checkHealth() {
    try {
      const response = await fetch(`${this.baseUrl}/api/health`);
      return await response.json();
    } catch (error) {
      return { status: "error", message: error.message };
    }
  }

  // Generate preset from text prompt
  async generatePresetFromPrompt(prompt) {
    try {
      const response = await fetch(
        `${this.baseUrl}/api/gemini/generate-preset`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt }),
        },
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Generation failed");
      }

      return await response.json();
    } catch (error) {
      throw new Error(`Failed to generate preset: ${error.message}`);
    }
  }

  // Get enhancement suggestions for JSON
  async enhanceJSON(jsonConfig) {
    try {
      const response = await fetch(`${this.baseUrl}/api/gemini/enhance-json`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jsonConfig }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Enhancement failed");
      }

      return await response.json();
    } catch (error) {
      throw new Error(`Failed to enhance JSON: ${error.message}`);
    }
  }
}

// Initialize client globally
const geminiClient = new GeminiClient();

// UI Functions

async function showGenerateWithAI() {
  const modal = document.getElementById("aiGenerationModal");
  modal.classList.add("show");
  document.getElementById("aiPromptInput").value = "";
  document.getElementById("aiPromptInput").focus();
}

function hideAIGenerationModal() {
  const modal = document.getElementById("aiGenerationModal");
  modal.classList.remove("show");
}

async function generatePresetFromAI() {
  const promptInput = document.getElementById("aiPromptInput");
  const prompt = promptInput.value.trim();

  if (!prompt) {
    alert("Please enter a scene description");
    return;
  }

  // Show loading state
  const button = event.target;
  const originalText = button.textContent;
  button.disabled = true;
  button.textContent = "🤖 Generating...";
  button.classList.add("ai-loading");

  try {
    const result = await geminiClient.generatePresetFromPrompt(prompt);

    if (result.success && result.preset) {
      // Load preset into form
      loadPresetFromAI(result.preset);
      hideAIGenerationModal();

      // Show success message
      showAISuccessBanner("✨ Preset generated successfully!");
    } else {
      throw new Error("Invalid response from AI");
    }
  } catch (error) {
    console.error("Generation error:", error);
    alert(
      `Failed to generate preset: ${error.message}\n\nMake sure the server is running (npm start)`,
    );
  } finally {
    button.disabled = false;
    button.textContent = originalText;
    button.classList.remove("ai-loading");
  }
}

function loadPresetFromAI(preset) {
  // Load the AI-generated preset into the form
  document.getElementById("aspectRatio").value = preset.aspectRatio || "3:4";
  document.getElementById("resolution").value =
    preset.resolution || "8K RAW / Master Quality";
  document.getElementById("engineMode").value =
    preset.engineMode || "Physical Rendering (PBR)";
  document.getElementById("identity").value =
    preset.identity || "Reference image";
  document.getElementById("gaze").value = preset.gaze || "";
  document.getElementById("expression").value = preset.expression || "";
  document.getElementById("hair").value = preset.hair || "";
  document.getElementById("eyeColor").value = preset.eyeColor || "";
  document.getElementById("outfit").value = preset.outfit || "";
  document.getElementById("accessories").value = preset.accessories || "";
  document.getElementById("location").value = preset.location || "";
  document.getElementById("season").value = preset.season || "Winter";
  document.getElementById("timeOfDay").value =
    preset.timeOfDay || "Crisp natural daylight";
  document.getElementById("background").value = preset.background || "";
}

async function enhanceCurrentJSON() {
  if (!currentJSON) {
    alert("Please generate JSON first before enhancing");
    return;
  }

  // Show loading state
  const button = event.target;
  const originalText = button.textContent;
  button.disabled = true;
  button.textContent = "🧠 Analyzing...";

  try {
    const result = await geminiClient.enhanceJSON(currentJSON);

    if (result.success) {
      if (result.suggestions.length === 0) {
        showAISuccessBanner("✅ Your JSON is already optimized!");
      } else {
        displayEnhancementSuggestions(result.suggestions);
      }
    } else {
      throw new Error("Invalid response from AI");
    }
  } catch (error) {
    console.error("Enhancement error:", error);
    alert(
      `Failed to enhance JSON: ${error.message}\n\nMake sure the server is running (npm start)`,
    );
  } finally {
    button.disabled = false;
    button.textContent = originalText;
  }
}

function displayEnhancementSuggestions(suggestions) {
  const container = document.getElementById("enhancementSuggestions");
  container.innerHTML = "";

  const header = document.createElement("h3");
  header.textContent = `🧠 ${suggestions.length} Enhancement Suggestions`;
  header.style.marginBottom = "16px";
  container.appendChild(header);

  suggestions.forEach((suggestion, index) => {
    const card = document.createElement("div");
    card.className = "suggestion-card";
    card.innerHTML = `
      <div class="suggestion-header">
        <span class="suggestion-category">${getCategoryIcon(suggestion.category)} ${suggestion.category}</span>
        <span class="suggestion-field">${suggestion.field}</span>
      </div>
      <div class="suggestion-current">
        <strong>Current:</strong> ${suggestion.currentValue || "Not set"}
      </div>
      <div class="suggestion-improvement">
        <strong>Suggested:</strong> ${suggestion.suggestion}
      </div>
      <div class="suggestion-reasoning">
        💡 ${suggestion.reasoning}
      </div>
      <button class="btn btn-secondary" onclick="applySuggestion(${index})">
        Apply Suggestion
      </button>
    `;
    container.appendChild(card);
  });

  // Show the suggestions panel
  container.style.display = "block";
  container.scrollIntoView({ behavior: "smooth" });
}

function getCategoryIcon(category) {
  const icons = {
    lighting: "💡",
    seasonal: "🌤️",
    material: "🧵",
    environmental: "🌍",
    color: "🎨",
  };
  return icons[category] || "✨";
}

function applySuggestion(index) {
  // This would require storing suggestions globally and implementing field updates
  // For now, show a message
  alert("Suggestion application coming in next iteration!");
}

function showAISuccessBanner(message) {
  const banner = document.createElement("div");
  banner.className = "success-banner show ai-banner";
  banner.textContent = message;
  banner.style.position = "fixed";
  banner.style.top = "20px";
  banner.style.right = "20px";
  banner.style.zIndex = "10000";

  document.body.appendChild(banner);

  setTimeout(() => {
    banner.classList.remove("show");
    setTimeout(() => banner.remove(), 300);
  }, 3000);
}

// Check server health on page load
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const health = await geminiClient.checkHealth();
    if (health.status === "ok") {
      console.log("✅ Backend server is running");
      if (!health.hasApiKey) {
        console.warn("⚠️ API key not configured in backend");
      }
    }
  } catch (error) {
    console.warn(
      "⚠️ Backend server not running. AI features will be unavailable.",
    );
    console.log("To enable AI features, run: npm start");
  }
});
