# FoodieExpress - Food Delivery Application

A modern, responsive food delivery web application built with React and Vite.

## Features

- 🔐 **Login Page**: Secure login with form validation
- 🏠 **Home Page**: Featured items, categories, and promotional content
- 📋 **Menu Page**: Browse menu with search and category filters
- 💳 **Payment Page**: Shopping cart and checkout with form validation
- 📱 **Fully Responsive**: Optimized for mobile and desktop views
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds

## Tech Stack

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features

## Project Structure

```
Akira-clothing/
├── src/
│   ├── components/
│   │   └── Header.jsx          # Navigation header
│   ├── pages/
│   │   ├── Login.jsx            # Login page
│   │   ├── Home.jsx             # Home page
│   │   ├── Menu.jsx             # Menu page
│   │   └── Payment.jsx          # Payment/checkout page
│   ├── styles/
│   │   ├── index.css            # Global styles
│   │   ├── Header.css           # Header styles
│   │   ├── Login.css            # Login page styles
│   │   ├── Home.css             # Home page styles
│   │   ├── Menu.css             # Menu page styles
│   │   └── Payment.css          # Payment page styles
│   ├── App.jsx                  # Main app component
│   └── main.jsx                 # Entry point
├── index.html                   # HTML template
├── vite.config.js              # Vite configuration
└── package.json                # Dependencies and scripts
```

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/6eksh1/Akira-clothing.git
   cd Akira-clothing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Development

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Build for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` folder.

## Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build and deploy:
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update vite.config.js:
   ```javascript
   export default defineConfig({
     base: '/Akira-clothing/',
     // ... rest of config
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## Usage

### Login
- Enter any valid email address
- Password must be at least 6 characters
- Demo credentials: Use any email and password combination (min 6 chars)

### Navigation
- **Home**: Browse featured items and categories
- **Menu**: View all food items, search, and filter by category
- **Cart**: View cart items and proceed to checkout

### Ordering
1. Browse the menu
2. Add items to cart
3. Go to Cart/Payment page
4. Fill in delivery and payment details
5. Place order

## Responsive Design

The application is fully responsive and optimized for:
- 📱 Mobile devices (< 768px)
- 💻 Tablets (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for learning or personal use.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
