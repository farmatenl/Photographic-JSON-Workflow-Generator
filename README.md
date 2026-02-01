# Photographic JSON Workflow Generator

A modular web application to generate hyper-realistic photographic reconstruction JSON templates with custom preset management.

## 📁 File Structure

```
/Photographic JSON Workflow Generator
  ├── index.html          # Main HTML structure
  ├── styles.css          # All styling & theme
  ├── app.js              # Application logic
  ├── presets.js          # Preset management (default + custom)
  └── README.md           # This file
```

## 🚀 Getting Started

**Simply open `index.html` in your web browser!**

No build tools, no dependencies, no server required.

## ✨ Features

### 🎨 Preset Management
- **6 Default Presets**: Winter Ski, Summer Beach, Autumn Forest, Spring Garden, Urban Night, Desert Sunset
- **Custom Presets**: Save your current configuration as a reusable preset
- **LocalStorage Persistence**: Custom presets are saved across browser sessions
- **Visual Distinction**: Custom presets have a special dashed border style
- **Easy Deletion**: Hover over custom presets to reveal the delete button

### 📸 Scene Configuration
- Technical settings (aspect ratio, resolution, engine mode)
- Subject details (identity, gaze, expression, hair, eyes)
- Wardrobe & styling (outfit, accessories)
- Environment settings (location, season, time of day, background)

### 📤 Export Options
- **Formatted JSON**: Pretty-printed, human-readable
- **Raw JSON**: Minified, ready for APIs
- **Antigravity Workflow**: Ready to save as `.agent/workflows/generate-photo-json.md`
- **Download**: Save JSON files with auto-generated filenames
- **Copy to Clipboard**: One-click copying with smooth success animations

## 🎯 How to Add a Custom Preset

### Method 1: Via UI (Recommended)
1. Configure your desired scene in the form
2. Click **"💾 Save Current as Preset"**
3. Enter a name (e.g., "🌲 Mountain Hiking")
4. Click **"Save Preset"**
5. Your preset now appears in the grid with a dashed border

### Method 2: Programmatically
Edit `presets.js` and add to the `defaultPresets` object:

```javascript
mountain_hiking: {
    name: '🌲 Mountain Hiking',
    aspectRatio: '4:5',
    resolution: '8K RAW / Master Quality',
    engineMode: 'Physical Rendering (PBR)',
    identity: 'Reference image',
    gaze: 'Looking toward distant peak',
    expression: 'Determined focus / Adventure spirit',
    hair: 'Dark brown / Ponytail / Athletic',
    eyeColor: 'Deep brown',
    outfit: 'Technical hiking jacket, Moisture-wicking base layer',
    accessories: 'Hiking backpack, Trekking poles',
    location: 'Mountain Trail / Alpine Meadow',
    season: 'Summer',
    timeOfDay: 'Crisp natural daylight',
    background: 'Rocky peaks, Pine forest, Wildflower meadow'
}
```

## 🗂️ Where Custom Presets are Stored

Custom presets are stored in your browser's **localStorage** under the key:
```
photoWorkflowCustomPresets
```

To view them:
1. Open browser DevTools (F12)
2. Go to **Application** > **Local Storage**
3. Find the key `photoWorkflowCustomPresets`

To export/backup:
```javascript
// In browser console:
console.log(localStorage.getItem('photoWorkflowCustomPresets'));
```

To import/restore:
```javascript
// In browser console:
localStorage.setItem('photoWorkflowCustomPresets', 'YOUR_JSON_HERE');
location.reload();
```

## 🎨 Customization

### Adding New Default Presets
Edit `presets.js` → `defaultPresets` object

### Modifying Styles
Edit `styles.css` → Modify CSS variables in `:root` for theme changes

### Extending Functionality
Edit `app.js` → Add new functions or modify JSON generation logic

## 🔧 Technical Details

- **No Dependencies**: Pure HTML, CSS, JavaScript
- **LocalStorage**: Persistent custom presets
- **Responsive**: Works on desktop and mobile
- **Dark Mode**: Automatic dark mode based on system preferences
- **Modern CSS**: CSS Grid, Flexbox, CSS Variables
- **ES6+**: Modern JavaScript with arrow functions, template literals

## 📋 Browser Compatibility

- ✅ Chrome/Edge 88+
- ✅ Firefox 78+
- ✅ Safari 14+
- ✅ Opera 74+

## 🐛 Troubleshooting

### Custom presets not saving?
- Check if localStorage is enabled in your browser
- Make sure you're not in private/incognito mode

### Presets disappeared?
- Check if browser data was cleared
- Create a backup by exporting from DevTools

### Styling looks broken?
- Ensure `styles.css` is in the same directory as `index.html`
- Check browser console for loading errors

## 📝 License

This project is open source and available for personal and commercial use.

---

**Created with ❤️ for hyper-realistic photographic reconstruction workflows**
