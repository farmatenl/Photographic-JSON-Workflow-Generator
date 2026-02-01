// Global state
let currentJSON = null;

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  renderPresets();
});

// Render all presets (default + custom)
function renderPresets() {
  const presetsContainer = document.getElementById("presetsContainer");
  presetsContainer.innerHTML = "";

  const allPresets = presetManager.getAllPresets();

  for (const [id, config] of Object.entries(allPresets)) {
    const isCustom = presetManager.isCustomPreset(id);
    const btn = document.createElement("button");
    btn.className = `preset-btn ${isCustom ? "custom" : ""}`;
    btn.onclick = () => loadPreset(id);

    const label = document.createElement("span");
    label.textContent = config.name;
    btn.appendChild(label);

    // Add delete button for custom presets
    if (isCustom) {
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "preset-delete";
      deleteBtn.innerHTML = "×";
      deleteBtn.onclick = (e) => {
        e.stopPropagation();
        deleteCustomPreset(id);
      };
      btn.appendChild(deleteBtn);
    }

    presetsContainer.appendChild(btn);
  }
}

// Load a preset into the form
function loadPreset(presetId) {
  const allPresets = presetManager.getAllPresets();
  const config = allPresets[presetId];
  if (!config) return;

  document.getElementById("aspectRatio").value = config.aspectRatio;
  document.getElementById("resolution").value = config.resolution;
  document.getElementById("engineMode").value = config.engineMode;
  document.getElementById("identity").value = config.identity;
  document.getElementById("gaze").value = config.gaze;
  document.getElementById("expression").value = config.expression;
  document.getElementById("hair").value = config.hair;
  document.getElementById("eyeColor").value = config.eyeColor;
  document.getElementById("outfit").value = config.outfit;
  document.getElementById("accessories").value = config.accessories;
  document.getElementById("location").value = config.location;
  document.getElementById("season").value = config.season;
  document.getElementById("timeOfDay").value = config.timeOfDay;
  document.getElementById("background").value = config.background;
}

// Delete a custom preset
function deleteCustomPreset(id) {
  if (confirm("Are you sure you want to delete this custom preset?")) {
    presetManager.deleteCustomPreset(id);
    renderPresets();
  }
}

// Show modal to save current configuration as preset
function showSavePresetModal() {
  const modal = document.getElementById("savePresetModal");
  modal.classList.add("show");
  document.getElementById("presetNameInput").value = "";
  document.getElementById("presetNameInput").focus();
}

// Hide save preset modal
function hideSavePresetModal() {
  const modal = document.getElementById("savePresetModal");
  modal.classList.remove("show");
}

// Save current form state as custom preset
function saveCurrentAsPreset() {
  const name = document.getElementById("presetNameInput").value.trim();

  if (!name) {
    alert("Please enter a preset name");
    return;
  }

  const config = {
    aspectRatio: document.getElementById("aspectRatio").value,
    resolution: document.getElementById("resolution").value,
    engineMode: document.getElementById("engineMode").value,
    identity: document.getElementById("identity").value,
    gaze: document.getElementById("gaze").value,
    expression: document.getElementById("expression").value,
    hair: document.getElementById("hair").value,
    eyeColor: document.getElementById("eyeColor").value,
    outfit: document.getElementById("outfit").value,
    accessories: document.getElementById("accessories").value,
    location: document.getElementById("location").value,
    season: document.getElementById("season").value,
    timeOfDay: document.getElementById("timeOfDay").value,
    background: document.getElementById("background").value,
  };

  const id = presetManager.generateId(name);
  presetManager.saveCustomPreset(id, name, config);

  hideSavePresetModal();
  renderPresets();

  // Show success message
  alert(`✓ Preset "${name}" saved successfully!`);
}

// Tab switching
function switchTab(tabName) {
  // Hide all tabs
  document.getElementById("formatted-tab").style.display = "none";
  document.getElementById("raw-tab").style.display = "none";
  document.getElementById("workflow-tab").style.display = "none";

  // Remove active class from all tab buttons
  document
    .querySelectorAll(".tab")
    .forEach((tab) => tab.classList.remove("active"));

  // Show selected tab
  document.getElementById(`${tabName}-tab`).style.display = "block";

  // Add active class to clicked tab
  event.target.classList.add("active");
}

// Generate JSON from form inputs
function generateJSON() {
  const template = {
    protocol_manifest: {
      version: "19.0_terminal_logic_matrix",
      architecture_type: "Node-Based Hierarchical Schema",
      objective: "Hyper-Realistic Photographic Reconstruction",
      fidelity_parameters: {
        aspect_ratio: document.getElementById("aspectRatio").value,
        resolution: document.getElementById("resolution").value,
        engine_mode: document.getElementById("engineMode").value,
        filtering_synthesis: "Unfiltered / Authentic Grain",
      },
    },
    subject_logic: {
      biometric_anchor: {
        identity: document.getElementById("identity").value,
        likeness_fidelity: 1,
        facial_configuration: {
          gaze: document.getElementById("gaze").value,
          expression: document.getElementById("expression").value,
          posture: "Smartphone selfie angle / Close-up focus",
        },
      },
      anatomical_specifications: {
        dermal_layer: {
          texture: "Visible macro-pores / Fine skin grain",
          environmental_response: getEnvironmentalResponse(),
          detail_mapping: "Subtle freckles across bridge of nose and cheeks",
          shader_logic: "Sub-surface scattering (SSS) / No smoothing filters",
        },
        ocular_system: {
          pigmentation: document.getElementById("eyeColor").value,
          iris_rendering: "High-clarity fiber patterns",
          corneal_reflection: "Sharp natural catchlights",
        },
        capillary_system: {
          color_profile: parseHairColor(document.getElementById("hair").value),
          geometry: parseHairGeometry(document.getElementById("hair").value),
          interaction: "Naturally falling from beneath headwear",
        },
      },
    },
    wardrobe_logic: {
      garment_hierarchy: {
        outerwear: {
          type: document.getElementById("outfit").value,
          material_physics: "Technical fabric / Natural fibers",
          structural_details: extractDetails(
            document.getElementById("outfit").value,
          ),
        },
        accessory_module: {
          items: parseAccessories(document.getElementById("accessories").value),
        },
      },
      cosmetic_logic: {
        philosophy: "Natural 'No-Makeup' Aesthetic",
        application: [
          "Minimal foundation",
          "Natural lip texture",
          getSeasonalBlush(),
        ],
      },
    },
    environment_logic: {
      spatial_scenography: {
        setting: document.getElementById("location").value,
        season: document.getElementById("season").value,
        background_elements: document
          .getElementById("background")
          .value.split(",")
          .map((item) => item.trim()),
      },
      illumination_rig: {
        source_type: document.getElementById("timeOfDay").value,
        chromaticity: getLightingTemp(),
        light_transport:
          "Soft-diffused shadows / Low-contrast global illumination",
      },
    },
    technical_logic: {
      optical_configuration: {
        lens_simulation: "24mm Wide-angle smartphone optics",
        depth_of_field: "Realistic f/2.2 falloff / Creamy bokeh",
        shot_type: "Authentic personal selfie",
      },
      pipeline_directives: {
        color_grade: getColorGrade(),
        texture_retention: "Zero-noise / Organic film grain / 32-bit depth",
        artifacting: "No beauty filters / No idealized perfections",
      },
    },
  };

  currentJSON = template;
  displayJSON();
  generateWorkflow();
}

// Helper functions for JSON generation
function getEnvironmentalResponse() {
  const season = document.getElementById("season").value;
  const responses = {
    Winter: "Softly flushed cheeks / Cold-weather redness",
    Summer: "Sun-kissed glow / Warm radiance",
    Autumn: "Natural warmth / Cool-weather freshness",
    Spring: "Fresh healthy glow / Dewy complexion",
  };
  return responses[season] || "Natural skin response";
}

function getSeasonalBlush() {
  const season = document.getElementById("season").value;
  const blush = {
    Winter: "Cold-exposed blush",
    Summer: "Sun-kissed warmth",
    Autumn: "Natural rosy tones",
    Spring: "Fresh healthy flush",
  };
  return blush[season] || "Natural blush";
}

function getLightingTemp() {
  const timeOfDay = document.getElementById("timeOfDay").value;
  if (timeOfDay.includes("Golden hour") || timeOfDay.includes("sunset")) {
    return "3500K / Warm golden tone";
  } else if (timeOfDay.includes("Blue hour")) {
    return "8000K / Cool blue tone";
  } else if (timeOfDay.includes("daylight")) {
    return "6500K / Cool-tone ambient";
  }
  return "5500K / Neutral daylight";
}

function getColorGrade() {
  const season = document.getElementById("season").value;
  const grades = {
    Winter: "Naturalistic winter palette / Editorial lifestyle",
    Summer: "Vibrant warm palette / Coastal lifestyle",
    Autumn: "Rich earth tones / Cinematic warmth",
    Spring: "Soft pastel palette / Fresh editorial",
  };
  return grades[season] || "Naturalistic palette / Editorial lifestyle";
}

function parseHairColor(hairInput) {
  if (!hairInput || hairInput.trim() === "") return "Natural brunette";
  const parts = hairInput.split("/");
  return parts[0].trim();
}

function parseHairGeometry(hairInput) {
  if (!hairInput || hairInput.trim() === "")
    return "Medium length / Natural texture";
  const parts = hairInput.split("/");
  if (parts.length > 1) {
    return parts
      .slice(1)
      .map((p) => p.trim())
      .join(" / ");
  }
  return "Medium length / Natural texture";
}

function parseAccessories(accessoriesInput) {
  if (!accessoriesInput || accessoriesInput.trim() === "") {
    return ["Minimal styling", "Natural presentation"];
  }
  return accessoriesInput
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
}

function extractDetails(outfit) {
  if (!outfit || outfit.trim() === "") {
    return ["Casual comfortable styling", "Natural material texture"];
  }
  const details = [];
  const lower = outfit.toLowerCase();
  if (lower.includes("collar")) details.push("Distinctive collar design");
  if (lower.includes("button") || lower.includes("snap"))
    details.push("Hardware detailing");
  if (lower.includes("stitch") || lower.includes("quilted"))
    details.push("High-definition fabric stitching");
  if (lower.includes("leather")) details.push("Premium leather texture");
  if (lower.includes("cotton") || lower.includes("linen"))
    details.push("Natural fiber weave");
  if (details.length === 0)
    details.push("High-quality construction", "Natural material texture");
  return details;
}

// Display JSON in output areas
function displayJSON() {
  const formatted = JSON.stringify(currentJSON, null, 2);
  const minified = JSON.stringify(currentJSON);

  document.getElementById("jsonOutput").textContent = formatted;
  document.getElementById("rawOutput").textContent = minified;
}

// Generate Antigravity workflow file content
function generateWorkflow() {
  const workflow = `---
description: Generate photographic JSON template for image reconstruction
---

# Generate Photographic JSON Template

This workflow creates a hyper-realistic photographic reconstruction JSON template based on user specifications.

## Instructions

1. Ask the user for the following information:
   - **Scene type** (e.g., winter ski resort, summer beach, urban night)
   - **Season** (Winter, Spring, Summer, Autumn)
   - **Subject details** (hair color, eye color, outfit description)
   - **Location/Setting** (specific environment description)
   - **Time of day** (golden hour, daylight, blue hour, etc.)

2. Use the following template structure:

\`\`\`json
${JSON.stringify(currentJSON, null, 2)}
\`\`\`

3. Customize the following sections based on user input:
   - **fidelity_parameters**: Adjust aspect_ratio, resolution, and engine_mode
   - **subject_logic**: Update identity, gaze, expression, hair, and eye details
   - **wardrobe_logic**: Describe outfit and accessories
   - **environment_logic**: Set location, season, and background elements
   - **illumination_rig**: Configure lighting based on time of day

4. Save the generated JSON to a file named: \`photo_template_[scene]_[timestamp].json\`

5. Validate that all required fields are populated with realistic, detailed descriptions

## Example Usage

User: "Create a summer beach scene with sunset lighting"

Agent should:
- Set season to "Summer"
- Set timeOfDay to "Golden hour / Warm sunset"
- Configure beach-appropriate outfit and accessories
- Add tropical beach background elements
- Set warm lighting chromaticity (3500K)
`;

  document.getElementById("workflowOutput").textContent = workflow;
}

// Success banner helper
function showSuccessBanner(bannerId) {
  const banner = document.getElementById(bannerId);
  banner.classList.add("show");
  setTimeout(() => {
    banner.classList.remove("show");
  }, 2000);
}

// Clipboard and download functions
function copyToClipboard() {
  const text = JSON.stringify(currentJSON, null, 2);
  navigator.clipboard.writeText(text).then(() => {
    showSuccessBanner("successBanner");
  });
}

function copyRaw() {
  const text = JSON.stringify(currentJSON);
  navigator.clipboard.writeText(text).then(() => {
    showSuccessBanner("rawSuccessBanner");
  });
}

function downloadJSON() {
  if (!currentJSON) return;

  const season = document.getElementById("season").value.toLowerCase();
  const location = document
    .getElementById("location")
    .value.split("/")[0]
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_");
  const timestamp = new Date().toISOString().slice(0, 10);
  const filename = `photo_template_${season}_${location}_${timestamp}.json`;

  const blob = new Blob([JSON.stringify(currentJSON, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function downloadWorkflow() {
  const workflowContent = document.getElementById("workflowOutput").textContent;
  const blob = new Blob([workflowContent], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "generate-photo-json.md";
  a.click();
  URL.revokeObjectURL(url);
}

// Reset form to default state
function resetForm() {
  if (confirm("Are you sure you want to reset all fields?")) {
    document.getElementById("aspectRatio").value = "3:4";
    document.getElementById("resolution").value = "8K RAW / Master Quality";
    document.getElementById("engineMode").value = "Physical Rendering (PBR)";
    document.getElementById("identity").value = "";
    document.getElementById("gaze").value = "";
    document.getElementById("expression").value = "";
    document.getElementById("hair").value = "";
    document.getElementById("eyeColor").value = "";
    document.getElementById("outfit").value = "";
    document.getElementById("accessories").value = "";
    document.getElementById("location").value = "";
    document.getElementById("season").value = "Winter";
    document.getElementById("timeOfDay").value = "Crisp natural daylight";
    document.getElementById("background").value = "";
  }
}
