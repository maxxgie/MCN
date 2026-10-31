# MCN Installation Guide

## Prerequisites
- Node.js >= 20.0.0
- npm >= 10.0.0
- Git

## Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd MCN
```

### 2. Install dependencies
```bash
npm install
```

### 3. Build all packages
```bash
npm run build
```

### 4. Start development servers

#### Start API server
```bash
cd apps/api
npm run dev
```
API will run on http://localhost:3001

#### Start Web app
```bash
cd apps/web
npm run dev
```
Web app will run on http://localhost:5173

### 5. Access the application
Open your browser and navigate to http://localhost:5173

## First Launch
On first launch, the system will:
1. Create `./data/` directory
2. Initialize SQLite database (`mcn.db`)
3. Create all tables, indexes, and relationships
4. Set up default administrator account
5. Configure AI providers
6. Create default settings

## Database Management
The embedded SQLite database is stored in `./data/mcn.db`. You can use any SQLite browser to inspect it, or use the built-in database management interface (coming soon).

## Configuration
Configuration files are stored in `./config/`. Default configuration is created on first run.

## Troubleshooting

### Port already in use
Change ports in environment variables:
```bash
PORT=3002 HOST=127.0.0.1 npm run dev
```

### Database issues
Delete `./data/mcn.db` and restart to reinitialize (development only).

### Build errors
Clear cache and reinstall:
```bash
npm run clean
rm -rf node_modules package-lock.json
npm install
npm run build
```
