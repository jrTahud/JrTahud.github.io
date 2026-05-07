# Portfolio Website

A modern, professional portfolio website built with React and Vite. Features include a responsive design, smooth scrolling navigation, project showcase, and contact form.

## 🚀 Features

- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Professional Layout** - Hero section, About, Skills, Projects, Experience, and Contact sections
- **Smooth Navigation** - Sticky navbar with smooth scrolling
- **Modern Styling** - Professional dark theme with accent colors
- **Interactive Elements** - Hover effects, form validation, and animations
- **GitHub Pages Ready** - Easy deployment to GitHub Pages

## 📋 Sections

1. **Navigation** - Sticky header with smooth scroll navigation
2. **Hero** - Eye-catching introduction with call-to-action buttons
3. **About** - Personal bio and key statistics
4. **Skills** - Organized by categories (Frontend, Backend, Database, Tools)
5. **Projects** - Featured project cards with descriptions and links
6. **Experience** - Timeline of work experience and roles
7. **Contact** - Contact form and social media links
8. **Footer** - Footer with quick links and social profiles

## 🛠️ Customization

### Update Personal Information

Edit `src/components/` files to add your personal information:

#### Hero Section (`src/components/Hero.jsx`)
- Update the subtitle and introduction text
- Add your social media links

#### About Section (`src/components/About.jsx`)
- Replace the placeholder bio with your own story
- Update statistics (Years of Experience, Projects, etc.)

#### Skills Section (`src/components/Skills.jsx`)
- Update skill categories and skill names in the `skillCategories` array
- Add or remove categories as needed

#### Projects Section (`src/components/Projects.jsx`)
- Update the `projects` array with your own projects
- Add project descriptions, technologies, and links

#### Experience Section (`src/components/Experience.jsx`)
- Update the `experiences` array with your work history
- Add company names, positions, dates, and accomplishments

#### Contact Section (`src/components/Contact.jsx`)
- Update contact information (email, phone, location)
- Implement form submission (currently logs to console)
- Add your social media links

#### Footer (`src/components/Footer.jsx`)
- Update your name and description

### Customize Colors

Edit `src/index.css` to change the color scheme:

```css
:root {
  --primary-color: #0f172a;      /* Main background */
  --secondary-color: #1e293b;    /* Secondary background */
  --accent-color: #3b82f6;       /* Accent/highlight color */
  --text-primary: #f1f5f9;       /* Main text color */
  --text-secondary: #cbd5e1;     /* Secondary text color */
  --border-color: #334155;       /* Border color */
}
```

### Update Metadata

Edit `index.html` to update:
- Page title
- Meta description
- favicon

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 🚀 Deployment

### GitHub Pages Deployment

1. **Using npm script** (easiest)
   ```bash
   npm run deploy
   ```

2. **Manual deployment**
   ```bash
   # Build the site
   npm run build
   
   # Deploy the dist folder to GitHub Pages
   git add dist -f
   git commit -m "Deploy portfolio"
   git subtree push --prefix dist origin gh-pages
   ```

3. **GitHub Actions** (automatic on push)
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

## 📁 Project Structure

```
├── index.html              # Main HTML file
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── src/
│   ├── main.jsx           # Entry point
│   ├── App.jsx            # Main app component
│   ├── index.css          # Global styles
│   └── components/        # React components
│       ├── Navigation.jsx/css
│       ├── Hero.jsx/css
│       ├── About.jsx/css
│       ├── Skills.jsx/css
│       ├── Projects.jsx/css
│       ├── Experience.jsx/css
│       ├── Contact.jsx/css
│       └── Footer.jsx/css
```

## 🎨 Technology Stack

- **React** - UI framework
- **Vite** - Build tool
- **CSS3** - Styling with custom properties
- **JavaScript ES6+** - Modern JavaScript

## 📝 Form Submission

The contact form currently logs messages to the console. To enable email notifications:

1. **Using a service like Formspree**
   ```jsx
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Using EmailJS library**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Install: `npm install @emailjs/browser`
   - Update Contact.jsx with your credentials

3. **Using a backend API**
   - Create a backend endpoint to handle form submissions
   - Update the form submission handler in Contact.jsx

## 🔧 Environment Variables

Create a `.env.local` file for any sensitive configuration:
```
VITE_API_URL=https://your-api.com
VITE_EMAIL_SERVICE_ID=your_service_id
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 💡 Tips

1. **Performance**: Images are recommended to be optimized. Use tools like [TinyPNG](https://tinypng.com/)
2. **SEO**: Update meta tags in `index.html` for better search engine optimization
3. **Analytics**: Consider adding Google Analytics or similar service
4. **Custom Domain**: To use a custom domain on GitHub Pages, add a CNAME file in the public directory

## 🐛 Troubleshooting

### Port already in use
```bash
# Use a different port
npm run dev -- --port 3000
```

### Build errors
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Deployment issues
- Ensure your repository is named `username.github.io`
- Check GitHub Pages settings in repository settings
- Verify branch is set to `gh-pages` (if using that branch)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Support

If you have questions or need help customizing your portfolio, feel free to reach out!

---

**Happy coding! 🎉**
