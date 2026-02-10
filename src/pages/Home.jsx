import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  const categories = [
    { id: 1, name: 'Pizza', icon: '🍕', description: 'Hot & Fresh' },
    { id: 2, name: 'Burgers', icon: '🍔', description: 'Juicy & Tasty' },
    { id: 3, name: 'Sushi', icon: '🍣', description: 'Fresh & Authentic' },
    { id: 4, name: 'Pasta', icon: '🍝', description: 'Italian Classics' },
    { id: 5, name: 'Desserts', icon: '🍰', description: 'Sweet Treats' },
    { id: 6, name: 'Drinks', icon: '🥤', description: 'Refreshing' }
  ]

  const featured = [
    { id: 1, name: 'Margherita Pizza', price: 12.99, image: '🍕', rating: 4.5 },
    { id: 2, name: 'Cheese Burger', price: 9.99, image: '🍔', rating: 4.7 },
    { id: 3, name: 'Caesar Salad', price: 7.99, image: '🥗', rating: 4.3 }
  ]

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Delicious Food Delivered to Your Door</h1>
          <p>Order from your favorite restaurants and get it delivered fast!</p>
          <Link to="/menu" className="cta-button">
            Browse Menu
          </Link>
        </div>
      </section>

      <section className="categories-section">
        <h2>Popular Categories</h2>
        <div className="categories-grid">
          {categories.map(category => (
            <Link to="/menu" key={category.id} className="category-card">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Items</h2>
        <div className="featured-grid">
          {featured.map(item => (
            <div key={item.id} className="featured-card">
              <div className="featured-image">{item.image}</div>
              <div className="featured-info">
                <h3>{item.name}</h3>
                <div className="featured-footer">
                  <span className="price">${item.price}</span>
                  <span className="rating">⭐ {item.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="promo-section">
        <div className="promo-content">
          <h2>Download Our App</h2>
          <p>Get exclusive deals and faster checkout!</p>
          <div className="app-buttons">
            <button className="app-btn">📱 App Store</button>
            <button className="app-btn">🤖 Google Play</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
