#!/bin/bash
# Program: Utility to build, deploy, and backup to GitHub
# Author: Adeel Raza Azeemi

# Exit immediately if any command returns a non-zero status
set -e

echo "📦 Running local production build..."
npm run build

echo "🚀 Deploying static frontend to GitHub Pages..."
# Explicitly use npx if global paths act up under script automation
npx gh-pages -d dist/public

echo "💾 Backing up source code to GitHub repository..."
git add .
git commit -m "Correction $(date +'%Y-%m-%d %I:%M')"
git push origin main # Change to master if your default tracking branch is still master

echo "✅ Everything deployed and backed up successfully!"