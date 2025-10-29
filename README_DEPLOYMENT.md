# Railway Deployment Guide

## Prerequisites
- Railway account
- GitHub repository (optional but recommended)

## Deployment Steps

### 1. Install Railway CLI (optional but recommended)
```bash
npm i -g @railway/cli
```

### `.env.example`
- Template for environment variables
- Copy to `.env.local` for local development

### 2. Configure Environment Variables
In Railway project settings, add:
```
PORT=3001
```

If you deploy the frontend separately (e.g., Vercel/Netlify), set `VITE_API_URL` there to the Railway service URL.

### 3. Deploy json-server Backend
1. Create new Web Service in Railway from this repository
2. Build command (optional): `npm install`
3. Start command: `npm run start`
4. Ensure `npm run build` runs during Railway build so `/dist` exists
5. Expose port `3001`

### 4. Deploy Frontend
Deploy the React app to your preferred static host (e.g., Netlify, Vercel, Railway static site). Run `npm run build` and serve `dist/`.

## Troubleshooting 502 Errors

1. Ensure the service is awake (Railway free tier may sleep after inactivity)
2. Confirm `npm run start` is executing json-server and listening on `0.0.0.0`
3. Verify `PORT` environment variable matches the port exposed by Railway
4. Check logs (`railway logs`) for runtime errors
5. Make sure frontend `VITE_API_URL` points to `https://<service>.up.railway.app`

## Local Development

Run the mock API and frontend together:
```bash
npm run dev:full
```

Frontend only:
```bash
npm run dev
```

Mock API only:
```bash
npm run server
```

## Production Considerations

- Railway free tier storage is ephemeral; json-server data resets on redeploy
- For persistent data, connect Railway to a database (Postgres, etc.)
- Secure the API if exposing it publicly (CORS, auth, etc.)
