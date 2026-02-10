# Quick Deployment Guide

## Prerequisites
- Node.js installed
- Git installed
- Account on deployment platform (Netlify/Vercel/etc.)

## Option 1: Deploy to Netlify (Recommended - Easiest)

### Method A: Using Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy the site
netlify deploy --prod
```

### Method B: Using Netlify UI
1. Go to https://app.netlify.com
2. Click "Add new site" > "Import an existing project"
3. Connect your GitHub repository
4. Build settings will be auto-detected from `netlify.toml`
5. Click "Deploy site"

## Option 2: Deploy to Vercel

### Method A: Using Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Method B: Using Vercel UI
1. Go to https://vercel.com
2. Click "Add New" > "Project"
3. Import your GitHub repository
4. Settings will be auto-detected from `vercel.json`
5. Click "Deploy"

## Option 3: Deploy to GitHub Pages

1. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/Akira-clothing/',
  // ... rest of config
})
```

2. Build and deploy:
```bash
npm run build
npx gh-pages -d dist
```

3. Enable GitHub Pages in repository settings (Settings > Pages > Source: gh-pages branch)

## Option 4: Deploy to Any Static Host

1. Build the project:
```bash
npm run build
```

2. Upload the `dist` folder contents to your hosting provider:
   - AWS S3 + CloudFront
   - Firebase Hosting
   - Cloudflare Pages
   - Render
   - Railway
   - etc.

## Testing After Deployment

After deployment, test the following:
- [ ] Login page loads correctly
- [ ] Can log in with any email/password (min 6 chars)
- [ ] Home page shows all restaurants
- [ ] Can navigate to menu page
- [ ] Can add items to cart
- [ ] Cart persists on page refresh
- [ ] Can proceed to payment
- [ ] Form validation works
- [ ] Can place order
- [ ] Mobile view works correctly
- [ ] Logout works and redirects to login

## Common Issues

### Issue: Blank page after deployment
**Solution**: Make sure the `base` URL in `vite.config.js` matches your deployment path.

### Issue: 404 on page refresh
**Solution**: Configure redirects/rewrites (already set in netlify.toml and vercel.json)

### Issue: Build fails
**Solution**: Make sure Node.js version is 14+ and all dependencies are installed

## Environment Variables

This application doesn't require any environment variables for basic functionality.

## Custom Domain

Most platforms allow you to add a custom domain:
1. Add your domain in the platform settings
2. Update DNS records as instructed
3. SSL certificate will be automatically provisioned

## Build Information

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 14+ recommended
- Build time: ~1-2 seconds
- Bundle size: ~11KB CSS + ~244KB JS (77KB gzipped)
