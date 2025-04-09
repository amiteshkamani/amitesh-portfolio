import fetch from 'node-fetch';
import fs from 'fs/promises';

const PORT = 5000; // The port where your application is running

async function saveHtml() {
  try {
    console.log('Fetching HTML from the running application...');
    const response = await fetch(`http://localhost:${PORT}/`);
    const html = await response.text();
    
    await fs.writeFile('exported-website.html', html);
    console.log('HTML saved to exported-website.html');
  } catch (error) {
    console.error('Error saving HTML:', error);
  }
}

saveHtml();