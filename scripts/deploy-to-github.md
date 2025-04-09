# Deploying to GitHub Pages

## One-time Setup

1. Create a repository on GitHub (e.g., `username/amitesh-portfolio`)
2. Initialize git in your project (if not already initialized):
   ```bash
   git init
   ```

3. Add your GitHub repository as a remote:
   ```bash
   git remote add origin https://github.com/username/amitesh-portfolio.git
   ```

## Build and Deploy Process

1. First, build your project for GitHub Pages:
   ```bash
   node scripts/build-for-github.js
   ```

2. Create a new branch for GitHub Pages (if not done already):
   ```bash
   git checkout -b gh-pages
   ```

3. Add your dist files to git:
   ```bash
   git add dist -f
   ```

4. Commit your changes:
   ```bash
   git commit -m "Deploy to GitHub Pages"
   ```

5. Push to GitHub:
   ```bash
   git push origin gh-pages -f
   ```

6. Go to your GitHub repository settings and enable GitHub Pages:
   - Navigate to Settings > Pages
   - Select the `gh-pages` branch as the source
   - Save the settings

7. Your site will be published at `https://username.github.io/amitesh-portfolio/`

## Using a Custom Domain (Optional)

If you want to use a custom domain:

1. Go to your GitHub repository settings
2. Navigate to Settings > Pages
3. Under "Custom domain", enter your domain name
4. Save the settings
5. Update your DNS settings with your domain provider:
   - For an apex domain (example.com), add A records pointing to GitHub's IP addresses
   - For a subdomain (www.example.com), add a CNAME record pointing to your GitHub Pages URL

6. Uncomment and update the CNAME creation in the build script:
   ```javascript
   createCnameFile('your-custom-domain.com');
   ```