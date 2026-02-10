# FoodieExpress - Food Delivery Application

A responsive food delivery web application built with React, featuring login, home, menu, and payment pages.

## Features

- 🔐 **Login Page**: Simple authentication with form validation
- 🏠 **Home Page**: Browse food categories and featured items
- 🍕 **Menu Page**: View and order from a variety of food items with category filters
- 💳 **Payment Page**: Complete checkout with order summary and payment form
- 📱 **Responsive Design**: Optimized for both mobile and desktop devices
- 🛒 **Shopping Cart**: Add, remove, and update item quantities
- 🎨 **Modern UI**: Clean and intuitive interface with smooth transitions

## Technology Stack

- **React** (v19.2.4) - UI library
- **React Router DOM** (v7.13.0) - Client-side routing
- **Vite** (v7.3.1) - Build tool and dev server
- **CSS3** - Styling with responsive design

## Installation

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

The application will be available at `http://localhost:5173/`

## Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Deployment

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify:
   - Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
   - Or use the Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Update `vite.config.js` base path:
```javascript
base: '/Akira-clothing/'
```

4. Deploy:
```bash
npm run deploy
```

## Project Structure

```
Akira-clothing/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Login.css
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Menu.jsx
│   │   ├── Menu.css
│   │   ├── Payment.jsx
│   │   └── Payment.css
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Usage

### Login
- Enter any email and password (minimum 6 characters) to login
- Demo credentials: any valid email format with password length >= 6

### Home
- Browse food categories (Pizza, Burgers, Sushi, Pasta, Desserts, Drinks)
- View featured items
- Click "Browse Menu" or use navigation to go to menu

### Menu
- Filter items by category
- Add items to cart
- View current cart count in navigation

### Payment
- Review cart items
- Adjust quantities or remove items
- Fill in delivery information
- Enter payment details
- Place order

## Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC

## Author

6eksh1

## Repository

https://github.com/6eksh1/Akira-clothing
