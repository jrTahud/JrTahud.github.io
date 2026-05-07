# Photo Setup Instructions

Your portfolio is now configured with a modern parallax design and your profile photo!

## 📸 To Add Your Photo:

### Option 1: Drag & Drop (Easiest)
1. Right-click on the `public` folder in VS Code explorer
2. Select "Open in Integrated Terminal" or "Reveal in File Explorer"
3. Drag your photo into the `public` folder
4. Rename it to: `profile.jpg`

### Option 2: VS Code Command Palette
1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Type: "Files: Open Folder"
3. Navigate to `/workspaces/JrTahud.github.io/public`
4. Copy/paste your photo there as `profile.jpg`

### Option 3: Terminal
```bash
# Copy your photo to the public folder
cp /path/to/your/photo.jpg /workspaces/JrTahud.github.io/public/profile.jpg
```

## ✅ Done!

Once the image is in `/workspaces/JrTahud.github.io/public/profile.jpg`, the parallax effect will automatically work!

- Visit `http://localhost:5173/` to see the updated design
- Scroll to see the parallax effect in action
- Your photo appears on the right side of the hero section

## 🎨 Design Features

✨ **Modern Parallax Scrolling**
- Layered background effects
- Floating photo animation
- Content slides during scroll

📱 **Fully Responsive**
- Hero section reorganizes on mobile
- Photo centers on smaller screens
- Perfect on all devices

⚡ **Performance Optimized**
- Smooth 60fps animations
- Hardware-accelerated transforms
- Lightweight parallax implementation
