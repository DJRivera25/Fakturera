# Deployment Guide

This guide will help you deploy the Fakturera application to Render (backend) and Vercel (frontend).

## Prerequisites

1. **GitLab Repository**: Push your code to GitLab
2. **PostgreSQL Database**: Set up a PostgreSQL database (you can use Render's PostgreSQL service)
3. **Render Account**: For backend deployment
4. **Vercel Account**: For frontend deployment

## Step 1: Database Setup

### Option A: Render PostgreSQL (Recommended)

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New" → "PostgreSQL"
3. Choose a name (e.g., `fakturera-db`)
4. Select your region
5. Choose the free plan
6. Click "Create Database"
7. Note down the connection details:
   - Host
   - Port
   - Database name
   - Username
   - Password

### Option B: External PostgreSQL

Use any PostgreSQL provider (AWS RDS, DigitalOcean, etc.)

## Step 2: Backend Deployment (Render)

1. **Create Web Service**

   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New" → "Web Service"
   - Connect your GitLab repository

2. **Configure Service**

   - **Name**: `fakturera-backend`
   - **Environment**: `Node`
   - **Build Command**: `cd server && npm install`
   - **Start Command**: `cd server && npm start`
   - **Plan**: Free

3. **Environment Variables**
   Add the following environment variables:

   ```
   NODE_ENV=production
   DB_HOST=<your-db-host>
   DB_PORT=<your-db-port>
   DB_NAME=<your-db-name>
   DB_USER=<your-db-username>
   DB_PASSWORD=<your-db-password>
   ```

4. **Deploy**

   - Click "Create Web Service"
   - Wait for the build to complete
   - Note the service URL (e.g., `https://fakturera-backend.onrender.com`)

5. **Seed Database**
   - Once deployed, you can seed the database by running:
   ```bash
   # Connect to your Render service and run:
   cd server && node seed.js
   ```

## Step 3: Frontend Deployment (Vercel)

1. **Create Project**

   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitLab repository

2. **Configure Project**

   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

3. **Environment Variables**
   Add the following environment variable:

   ```
   VITE_API_URL=https://your-backend-url.onrender.com
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Note the deployment URL

## Step 4: Update Frontend API Configuration

1. **Update API Base URL**
   In `client/src/pages/TermsPage.jsx` and `client/src/pages/PricelistPage.jsx`, update the axios base URL:

   ```javascript
   // Add this at the top of both files
   axios.defaults.baseURL = import.meta.env.VITE_API_URL || "http://localhost:5000";
   ```

2. **Redeploy Frontend**
   - Push the changes to GitLab
   - Vercel will automatically redeploy

## Step 5: Test Deployment

1. **Test Backend API**

   ```bash
   curl https://your-backend-url.onrender.com/api/health
   ```

2. **Test Frontend**
   - Visit your Vercel deployment URL
   - Test both Terms and Pricelist pages
   - Verify that data is loading from the database

## Environment Variables Reference

### Backend (Render)

```env
NODE_ENV=production
DB_HOST=your-db-host
DB_PORT=5432
DB_NAME=your-db-name
DB_USER=your-db-username
DB_PASSWORD=your-db-password
```

### Frontend (Vercel)

```env
VITE_API_URL=https://your-backend-url.onrender.com
```

## Troubleshooting

### Backend Issues

1. **Database Connection Failed**

   - Verify environment variables are correct
   - Check if database is accessible from Render
   - Ensure database exists and is running

2. **Build Failed**

   - Check build logs in Render dashboard
   - Verify package.json dependencies
   - Ensure all required files are committed

3. **Service Not Starting**
   - Check start command in Render
   - Verify PORT environment variable
   - Check application logs

### Frontend Issues

1. **API Calls Failing**

   - Verify VITE_API_URL is correct
   - Check CORS configuration
   - Ensure backend is running

2. **Build Failed**

   - Check build logs in Vercel
   - Verify all dependencies are installed
   - Check for syntax errors

3. **Page Not Loading**
   - Check browser console for errors
   - Verify routing configuration
   - Check if all assets are loading

## Monitoring and Maintenance

### Render Backend

- Monitor logs in Render dashboard
- Set up alerts for service downtime
- Monitor database performance

### Vercel Frontend

- Monitor deployment status
- Check analytics and performance
- Set up custom domain if needed

## Security Considerations

1. **Environment Variables**

   - Never commit .env files
   - Use secure passwords for database
   - Rotate credentials regularly

2. **CORS Configuration**

   - Restrict CORS to your frontend domain
   - Don't use wildcard (\*) in production

3. **Database Security**
   - Use SSL connections
   - Restrict database access
   - Regular backups

## Cost Optimization

### Render (Free Tier)

- 750 hours/month for web services
- 1GB RAM, 0.1 CPU
- Automatic sleep after 15 minutes of inactivity

### Vercel (Free Tier)

- Unlimited deployments
- 100GB bandwidth/month
- Automatic HTTPS

## Support

If you encounter issues:

1. Check the logs in both Render and Vercel dashboards
2. Verify all environment variables are set correctly
3. Test locally to isolate issues
4. Check the README.md for setup instructions



