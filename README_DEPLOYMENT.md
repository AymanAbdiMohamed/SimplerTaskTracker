# Vercel Deployment Guide

## Prerequisites
- Vercel account
- GitHub repository (optional but recommended)

## Deployment Steps

### 1. Install Vercel CLI
```bash
npm i -g vercel
```

### 2. Set Environment Variables
Create a `.env.local` file in your project root:
```
VITE_API_URL=https://your-vercel-app-url.vercel.app/api/tasks
```

Or set them in Vercel dashboard under Project Settings > Environment Variables.

### 3. Deploy
Option A: Using Vercel CLI
```bash
vercel --prod
```

Option B: Using Vercel Dashboard
1. Connect your GitHub repository
2. Vercel will automatically detect the framework (Vite)
3. Configure environment variables
4. Deploy

## Configuration Files Created

### `vercel.json`
- Configures build settings for Vercel
- Sets up routing for SPA (Single Page Application)
- Handles API rewrites if needed

### `.env.example`
- Template for environment variables
- Copy to `.env.local` for local development

## Important Notes

1. **API Configuration**: The app now uses environment variables for the API URL
2. **Build Process**: Uses `npm run build:vercel` command
3. **SPA Routing**: All routes redirect to `index.html` for proper React Router functionality
4. **Static Output**: Builds to `dist` directory for deployment

## Production Considerations

Since this app uses json-server for mock data, for production you'll need:
1. A real backend API (Node.js, Python, etc.)
2. Update `VITE_API_URL` to point to your production API
3. Deploy backend separately or use Vercel Serverless Functions

## Local Development

For local development with the mock API:
```bash
npm start
```

This runs both the json-server (port 3001) and Vite dev server simultaneously.
