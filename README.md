# Amitesh Kamani Portfolio

A personal introduction website showcasing Amitesh Kamani's professional experience, skills, and personal interests including yoga and meditation.

## Features

- Professional experience timeline
- Skills showcase
- Mindfulness and personal interests sections
- Contact form
- Responsive design for all devices

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Shadcn UI Components
- Framer Motion for animations

## Deployment Options

### Option 1: Replit Deployment

This project is configured to run on Replit with a backend server for the contact form.

1. Fork the Replit project
2. Deploy directly from Replit

### Option 2: GitHub Pages (Static Version)

For a static version without backend functionality, follow these steps:

1. Clone the repository
2. Build for GitHub Pages:
   ```bash
   node scripts/build-for-github.js
   ```
3. Follow the deployment instructions in `scripts/deploy-to-github.md`

#### Contact Form on GitHub Pages

The GitHub Pages version uses [Formspree](https://formspree.io/) for the contact form. 

Before deploying:
1. Create a free account at [Formspree](https://formspree.io/)
2. Create a new form and get your form ID
3. Update the form ID in `client/src/components/Contact.tsx`

## Development

To run the development server:

```bash
npm run dev
```

## License

MIT