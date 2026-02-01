// Default preset configurations
const defaultPresets = {
  winter_ski: {
    name: "❄️ Winter Ski",
    aspectRatio: "3:4",
    resolution: "8K RAW / Master Quality",
    engineMode: "Physical Rendering (PBR)",
    identity: "Reference image",
    gaze: "Direct-to-lens / High-intimacy proximity",
    expression: "Slight natural smile / Genuine winter joy",
    hair: "Deep red / Long / Straight / High-luster strands",
    eyeColor: "Light grey-blue",
    outfit:
      "White quilted winter jacket with black contrast collar and snap-button hardware",
    accessories:
      "Beige knitted wool beanie, Black ski goggles resting on forehead",
    location: "Alpine Ski Resort / High-Altitude Summit",
    season: "Winter",
    timeOfDay: "Crisp natural daylight",
    background:
      "Snow-capped mountain ranges, Active ski lift / Gondola system, Groomed powder-snow slope, Clear sky with scattered cirrus clouds",
  },
  summer_beach: {
    name: "🏖️ Summer Beach",
    aspectRatio: "16:9",
    resolution: "8K RAW / Master Quality",
    engineMode: "Physical Rendering (PBR)",
    identity: "Reference image",
    gaze: "Relaxed gaze toward horizon",
    expression: "Bright genuine smile / Summer happiness",
    hair: "Sun-bleached blonde / Wavy / Beach-textured",
    eyeColor: "Ocean blue",
    outfit:
      "White linen sundress with floral embroidery, Lightweight fabric with natural drape",
    accessories:
      "Wide-brim straw hat, Polarized sunglasses, Delicate gold jewelry",
    location: "Tropical Beach / Coastal Paradise",
    season: "Summer",
    timeOfDay: "Golden hour / Warm sunset",
    background:
      "Turquoise ocean waves, Palm trees swaying, Sandy beach with footprints, Sailboats on horizon",
  },
  autumn_forest: {
    name: "🍂 Autumn Forest",
    aspectRatio: "4:5",
    resolution: "8K RAW / Master Quality",
    engineMode: "Physical Rendering (PBR)",
    identity: "Reference image",
    gaze: "Contemplative look into distance",
    expression: "Peaceful contentment / Autumn serenity",
    hair: "Auburn brown / Shoulder-length / Natural waves",
    eyeColor: "Warm hazel",
    outfit:
      "Rust-colored oversized knit sweater, Dark denim jeans, Brown leather boots",
    accessories: "Wool scarf with plaid pattern, Small leather crossbody bag",
    location: "Deciduous Forest Trail / Woodland Path",
    season: "Autumn",
    timeOfDay: "Golden hour / Warm sunset",
    background:
      "Golden and crimson fall foliage, Fallen leaves carpet, Dappled sunlight through trees, Misty atmosphere",
  },
  spring_garden: {
    name: "🌸 Spring Garden",
    aspectRatio: "1:1",
    resolution: "8K RAW / Master Quality",
    engineMode: "Physical Rendering (PBR)",
    identity: "Reference image",
    gaze: "Admiring flowers / Downward gaze",
    expression: "Soft smile / Spring renewal joy",
    hair: "Honey blonde / Medium length / Soft curls",
    eyeColor: "Green with golden flecks",
    outfit:
      "Pastel pink cotton blouse, White flowing midi skirt, Tan woven sandals",
    accessories: "Delicate floral crown, Small woven basket",
    location: "Botanical Garden / Spring Flower Field",
    season: "Spring",
    timeOfDay: "Crisp natural daylight",
    background:
      "Cherry blossom trees in full bloom, Tulip beds in vibrant colors, Stone garden pathways, Butterflies and bees",
  },
  urban_night: {
    name: "🌃 Urban Night",
    aspectRatio: "9:16",
    resolution: "8K RAW / Master Quality",
    engineMode: "Cinematic Ray Tracing",
    identity: "Reference image",
    gaze: "Confident direct camera contact",
    expression: "Subtle smirk / Urban confidence",
    hair: "Jet black / Sleek straight / High shine",
    eyeColor: "Dark brown",
    outfit:
      "Black leather jacket with metal hardware, Dark fitted jeans, White minimalist sneakers",
    accessories: "Silver chain necklace, Smart watch, Wireless earbuds",
    location: "Downtown Urban District / Night Street Scene",
    season: "Autumn",
    timeOfDay: "Blue hour / Evening twilight",
    background:
      "Neon storefront signs, Blurred car light trails, Reflective wet pavement, Modern skyscrapers",
  },
  desert_sunset: {
    name: "🏜️ Desert Sunset",
    aspectRatio: "16:9",
    resolution: "8K RAW / Master Quality",
    engineMode: "Physical Rendering (PBR)",
    identity: "Reference image",
    gaze: "Gazing at sunset / Profile angle",
    expression: "Peaceful wonder / Desert tranquility",
    hair: "Dark brown / Long / Wind-swept",
    eyeColor: "Deep brown",
    outfit: "Earth-tone linen shirt, Khaki cargo pants, Desert hiking boots",
    accessories: "Wide-brim adventure hat, Bandana around neck, Camera strap",
    location: "Desert Canyon / Sandstone Formation",
    season: "Summer",
    timeOfDay: "Golden hour / Warm sunset",
    background:
      "Red rock formations, Sand dunes with ripple patterns, Dramatic cloud formations, Distant mesa silhouettes",
  },
  malibu_vibes: {
    name: "🌊 Malibu Vibes",
    aspectRatio: "4:5",
    resolution: "8K RAW / Master Quality",
    engineMode: "Physical Rendering (PBR)",
    identity: "Reference image",
    gaze: "Looking at viewer",
    expression: "Bright genuine smile / Summer happiness",
    hair: "Deep red",
    eyeColor: "Grey-green",
    outfit: "White linen sundress, Lightweight fabric",
    accessories: "Gold jewelry",
    location: "Malibu Beach / California Coast",
    season: "Summer",
    timeOfDay: "Golden hour / Warm sunset",
    background: "Ocean waves, Sandy beach with footprints",
  },
  winter_cabin_cozy: {
    name: "🔥 Winter Cabin Cozy",
    aspectRatio: "4:5",
    resolution: "8K RAW / Master Quality",
    engineMode: "Physical Rendering (PBR)",
    identity: "Reference image",
    gaze: "Warm direct engagement with camera",
    expression: "Genuine contentment / Intimate comfort",
    hair: "Chestnut brown / Loose waves / Tousled texture",
    eyeColor: "Warm brown",
    outfit:
      "Oversized cream cable-knit sweater, Dark wool leggings, Cozy wool socks",
    accessories:
      "Chunky knit blanket draped over shoulders, Steaming mug of hot chocolate, Wooden cabin interior behind",
    location: "Rustic Log Cabin Interior / Fireplace Alcove",
    season: "Winter",
    timeOfDay: "Late afternoon / Warm firelight",
    background:
      "Stone fireplace with crackling flames, Wooden beam ceiling, Warm amber interior lighting, Snow visible through cabin window",
  },

  mountain_peak_summit: {
    name: "⛰️ Mountain Peak Summit",
    aspectRatio: "16:9",
    resolution: "8K RAW / Master Quality",
    engineMode: "Physical Rendering (PBR)",
    identity: "Reference image",
    gaze: "Triumphant gaze toward horizon",
    expression: "Achievement satisfaction / Mountain triumph",
    hair: "Dark blonde / Windswept / Tousled by altitude",
    eyeColor: "Bright blue",
    outfit:
      "Technical mountaineering jacket in sapphire blue, High-altitude climbing pants, Premium hiking boots",
    accessories:
      "Mountaineering helmet with strap, Ice axe nearby, Oxygen delivery system subtle visibility, Adventure backpack",
    location: "Alpine Mountain Summit / 4000m+ Elevation",
    season: "Summer",
    timeOfDay: "Clear midday / High-altitude sunlight",
    background:
      "360-degree mountain range vista, Lower peaks and valleys far below, Thin atmospheric haze, Glacier formations, Clear blue sky with minimal clouds",
  },

  tropical_monsoon: {
    name: "🌧️ Tropical Monsoon",
    aspectRatio: "3:4",
    resolution: "8K RAW / Master Quality",
    engineMode: "Physical Rendering (PBR)",
    identity: "Reference image",
    gaze: "Contemplative gaze through rain",
    expression: "Thoughtful serenity / Rain-soaked reflection",
    hair: "Black / Long / Wet strands / Sleek appearance",
    eyeColor: "Dark brown",
    outfit:
      "Thin cream-colored linen shirt with water marks, Natural fabric drape, lightweight breathable fabric",
    accessories:
      "Vintage leather satchel with weathered patina, Droplets catching light, Minimal jewelry",
    location: "Tropical Jungle Path / Monsoon Season",
    season: "Summer",
    timeOfDay: "Overcast afternoon / Heavy grey diffuse light",
    background:
      "Lush jungle vegetation with rain-soaked leaves, Tropical downpour with visible rain streaks, Misty atmospheric depth, Rich green canopy, Weathered stone path",
  },

  professional_studio_portrait: {
    name: "💼 Professional Studio",
    aspectRatio: "4:5",
    resolution: "8K RAW / Master Quality",
    engineMode: "Physical Rendering (PBR)",
    identity: "Reference image",
    gaze: "Direct confident eye contact with camera",
    expression: "Professional composure / Executive presence",
    hair: "Deep black / Styled perfectly / Professional polish",
    eyeColor: "Dark brown",
    outfit:
      "Navy tailored blazer with subtle texture, White crisp dress shirt, Silk tie in corporate blue",
    accessories:
      "Stainless steel timepiece, Minimal gold cufflinks, Professional leather portfolio edge visible",
    location: "High-End Studio / Professional Setting",
    season: "Year-round",
    timeOfDay: "Controlled studio lighting / Neutral daylight temperature",
    background:
      "Softly blurred neutral grey backdrop, Professional three-point lighting setup, Subtle bokeh, Clean studio environment",
  },

  meadow_golden_hour: {
    name: "🌾 Meadow Golden Hour",
    aspectRatio: "16:9",
    resolution: "8K RAW / Master Quality",
    engineMode: "Physical Rendering (PBR)",
    identity: "Reference image",
    gaze: "Gentle upward gaze toward sky",
    expression: "Peaceful joy / Rural contentment",
    hair: "Light brown / Medium length / Soft texture / Backlit",
    eyeColor: "Hazel green",
    outfit:
      "Sage green linen dress with bohemian detailing, Natural breathable fabric, Barefoot or minimal sandals",
    accessories:
      "Wildflower crown with natural blooms, Loose woven shawl, Vintage leather bracelet",
    location: "Wildflower Meadow / Rolling Countryside",
    season: "Late Summer",
    timeOfDay: "Golden hour / Warm sunset glow",
    background:
      "Endless golden grassland with wildflowers, Warm amber backlighting, Gentle rolling hills, Soft bokeh grass foreground, Clear warm sky",
  },

  athletic_mountain_biking: {
    name: "🚵 Athletic Adventure",
    aspectRatio: "9:16",
    resolution: "8K RAW / Master Quality",
    engineMode: "Physical Rendering (PBR)",
    identity: "Reference image",
    gaze: "Focused determined gaze ahead",
    expression: "Active determination / Athletic confidence",
    hair: "Dark brown / Short / Practical style",
    eyeColor: "Bright green",
    outfit:
      "Moisture-wicking technical jersey in vibrant teal, Performance cycling shorts, Trail running shoes",
    accessories:
      "Safety helmet with ventilation, Sports sunglasses, Water-resistant smartwatch, Technical gloves",
    location: "Mountain Trail / Forest Terrain",
    season: "Summer",
    timeOfDay: "Mid-morning / Natural sunlight",
    background:
      "Challenging terrain with dirt trail, Dense evergreen forest, Dappled filtered sunlight, Technical track features, Mountain elevation view",
  },

  winter_town_evening: {
    name: "❄️ Winter Evening Town",
    aspectRatio: "3:4",
    resolution: "8K RAW / Master Quality",
    engineMode: "Cinematic Ray Tracing",
    identity: "Reference image",
    gaze: "Nostalgic gaze at snow-covered street",
    expression: "Wistful warmth / Holiday nostalgia",
    hair: "Auburn red / Long / Covered partially by hat",
    eyeColor: "Light green",
    outfit:
      "Burgundy wool coat with vintage buttons, Dark burgundy scarf with fringe, Cream cable-knit turtleneck underneath",
    accessories:
      "Knit beanie in cream, Leather gloves, Vintage satchel with frosted appearance",
    location: "Historic Small Town / Snow-Covered Street",
    season: "Winter",
    timeOfDay: "Blue hour / Early evening twilight",
    background:
      "Vintage storefront with warm window lights, Fresh snow coverage on rooftops and street, Gas lanterns with glow, Warm interior shop lights contrast cool street, Empty peaceful street",
  },

  industrial_warehouse: {
    name: "🏭 Industrial Edge",
    aspectRatio: "16:9",
    resolution: "8K RAW / Master Quality",
    engineMode: "Cinematic Ray Tracing",
    identity: "Reference image",
    gaze: "Intense direct camera stare",
    expression: "Moody confidence / Urban intensity",
    hair: "Jet black / Sleek pulled back / High shine",
    eyeColor: "Steel grey",
    outfit:
      "Oversized grey industrial jacket with cargo pockets, Black fitted tank underneath, Grey tactical pants",
    accessories:
      "Heavy silver chain necklace, Metal rings, Technical utility belt, Industrial boots with metal accents",
    location: "Industrial Warehouse / Factory District",
    season: "Autumn",
    timeOfDay: "Overcast afternoon / Cool grey light",
    background:
      "Exposed brick wall with weathered texture, Industrial metal beams and support structures, Cool blue-grey color grading, Dramatic shadows from structure, Urban decay aesthetic",
  },

  tropical_storm_dramatic: {
    name: "⛈️ Tropical Storm Drama",
    aspectRatio: "4:5",
    resolution: "8K RAW / Master Quality",
    engineMode: "Cinematic Ray Tracing",
    identity: "Reference image",
    gaze: "Intense gaze into storm distance",
    expression: "Powerful presence / Storm intensity",
    hair: "Dark brown / Long / Windswept dramatically",
    eyeColor: "Deep amber",
    outfit:
      "Sleek black tactical jacket with water resistance, Form-fitting performance wear underneath, Rugged boots",
    accessories:
      "Heavy weather-resistant belt, Utility harness, Water droplets on skin and clothing",
    location: "Tropical Coastline / Storm Front",
    season: "Summer",
    timeOfDay: "Storm afternoon / Dark dramatic sky",
    background:
      "Roiling dark thunderclouds, Turbulent ocean waves with white-cap intensity, Wind-driven rain visible, Lightning illumination, Dramatic contrast between sky and ocean",
  },

  alpine_meadow_spring: {
    name: "🏔️ Alpine Meadow Spring",
    aspectRatio: "16:9",
    resolution: "8K RAW / Master Quality",
    engineMode: "Physical Rendering (PBR)",
    identity: "Reference image",
    gaze: "Peaceful downward gaze at wildflowers",
    expression: "Serene joy / Mountain renewal",
    hair: "Honey blonde / Long / Soft waves",
    eyeColor: "Clear blue",
    outfit:
      "Cream botanical-print blouse with delicate embroidery, Soft pastel maxi skirt, Lightweight mountain boots",
    accessories:
      "Floral wildflower wreath, Lightweight cotton shawl, Vintage woven basket with alpine flowers",
    location: "Alpine Mountain Meadow / 2000m Elevation",
    season: "Spring",
    timeOfDay: "Bright natural daylight / Crisp mountain light",
    background:
      "Alpine meadow in full spring bloom with purple lupine flowers, Snow-capped peaks in distant background, Clear crisp mountain air, Emerald grass meadow, Scattered wildflower carpets",
  },
};

// Preset Management Class
class PresetManager {
  constructor() {
    this.STORAGE_KEY = "photoWorkflowCustomPresets";
  }

  // Get all custom presets from localStorage
  getCustomPresets() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  }

  // Save a custom preset
  saveCustomPreset(id, name, config) {
    const customPresets = this.getCustomPresets();
    customPresets[id] = {
      name: name,
      ...config,
    };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(customPresets));
    return true;
  }

  // Delete a custom preset
  deleteCustomPreset(id) {
    const customPresets = this.getCustomPresets();
    delete customPresets[id];
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(customPresets));
    return true;
  }

  // Get all presets (default + custom)
  getAllPresets() {
    const customPresets = this.getCustomPresets();
    return { ...defaultPresets, ...customPresets };
  }

  // Check if a preset is custom
  isCustomPreset(id) {
    return !defaultPresets.hasOwnProperty(id);
  }

  // Generate a unique ID for custom presets
  generateId(name) {
    const timestamp = Date.now();
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "_");
    return `custom_${slug}_${timestamp}`;
  }
}

// Export for use in app.js
const presetManager = new PresetManager();
