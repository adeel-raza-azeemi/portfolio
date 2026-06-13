# GitHub Pages Deployment Guide

Your portfolio website is now ready to deploy to GitHub Pages!

## Quick Start

1. **Copy the build files to your GitHub repository:**
   - Copy the contents of `dist/public/` to your repository's root or `docs/` folder
   - If using the root folder, ensure you have a `.nojekyll` file to bypass Jekyll processing

2. **Configure GitHub Pages:**
   - Go to your repository settings → Pages
   - Set the source to your branch (main) and folder (root or /docs)
   - Save and wait for the site to deploy (usually 1-2 minutes)

3. **Custom Domain (Optional):**
   - If you want to use `adeelraza.net`, add a CNAME file with your domain name
   - Update your domain's DNS records to point to GitHub Pages

## File Structure

The production build is located in `dist/public/`:

```
dist/public/
├── index.html          # Main HTML file (handles all routing)
├── assets/             # CSS and JavaScript bundles
│   ├── index-*.css
│   └── index-*.js
└── __manus__/          # Manus-specific metadata (can be removed)
```

## Important Notes

**Single Page Application (SPA):** The site uses client-side routing. GitHub Pages will serve `index.html` for all routes automatically.

**Build Size:** The build is approximately 1.1MB (uncompressed), well within GitHub Pages limits.

**Updates:** To update your site after making changes, rebuild with `pnpm build` and push the new `dist/public/` contents to your repository.

## Build Command

To rebuild the site after making changes:

```bash
cd /home/ubuntu/adeel-portfolio
pnpm build
```

This generates the optimized production files in `dist/public/`.

## Deployment Steps

1. Create a new repository on GitHub (or use your existing `adeelraza.net` repository)
2. Clone the repository locally
3. Copy all files from `dist/public/` to your repository root
4. Add a `.nojekyll` file to the root (empty file, tells GitHub Pages to skip Jekyll)
5. Commit and push:
   ```bash
   git add .
   git commit -m "Deploy portfolio website"
   git push origin main
   ```
6. Go to repository Settings → Pages and verify the deployment source
7. Your site will be live at `https://yourusername.github.io` or your custom domain

## Design & Features

Your portfolio showcases:

- **Professional Design:** Technical Craftsman aesthetic with deep slate blue and vibrant teal accents
- **Responsive Layout:** Works perfectly on mobile, tablet, and desktop
- **Two Main Pages:**
  - Homepage: Hero section, about, skills, and contact
  - Projects: Three detailed case studies with descriptions and screenshot placeholders
- **Navigation:** Smooth client-side routing between pages
- **Contact Links:** Direct email, phone, and social media links

---

**Your portfolio is ready to make a name for yourself in the MIS development space!**
