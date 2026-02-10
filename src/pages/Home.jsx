import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './Home.css'

function Home() {
  const navigate = useNavigate()

  const categories = [
    { id: 1, name: 'Pizza', icon: '🍕', description: 'Hot & Fresh' },
    { id: 2, name: 'Burgers', icon: '🍔', description: 'Juicy & Tasty' },
    { id: 3, name: 'Sushi', icon: '🍣', description: 'Authentic Japanese' },
    { id: 4, name: 'Desserts', icon: '🍰', description: 'Sweet Treats' },
    { id: 5, name: 'Drinks', icon: '🥤', description: 'Refreshing' },
    { id: 6, name: 'Salads', icon: '🥗', description: 'Fresh & Healthy' }
  ]

  const featured = [
    {
      id: 1,
      name: 'Margherita Pizza',
      price: 12.99,
      rating: 4.5,
      image: '🍕',
      description: 'Classic Italian pizza with fresh mozzarella'
    },
    {
      id: 2,
      name: 'Cheese Burger',
      price: 9.99,
      rating: 4.8,
      image: '🍔',
      description: 'Juicy beef patty with cheddar cheese'
    },
    {
      id: 3,
      name: 'California Roll',
      price: 14.99,
      rating: 4.6,
      image: '🍣',
      description: 'Fresh sushi with avocado and crab'
    },
    {
      id: 4,
      name: 'Chocolate Cake',
      price: 6.99,
      rating: 4.9,
      image: '🍰',
      description: 'Rich chocolate layer cake'
    }
  ]

  return (
    <>
      <Navbar />
      <div className="home-page">
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>Craving Something Delicious?</h1>
              <p>Order from the best restaurants and get it delivered to your doorstep</p>
              <button className="btn btn-primary btn-large" onClick={() => navigate('/menu')}>
                Order Now
              </button>
            </div>
          </div>
        </section>

        <section className="categories-section">
          <div className="container">
            <h2 className="section-title">Browse by Category</h2>
            <div className="categories-grid">
              {categories.map(category => (
                <div key={category.id} className="category-card" onClick={() => navigate('/menu')}>
                  <div className="category-icon">{category.icon}</div>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="featured-section">
          <div className="container">
            <h2 className="section-title">Featured Dishes</h2>
            <div className="featured-grid">
              {featured.map(item => (
                <div key={item.id} className="food-card">
                  <div className="food-image">{item.image}</div>
                  <div className="food-info">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="food-footer">
                      <div className="rating">
                        <span>⭐</span>
                        <span>{item.rating}</span>
                      </div>
                      <div className="price">${item.price}</div>
                    </div>
                    <button className="btn btn-secondary" onClick={() => navigate('/menu')}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="app-features">
          <div className="container">
            <h2 className="section-title">Why Choose Us?</h2>
            <div className="features-grid">
              <div className="feature-box">
                <div className="feature-icon">🚀</div>
                <h3>Fast Delivery</h3>
                <p>Get your food delivered in 30 minutes or less</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">🔒</div>
                <h3>Secure Payment</h3>
                <p>Multiple payment options with secure checkout</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">⭐</div>
                <h3>Quality Food</h3>
                <p>Fresh ingredients from top-rated restaurants</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">📱</div>
                <h3>Easy to Use</h3>
                <p>Simple and intuitive ordering process</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
