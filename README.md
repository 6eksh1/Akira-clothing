# FoodHub - Food Delivery Application

> **Note**: This project is built in the Akira-clothing repository. The repository name is historical and doesn't reflect the current application, which is a complete food delivery platform.

A modern, responsive food delivery application built with React and Vite.

## Features

- **Login Page**: Secure authentication with form validation
- **Home Page**: Browse restaurants with ratings, delivery time, and cuisine types
- **Menu Page**: View menu items, add to cart with quantity controls
- **Payment Page**: Complete checkout with delivery and payment information
- **Responsive Design**: Optimized for both mobile and desktop devices
- **Persistent Cart**: Cart data persists across sessions using localStorage

## Tech Stack

- React 18
- React Router DOM for navigation
- Vite for fast development and building
- CSS3 for styling with responsive design
- localStorage for state persistence

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. Clone the repository:
```bash
git clone https://github.com/6eksh1/Akira-clothing.git
cd Akira-clothing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Deployment

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Deployment Options

#### 1. Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

#### 2. Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### 3. GitHub Pages

Add to `vite.config.js`:
```javascript
export default defineConfig({
  base: '/Akira-clothing/',
  // ... rest of config
})
```

Build and deploy:
```bash
npm run build
npx gh-pages -d dist
```

#### 4. Any Static Host
Simply upload the contents of the `dist` folder to any static hosting service.

## Usage

### Login
- Use any email address and password (minimum 6 characters)
- Demo authentication for testing purposes

### Ordering Food
1. Browse restaurants on the home page
2. Click on a restaurant to view its menu
3. Add items to cart using the + button
4. Adjust quantities or remove items using +/- buttons
5. Click "Proceed to Checkout" when ready
6. Fill in delivery and payment information
7. Place your order

## Folder Structure

```
Akira-clothing/
├── src/
│   ├── components/      # Reusable components
│   │   └── Header.jsx
│   ├── pages/          # Page components
│   │   ├── Login.jsx
│   │   ├── Home.jsx
│   │   ├── Menu.jsx
│   │   └── Payment.jsx
│   ├── styles/         # CSS files
│   │   ├── index.css
│   │   ├── App.css
│   │   ├── Login.css
│   │   ├── Home.css
│   │   ├── Menu.css
│   │   ├── Payment.css
│   │   └── Header.css
│   ├── App.jsx         # Main app component with routing
│   └── main.jsx        # Entry point
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## Responsive Design

The application is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktop (1024px and up)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
