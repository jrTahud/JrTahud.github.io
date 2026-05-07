# Quick Start Guide

## 🚀 Getting Started

Your React portfolio website is ready to go! Here's how to get started:

### 1. **View Your Portfolio**
   - Development server is running at: `http://localhost:5173/`
   - Open this URL in your browser to see your portfolio in action

### 2. **Customize Your Information**
   Edit these files to add your personal information:
   
   - **Hero Section** → `src/components/Hero.jsx`
     - Update subtitle and intro text
     - Add your social media links (GitHub, LinkedIn, Twitter)
   
   - **About Section** → `src/components/About.jsx`
     - Replace placeholder bio with your story
     - Update statistics
   
   - **Skills** → `src/components/Skills.jsx`
     - Update skill categories and skills
   
   - **Projects** → `src/components/Projects.jsx`
     - Add your own projects with descriptions
     - Add project links and GitHub URLs
   
   - **Experience** → `src/components/Experience.jsx`
     - Add your work history and experience
   
   - **Contact** → `src/components/Contact.jsx`
     - Update email, phone, and location
     - Add social media links
   
   - **Colors** → `src/index.css`
     - Customize the color scheme using CSS variables

### 3. **Development Workflow**
   ```bash
   # Make changes to files
   # Changes auto-reload in browser
   # Test your portfolio locally
   ```

### 4. **Prepare for Deployment**
   ```bash
   # Build for production
   npm run build
   
   # This creates a 'dist' folder ready to deploy
   ```

### 5. **Deploy to GitHub Pages**
   ```bash
   # One-command deployment
   npm run deploy
   
   # Or manually:
   # 1. Build: npm run build
   # 2. Commit: git add dist -f && git commit -m "Deploy"
   # 3. Push: git subtree push --prefix dist origin gh-pages
   ```

## 📝 Important Configuration

### Update Social Links
Find and update these in your components:
- `https://github.com` → Your GitHub profile
- `https://linkedin.com` → Your LinkedIn profile
- `https://twitter.com` → Your Twitter profile
- Email in Contact section
- Phone number in Contact section
- Your city and country

### Contact Form
The form is currently set up to:
- Log messages to browser console
- Show a thank you message

To enable actual email delivery, choose one:
1. **Formspree** (easiest) - Add form action
2. **EmailJS** - Add API credentials
3. **Backend API** - Point to your own server

### Colors
Customize your brand colors in `src/index.css`:
```css
:root {
  --primary-color: #0f172a;      /* Dark blue-black */
  --secondary-color: #1e293b;    /* Lighter blue-black */
  --accent-color: #3b82f6;       /* Bright blue */
  --text-primary: #f1f5f9;       /* Light gray */
  --text-secondary: #cbd5e1;     /* Medium gray */
}
```

## 🎯 Next Steps

1. ✅ View your portfolio at `http://localhost:5173/`
2. ✅ Customize personal information in components
3. ✅ Update colors and styling
4. ✅ Test all sections and responsiveness
5. ✅ Add actual project links and descriptions
6. ✅ Set up form submission (optional)
7. ✅ Build and deploy to GitHub Pages

## 📱 Testing Responsive Design

Press `F12` in your browser to open Developer Tools:
- Test mobile: `Ctrl+Shift+M` (or Cmd+Shift+M on Mac)
- Test different device sizes
- Check all sections work well on mobile

## 🆘 Common Tasks

### Add a New Project
Edit `src/components/Projects.jsx` - add to the `projects` array:
```jsx
{
  id: 7,
  title: 'Your Project Name',
  description: 'Project description',
  tags: ['React', 'Node.js'],
  link: 'https://project-link.com',
  github: 'https://github.com/yourname/project'
}
```

### Change Font or Add Custom Font
Edit `src/index.css` - update the `font-family` in the `body` rule

### Add More Sections
1. Create new component in `src/components/YourSection.jsx`
2. Create corresponding CSS file
3. Import in `src/App.jsx`
4. Add to render output

## 💡 Pro Tips

1. **Keep your information updated** - Update it as you grow
2. **Show real projects** - Replace demo projects with your actual work
3. **Use actual images** - Add project screenshots or logos
4. **Keep it professional** - Maintain consistent tone and design
5. **Test before deploying** - Always test locally first

## 🔗 Useful Links

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [GitHub Pages Guide](https://pages.github.com/)
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)

## 📞 Support

See `README.md` for detailed documentation and troubleshooting.

---

**You're all set! Start customizing your portfolio now! 🎉**
