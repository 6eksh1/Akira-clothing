# FoodExpress - Food Delivery Application

A modern, responsive food delivery application built with React, featuring login, home, menu, and payment pages.

## 🚀 Features

- **User Authentication**: Login page with form validation
- **Home Page**: Featured dishes, categories, and app features
- **Menu Page**: Browse food items by category with filtering
- **Payment/Checkout**: Complete order with delivery and payment information
- **Responsive Design**: Fully responsive for mobile and desktop views
- **Modern UI**: Clean and intuitive user interface with smooth animations

## 📁 Project Structure

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

## 🛠️ Tech Stack

- **React 18**: UI library
- **React Router DOM**: Client-side routing
- **Vite**: Fast build tool and dev server
- **CSS3**: Styling with CSS variables and flexbox/grid

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/6eksh1/Akira-clothing.git
cd Akira-clothing
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Running the Application

### Development Mode

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Build

Build the application for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🚀 Deployment

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
  "deploy": "vite build && gh-pages -d dist"
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

### Deploy to Render

1. Create a new Web Service on Render.com
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy

## 📱 Pages Overview

### Login Page (`/login`)
- Email and password fields
- Form validation
- Responsive layout with visual design
- Redirects to home page on successful login

### Home Page (`/home`)
- Hero section with call-to-action
- Browse by category section
- Featured dishes grid
- Why choose us section

### Menu Page (`/menu`)
- Sidebar with category filters
- Food items grid
- Add to cart functionality
- Cart summary with checkout button

### Payment Page (`/payment`)
- Delivery information form
- Payment method selection (Card/Cash)
- Order summary with calculations
- Success confirmation screen

## 🎨 Responsive Design

The application is fully responsive and tested on:
- **Desktop**: 1920px, 1366px, 1024px
- **Tablet**: 768px, 834px
- **Mobile**: 375px, 414px, 480px

Breakpoints:
- Large screens: > 992px
- Medium screens: 768px - 992px
- Small screens: < 768px

## 🔧 Configuration

### Vite Configuration
The project uses Vite for fast development and optimized builds:
- Hot Module Replacement (HMR)
- Fast refresh
- Optimized production builds

### Environment Variables
Create a `.env` file for environment-specific settings:
```
VITE_API_URL=your_api_url
```

## 📝 Development Notes

- The application uses React Router for navigation
- State management is handled with React hooks (useState)
- CSS uses CSS variables for consistent theming
- Mobile-first responsive design approach

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Author

6eksh1

## 🙏 Acknowledgments

- React team for the amazing library
- Vite team for the blazing fast build tool
- All contributors and users

---

**Happy Coding! 🍔🍕🍰**
