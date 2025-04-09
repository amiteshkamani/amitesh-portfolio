/**
 * This script builds the project for GitHub Pages deployment
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a GitHub Pages CNAME file if needed
function createCnameFile(domain) {
  if (domain) {
    const distPath = path.resolve(__dirname, '..', 'dist');
    fs.writeFileSync(path.resolve(distPath, 'CNAME'), domain);
    console.log(`✅ Created CNAME file for ${domain}`);
  }
}

// Create a .nojekyll file to disable Jekyll processing
function createNojekyllFile() {
  const distPath = path.resolve(__dirname, '..', 'dist');
  fs.writeFileSync(path.resolve(distPath, '.nojekyll'), '');
  console.log('✅ Created .nojekyll file');
}

// Main build function
async function buildForGitHub() {
  try {
    console.log('🚀 Building for GitHub Pages...');
    
    // Run the build with the GitHub config
    execSync('npx vite build --config vite.config.github.ts', { stdio: 'inherit' });
    
    // Create GitHub Pages specific files
    createNojekyllFile();
    
    // Uncomment and customize if you have a custom domain
    // createCnameFile('your-custom-domain.com');
    
    console.log('✅ Build completed successfully!');
    console.log('\n📋 Next steps:');
    console.log('1. Push the dist folder to your GitHub repository');
    console.log('2. Enable GitHub Pages in your repository settings');
    console.log('3. Set the source to the branch and folder containing your dist files');
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

buildForGitHub();