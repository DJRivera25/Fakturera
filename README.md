# Fakturera App

A mini full-stack application replicating the Terms page from 123fakturera.se and featuring a comprehensive dashboard for pricelist management.

## Features

### Terms Page

- **Terms Page**: Replica of the original terms page with language toggle (English/Swedish)
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Database Integration**: PostgreSQL with Sequelize ORM
- **Dynamic API Configuration**: Environment-based API URL management

### Dashboard Page

- **Pricelist Management**: Full CRUD operations for product/service data
- **Responsive Table**: Adapts to desktop, tablet, and mobile views
- **Inline Editing**: Click-to-edit functionality with real-time updates
- **Search Functionality**: Search by Article No. and Product/Service
- **Action Buttons**: New Product, Print List, and Advanced Mode
- **Column Management**: Different column visibility per device type
- **Modern UI**: Clean, professional interface with hover effects

## Tech Stack

### Frontend

- React.js 18.2.0
- Vite 5.0.0
- Vanilla CSS (no frameworks)
- Axios 1.6.2 for API calls
- Lucide React for icons

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
│   │   │   ├── CloseButton.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── TermsContent.jsx
│   │   │   ├── DashboardHeader.jsx
│   │   │   ├── DashboardSidebar.jsx
│   │   │   ├── DashboardContent.jsx
│   │   │   └── DashboardTable.jsx
│   │   ├── pages/         # Page components
│   │   │   ├── TermsPage.jsx
│   │   │   └── DashboardPage.jsx
│   │   ├── services/      # API services
│   │   │   └── api.js
│   │   ├── config/        # Configuration files
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── env.example        # Environment variables example
│   ├── package.json
│   ├── vite.config.js
│   └── vercel.json
├── server/                # Express backend
│   ├── models/           # Sequelize models
│   │   ├── index.js
│   │   ├── Terms.js
│   │   └── Pricelist.js
│   ├── routes/           # API routes
│   │   ├── terms.js
│   │   └── pricelist.js
│   ├── seeders/          # Database seeders
│   │   ├── terms-seeder.js
│   │   └── pricelist-seeder.js
│   ├── config/           # Configuration
│   │   └── cors.js
│   ├── index.js          # Main server file
│   ├── seed.js           # Database seeding script
│   ├── env.example       # Environment variables example
│   └── package.json
├── render.yaml           # Render deployment configuration
├── package.json          # Root package.json
└── README.md
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
cp env.example .env
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

## Pages & Routes

### Terms Page

- **Route**: `/` (default)
- **Features**: Language toggle, responsive design, database-driven content

### Dashboard Page

- **Route**: `/dashboard` (manual navigation)
- **Features**: inline editing, responsive table, database-driven content

## API Endpoints

### Terms

- `GET /api/terms` - Get all terms
- `GET /api/terms/:language` - Get terms by language (en/sv)
- `PUT /api/terms/:id` - Update terms content

### Pricelist

- `GET /api/pricelist` - Get all pricelist items
- `PUT /api/pricelist/:id` - Update pricelist item

## Database Schema

### Terms Table

```sql
CREATE TABLE terms (
  id SERIAL PRIMARY KEY,
  content_en TEXT NOT NULL,
  content_sv TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Pricelist Table

```sql
CREATE TABLE pricelist (
  id SERIAL PRIMARY KEY,
  articleNo VARCHAR(255),
  productService TEXT,
  inPrice DECIMAL(10,2),
  price DECIMAL(10,2),
  unit VARCHAR(255),
  inStock INTEGER,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Responsive Design

The application is fully responsive with breakpoints:

- **Desktop**: > 992px
- **Tablet**: 768px - 991px
- **Mobile Landscape**: 576px - 767px
- **Mobile Portrait**: < 576px

### Responsive Features

#### Terms Page

- Navigation links hide on mobile/tablet
- Hamburger menu for mobile navigation
- Touch-friendly interface elements
- Responsive text sizing and spacing

#### Dashboard Page

- **Desktop**: Full table with all columns
- **Tablet**: Simplified table (hides In Price, Description)
- **Mobile**: Minimal table (Product/Service, Price only)
- **Column Reordering**: In Stock and Unit columns swapped in tablet view
- **Full-Width Elements**: Search inputs and action buttons stretch to full width on mobile
- **Centered Text**: Field values centered on tablet and mobile

## Dashboard Features

### Table Functionality

- **Inline Editing**: Click any field to edit, press Enter to save, Escape to cancel
- **Real-time Updates**: Changes saved to database immediately
- **Visual Feedback**: Blue arrow indicator for editing row
- **Click Outside**: Click outside table to exit editing mode

### Search & Actions

- **Search Fields**: Search by Article No. and Product/Service
- **Action Buttons**: New Product, Print List, Advanced Mode
- **Responsive Layout**: Full-width on mobile, horizontal on desktop

### Column Management

- **Desktop**: All 8 columns visible
- **Tablet**: 6 columns (hides In Price, Description)
- **Mobile**: 3 columns (Product/Service, Price, Actions)

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
5. Add environment variables from `server/env.example`

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

4. **Dashboard Not Loading**
   - Ensure pricelist data is seeded in database
   - Check API endpoints are working
   - Verify frontend can connect to backend

## License

This project is for demonstration purposes only.
