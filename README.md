# Fakturera App

A mini full-stack application replicating the Terms and Pricelist pages from 123fakturera.se.

## Features

- **Terms Page**: Replica of the original terms page with language toggle (English/Swedish)
- **Pricelist Page**: Editable product list with search, add, edit, and delete functionality
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Database Integration**: PostgreSQL with Sequelize ORM
- **Dynamic API Configuration**: Environment-based API URL management

## Tech Stack

### Frontend

- React.js 18.2.0
- Vite 5.0.0
- Vanilla CSS (no frameworks)
- Axios 1.6.2 for API calls

### Backend

- Node.js (Latest LTS)
- Express.js 4.18.2
- Sequelize ORM 6.35.0
- PostgreSQL 14+

### Development Tools

- Nodemon 3.0.1
- Concurrently 8.2.2

## Project Structure

```
fakturera/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   ├── config/        # Configuration files
│   │   └── ...
│   ├── env.example        # Environment variables example
│   └── ...
├── server/                # Express backend
│   ├── models/           # Sequelize models
│   ├── routes/           # API routes
│   ├── seeders/          # Database seeders
│   ├── .env.example      # Environment variables example
│   └── ...
└── ...
```

## Quick Start

### Prerequisites

- Node.js (Latest LTS)
- PostgreSQL 14+
- Git

### 1. Clone and Install Dependencies

```bash
git clone <your-repo-url>
cd fakturera

# Install all dependencies (both client and server)
npm run install-all
```

### 2. Environment Setup

#### Backend Environment

```bash
cd server
cp .env.example .env
```

Edit `server/.env` with your PostgreSQL credentials:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=fakturera_db
DB_USER=your_username
DB_PASSWORD=your_password
PORT=5000
```

#### Frontend Environment

```bash
cd client
cp env.example .env
```

Edit `client/.env` with your API URL:

```env
# For development
VITE_API_BASE_URL=http://localhost:5000

# For production (after deploying backend)
# VITE_API_BASE_URL=https://your-backend-url.onrender.com
```

### 3. Database Setup

```bash
cd server

# Run database migrations and seed data
npm run migrate
npm run seed
```

### 4. Start Development Servers

```bash
# From the root directory
npm run dev
```

This will start both:

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## API Endpoints

### Terms

- `GET /api/terms` - Get all terms
- `GET /api/terms/:language` - Get terms by language (en/sv)
- `PUT /api/terms/:id` - Update terms content

### Pricelist

- `GET /api/pricelist` - Get all pricelist items
- `GET /api/pricelist?search=query` - Search pricelist items
- `GET /api/pricelist/:id` - Get single pricelist item
- `POST /api/pricelist` - Create new pricelist item
- `PUT /api/pricelist/:id` - Update pricelist item
- `DELETE /api/pricelist/:id` - Soft delete pricelist item

## Database Schema

### Terms Table

```sql
CREATE TABLE terms (
  id SERIAL PRIMARY KEY,
  section VARCHAR(50) NOT NULL,
  title_en TEXT NOT NULL,
  title_sv TEXT NOT NULL,
  content_en TEXT NOT NULL,
  content_sv TEXT NOT NULL,
  "order" INTEGER DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Pricelist Table

```sql
CREATE TABLE pricelist (
  id SERIAL PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  description TEXT,
  in_price DECIMAL(10,2),
  price DECIMAL(10,2) NOT NULL,
  stock INTEGER DEFAULT 0,
  deleted_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Responsive Design

The application is fully responsive with breakpoints:

- **Desktop**: > 768px
- **Tablet**: 768px and below
- **Mobile Landscape**: 480px and below
- **Mobile Portrait**: 320px and below

### Responsive Features

- Navigation links hide on mobile/tablet
- Hamburger menu for mobile navigation
- Table columns hide/show based on screen size
- Touch-friendly interface elements

## External Resources

The application uses these external resources:

- **Flags**: https://storage.123fakturere.no/public/flags/
- **Background**: https://storage.123fakturera.se/public/wallpapers/sverige43.jpg
- **Diamond Icon**: https://storage.123fakturera.se/public/icons/diamond.png

## Deployment

### Backend (Render)

1. Connect your GitLab repository to Render
2. Create a new Web Service
3. Set build command: `cd server && npm install`
4. Set start command: `cd server && npm start`
5. Add environment variables from `server/.env.example`

### Frontend (Vercel)

1. Connect your GitLab repository to Vercel
2. Set build command: `cd client && npm run build`
3. Set output directory: `client/dist`
4. Add environment variables from `client/env.example`

## Scripts

### Root Level

- `npm run dev` - Start both client and server in development
- `npm run install-all` - Install dependencies for both client and server
- `npm run build` - Build both client and server
- `npm start` - Start production servers

### Server

- `npm run dev` - Start server with nodemon
- `npm run migrate` - Run database migrations
- `npm run seed` - Seed database with initial data

### Client

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Environment Variables

### Backend (.env)

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=fakturera_db
DB_USER=your_username
DB_PASSWORD=your_password
PORT=5000
```

### Frontend (.env)

```env
VITE_API_BASE_URL=http://localhost:5000
VITE_NODE_ENV=development
```

## Troubleshooting

### Common Issues

1. **Database Connection Error**

   - Ensure PostgreSQL is running
   - Check database credentials in `.env`
   - Verify database exists

2. **API Calls Failing**

   - Check if backend server is running
   - Verify `VITE_API_BASE_URL` in client `.env`
   - Check browser console for CORS errors

3. **Build Errors**
   - Clear `node_modules` and reinstall
   - Check Node.js version compatibility
   - Verify all environment variables are set

## License

This project is for demonstration purposes only.
