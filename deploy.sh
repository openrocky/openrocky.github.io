#!/bin/bash
set -e

# Deploy OpenRocky website to GitHub Pages
# Builds the site and force-pushes to the gh-pages branch

DEPLOY_BRANCH="gh-pages"
BUILD_DIR="build"

echo "==> Building website..."
npm run build

echo "==> Deploying to branch: $DEPLOY_BRANCH"

# Save current branch name
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Create a temporary directory for deployment
TEMP_DIR=$(mktemp -d)

# Copy build output to temp
cp -r "$BUILD_DIR"/* "$TEMP_DIR"/

# Also copy .nojekyll to prevent GitHub Pages from ignoring _files
touch "$TEMP_DIR/.nojekyll"

# Initialize a fresh git repo in temp dir and push to gh-pages
cd "$TEMP_DIR"
git init
git checkout -b "$DEPLOY_BRANCH"
git add -A
git commit -m "Deploy website - $(date '+%Y-%m-%d %H:%M:%S')"

# Get the remote URL from the original repo
REMOTE_URL=$(git -C "$OLDPWD" remote get-url origin)
git remote add origin "$REMOTE_URL"

echo "==> Force pushing to $REMOTE_URL ($DEPLOY_BRANCH)..."
git push -f origin "$DEPLOY_BRANCH"

# Cleanup
cd "$OLDPWD"
rm -rf "$TEMP_DIR"

echo ""
echo "==> Deployed successfully!"
echo ""
echo "Make sure GitHub Pages is configured to serve from the '$DEPLOY_BRANCH' branch:"
echo "  Repository Settings > Pages > Source > Branch: $DEPLOY_BRANCH"
echo ""
