# Photographic JSON Workflow Generator

AI-powered tool for generating hyper-realistic photographic reconstruction JSON templates.

## Features

- 🎨 **Preset Management**: Save and load custom scene presets
- 🤖 **AI Generation**: Generate presets from text descriptions using Google Gemini
- 🧠 **AI Enhancement**: Get intelligent suggestions to improve photorealism
- 📸 **Technical Configuration**: Comprehensive scene customization
- 💾 **Export Options**: Download JSON or Antigravity workflow files
- 🌓 **Dark Mode**: Automatic theme switching

---

## Quick Start

### **Option 1: Basic Usage (No AI)**

1. Open `index.html` in your browser
2. Use presets or fill in the form
3. Click "Generate JSON"

### **Option 2: With AI Features**

#### Prerequisites

- Node.js installed
- Google Gemini API key ([get one free](https://ai.google.dev))

#### Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Configure API key:**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your API key:

   ```
   GEMINI_API_KEY=your_actual_api_key_here
   PORT=3000
   ```

3. **Start the server:**

   ```bash
   npm start
   ```

4. **Open the app:**
   Navigate to `http://localhost:3000` in your browser

---

## AI Features

### 🤖 Generate Preset with AI

Click the **"🤖 Generate with AI"** button and describe your scene:

> *"Professional business portrait in a modern office with natural window lighting"*

The AI will generate a complete preset configuration matching your description.

### 🧠 Enhance JSON with AI

After generating JSON, click **"🧠 Enhance with AI"** to get suggestions:

- Lighting consistency checks
- Seasonal accuracy validation
- Material physics improvements
- Environmental detail enhancements

---

## File Structure

```
├── index.html              # Main application HTML
├── styles.css              # All styling
├── app.js                  # Core application logic
├── presets.js              # Preset management
├── gemini-integration.js   # AI features
├── server.js               # Backend API proxy
├── package.json            # Node dependencies
├── .env.example            # Environment template
├── archive/                # Legacy files
│   ├── JSON Workflow Generator.html
│   └── README.md
├── README.md               # This file
└── QUICKSTART.md           # Quick start guide
```

---

## Usage Examples

### Creating a Custom Preset

1. Fill out the form with your scene details
2. Click **"💾 Save Current as Preset"**
3. Enter a name (e.g., `🌲 Mountain Hiking`)
4. Preset is saved to localStorage

### Using AI Generation

**Example prompt:**

```
Moody cyberpunk street scene at night with neon lights reflecting 
on wet pavement. Subject wearing futuristic tech wear, rain falling, 
purple and blue color palette.
```

**Generated preset includes:**

- Appropriate aspect ratio
- Night-time lighting settings
- Cyberpunk wardrobe details
- Environmental atmospheric elements

---

## API Configuration

### Getting a Gemini API Key

1. Visit [Google AI Studio](https://ai.google.dev)
2. Click "Get API Key"
3. Create a new key (free tier available)
4. Copy to `.env` file

### Rate Limits (Free Tier)

- 10 requests per minute
- 1500 requests per day

---

## Troubleshooting

### AI features not working

- Ensure server is running (`npm start`)
- Check `.env` file has valid API key
- Check browser console for errors

### Server won't start

```bash
# Clear node modules and reinstall
rm -rf node_modules
npm install
```

### Presets not saving

- Check if in private/incognito mode (localStorage disabled)
- Clear browser cache and reload

---

## Development

### Running in development mode

```bash
npm run dev
```

Uses `nodemon` for auto-restart on file changes.

### Adding New Default Presets

Edit `presets.js` and add to the `defaultPresets` object:

```javascript
my_preset: {
  name: "🎨 My Preset",
  aspectRatio: "4:5",
  // ... other fields
}
```

---

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ⚠️ IE11 (not supported)

---

## Technologies

- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **AI**: Google Gemini Flash 3 API
- **Storage**: localStorage (presets)

---

## License

MIT License - free to use and modify

---

## Contributing

This is a personal project, but suggestions are welcome!

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

---

## Support

- Check `QUICKSTART.md` for detailed usage guide
- View `implementation_plan.md` for technical architecture
- Check browser console for debug info

---

**Made with ❤️ for photographers and AI enthusiasts**
