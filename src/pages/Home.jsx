import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const categories = [
    { id: 1, name: 'Pizza', emoji: '🍕', description: 'Delicious pizzas with fresh ingredients' },
    { id: 2, name: 'Burgers', emoji: '🍔', description: 'Juicy burgers made to perfection' },
    { id: 3, name: 'Sushi', emoji: '🍣', description: 'Fresh sushi rolls and sashimi' },
    { id: 4, name: 'Pasta', emoji: '🍝', description: 'Italian pasta with authentic flavors' },
    { id: 5, name: 'Desserts', emoji: '🍰', description: 'Sweet treats for every occasion' },
    { id: 6, name: 'Drinks', emoji: '🥤', description: 'Refreshing beverages and smoothies' }
  ];

  const featured = [
    { id: 1, name: 'Margherita Pizza', price: 12.99, emoji: '🍕', rating: 4.8 },
    { id: 2, name: 'Classic Burger', price: 9.99, emoji: '🍔', rating: 4.6 },
    { id: 3, name: 'California Roll', price: 14.99, emoji: '🍣', rating: 4.9 }
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Order Your Favorite Food</h1>
          <p>Fast delivery • Fresh ingredients • Best prices</p>
          <Link to="/menu" className="cta-button">
            Browse Menu
          </Link>
        </div>
      </section>

      <div className="container">
        <section className="categories-section">
          <h2>Food Categories</h2>
          <div className="categories-grid">
            {categories.map(category => (
              <Link to="/menu" key={category.id} className="category-card">
                <span className="category-emoji">{category.emoji}</span>
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
                <span className="featured-emoji">{item.emoji}</span>
                <div className="featured-info">
                  <h3>{item.name}</h3>
                  <div className="featured-meta">
                    <span className="price">${item.price}</span>
                    <span className="rating">⭐ {item.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="info-section">
          <div className="info-grid">
            <div className="info-card">
              <span className="info-icon">🚚</span>
              <h3>Fast Delivery</h3>
              <p>Get your food delivered in 30 minutes or less</p>
            </div>
            <div className="info-card">
              <span className="info-icon">✨</span>
              <h3>Fresh & Quality</h3>
              <p>We use only the freshest ingredients</p>
            </div>
            <div className="info-card">
              <span className="info-icon">💳</span>
              <h3>Easy Payment</h3>
              <p>Multiple payment options available</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
