# Quick Start Guide

## 🎉 Your Application Has Been Refactored

The Photographic JSON Workflow Generator has been successfully split into separate, maintainable files with new preset management features.

---

## 📂 What Changed?

### Before

```
JSON Workflow Generator.html  (1 monolithic file, 844 lines)
```

### After

```
index.html      (197 lines) - Clean HTML structure
styles.css      (259 lines) - All styling
app.js          (507 lines) - Application logic
presets.js      (203 lines) - Preset management
README.md       - Documentation
QUICKSTART.md   - This file
```

---

## 🚀 How to Use

### Step 1: Open the Application

**Double-click `index.html`** or right-click → "Open with" → Your browser

### Step 2: Try a Preset

Click any preset button (e.g., **❄️ Winter Ski**) to load its configuration

### Step 3: Generate JSON

Click **🚀 Generate JSON** to see the output

---

## 💾 New Feature: Save Custom Presets

### Creating a Custom Preset

1. **Configure your scene** using the form fields
2. Click **💾 Save Current as Preset**
3. Enter a name (tip: add an emoji! e.g., `🌲 Mountain Hiking`)
4. Click **Save Preset**

### Your Custom Preset Will

- ✅ Appear in the preset grid with a **dashed border**
- ✅ Be **saved in your browser** (persists across sessions)
- ✅ Load all your settings with one click
- ✅ Show a **delete button** on hover (×)

### Managing Custom Presets

**Delete a preset:**

- Hover over any custom preset (dashed border)
- Click the **×** button that appears
- Confirm deletion

**Export/Backup your presets:**

1. Open browser DevTools (F12)
2. Console tab
3. Run: `console.log(localStorage.getItem('photoWorkflowCustomPresets'))`
4. Copy the output to save as backup

**Import/Restore presets:**

1. Open browser DevTools (F12)
2. Console tab
3. Run: `localStorage.setItem('photoWorkflowCustomPresets', 'YOUR_BACKUP_JSON');`
4. Refresh the page

---

## 🎨 Visual Differences

### Default Presets

- Solid background
- Solid border
- No delete button

### Custom Presets

- Gradient background (subtle blue/green)
- **Dashed border** (✨ this is the key identifier)
- Delete button (×) appears on hover

---

## 🧪 Test It Out

Try this workflow:

1. Click **🏖️ Summer Beach** preset
2. Change "Location/Setting" to `Malibu Beach / California Coast`
3. Change "Accessories" to `Vintage sunglasses, Shell necklace`
4. Click **💾 Save Current as Preset**
5. Name it: `🌊 Malibu Vibes`
6. Click **Save Preset**
7. ✅ Your new preset appears with a dashed border!
8. Refresh the page → It's still there! (localStorage magic)

---

## ⚙️ Customization

Want to add more default presets? Edit `presets.js`:

```javascript
// Add this to the defaultPresets object:
tokyo_street: {
    name: '🗼 Tokyo Street',
    aspectRatio: '9:16',
    resolution: '8K RAW / Master Quality',
    engineMode: 'Cinematic Ray Tracing',
    // ... add remaining fields
}
```

---

## 🐛 Troubleshooting

**Problem:** Custom presets not appearing after refresh

- **Solution:** Check if you're in private/incognito mode (localStorage disabled)

**Problem:** Can't delete a default preset

- **Solution:** Default presets (solid border) can't be deleted, only custom ones (dashed border)

**Problem:** Styling looks wrong

- **Solution:** Ensure `styles.css` is in the same folder as `index.html`

---

## 📞 Need Help?

Check `README.md` for detailed documentation including:

- Complete feature list
- Technical architecture
- Browser compatibility
- Advanced customization

---

**Happy preset creating! 🎨✨**
