import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import '../styles/Home.css'

const restaurants = [
  {
    id: 1,
    name: 'Pizza Paradise',
    cuisine: 'Italian',
    rating: 4.5,
    deliveryTime: '30-40 min',
    image: '🍕',
    minOrder: '$10'
  },
  {
    id: 2,
    name: 'Burger Kingdom',
    cuisine: 'American',
    rating: 4.3,
    deliveryTime: '25-35 min',
    image: '🍔',
    minOrder: '$8'
  },
  {
    id: 3,
    name: 'Sushi Master',
    cuisine: 'Japanese',
    rating: 4.7,
    deliveryTime: '40-50 min',
    image: '🍣',
    minOrder: '$15'
  },
  {
    id: 4,
    name: 'Taco Fiesta',
    cuisine: 'Mexican',
    rating: 4.4,
    deliveryTime: '20-30 min',
    image: '🌮',
    minOrder: '$12'
  },
  {
    id: 5,
    name: 'Pasta House',
    cuisine: 'Italian',
    rating: 4.6,
    deliveryTime: '35-45 min',
    image: '🍝',
    minOrder: '$11'
  },
  {
    id: 6,
    name: 'Thai Kitchen',
    cuisine: 'Thai',
    rating: 4.5,
    deliveryTime: '30-40 min',
    image: '🍜',
    minOrder: '$13'
  }
]

function Home({ onLogout }) {
  const navigate = useNavigate()

  const handleRestaurantClick = (restaurantId) => {
    navigate(`/menu/${restaurantId}`)
  }

  return (
    <div className="home-container">
      <Header onLogout={onLogout} title="FoodHub" />
      
      <div className="home-content">
        <div className="hero-section">
          <h1>Order Your Favorite Food</h1>
          <p>Choose from hundreds of restaurants and get it delivered to your door</p>
        </div>

        <div className="search-section">
          <input 
            type="text" 
            placeholder="Search for restaurants or cuisines..." 
            className="search-input"
          />
        </div>

        <div className="restaurants-section">
          <h2>Popular Restaurants</h2>
          <div className="restaurant-grid">
            {restaurants.map((restaurant) => (
              <div 
                key={restaurant.id} 
                className="restaurant-card"
                onClick={() => handleRestaurantClick(restaurant.id)}
              >
                <div className="restaurant-image">{restaurant.image}</div>
                <div className="restaurant-info">
                  <h3>{restaurant.name}</h3>
                  <p className="cuisine">{restaurant.cuisine}</p>
                  <div className="restaurant-meta">
                    <span className="rating">⭐ {restaurant.rating}</span>
                    <span className="delivery-time">🕒 {restaurant.deliveryTime}</span>
                  </div>
                  <p className="min-order">Min order: {restaurant.minOrder}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
