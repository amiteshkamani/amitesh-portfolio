// This script will help users download the static HTML of the site
import express, { Express, Request, Response } from 'express';
import path from 'path';
import fs from 'fs';

// Create a simple endpoint that serves the static HTML
export function addHtmlDownloadEndpoint(app: Express): void {
  app.get('/download-html', (req: Request, res: Response) => {
    // Create a simple HTML page with a download link
    const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Download HTML</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          h1 {
            color: #333;
          }
          .button {
            display: inline-block;
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            font-size: 16px;
            margin: 20px 0;
            cursor: pointer;
            border-radius: 4px;
          }
          pre {
            background-color: #f5f5f5;
            padding: 15px;
            border-radius: 4px;
            overflow-x: auto;
          }
          .note {
            background-color: #fff3cd;
            padding: 10px;
            border-radius: 4px;
            margin-bottom: 20px;
          }
        </style>
      </head>
      <body>
        <h1>Download HTML of the Website</h1>
        
        <div class="note">
          <p><strong>Note:</strong> This downloads the current HTML structure of the site. Since this is a React application, 
          the full interactive functionality won't be present in the static HTML.</p>
        </div>
        
        <a href="/get-static-html" class="button" download="amitesh-portfolio.html">Download HTML</a>
        
        <h2>Alternative Methods</h2>
        <p>For a more complete download, you can use your browser's built-in save feature:</p>
        <ol>
          <li>Right-click anywhere on the homepage</li>
          <li>Select "Save As..." or "Save Page As..."</li>
          <li>Choose "Webpage, Complete" to save with assets</li>
        </ol>
      </body>
    </html>
    `;
    
    res.send(html);
  });
  
  // Endpoint to get the actual HTML
  app.get('/get-static-html', (req: Request, res: Response) => {
    res.setHeader('Content-Disposition', 'attachment; filename=amitesh-portfolio.html');
    res.setHeader('Content-Type', 'text/html');
    
    // Read the index.html file
    const indexPath = path.resolve('client/index.html');
    let indexHtml = fs.readFileSync(indexPath, 'utf8');
    
    // Add title and metadata
    indexHtml = indexHtml.replace('<head>', `<head>
    <title>Amitesh Kamani - Personal Portfolio</title>
    <meta name="description" content="Amitesh Kamani's professional portfolio showcasing experience, skills, and interests including yoga and meditation">
    <meta name="keywords" content="Amitesh Kamani, portfolio, growth marketing, yoga, meditation, mindfulness">
    <meta name="author" content="Amitesh Kamani">`);
    
    res.send(indexHtml);
  });
}