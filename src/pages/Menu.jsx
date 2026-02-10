import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './Menu.css'

function Menu() {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [cart, setCart] = useState([])

  const categories = ['All', 'Pizza', 'Burgers', 'Sushi', 'Desserts', 'Drinks', 'Salads']

  const menuItems = [
    { id: 1, name: 'Margherita Pizza', category: 'Pizza', price: 12.99, rating: 4.5, icon: '🍕' },
    { id: 2, name: 'Pepperoni Pizza', category: 'Pizza', price: 14.99, rating: 4.7, icon: '🍕' },
    { id: 3, name: 'Veggie Pizza', category: 'Pizza', price: 11.99, rating: 4.3, icon: '🍕' },
    { id: 4, name: 'Cheese Burger', category: 'Burgers', price: 9.99, rating: 4.8, icon: '🍔' },
    { id: 5, name: 'Bacon Burger', category: 'Burgers', price: 11.99, rating: 4.6, icon: '🍔' },
    { id: 6, name: 'Veggie Burger', category: 'Burgers', price: 8.99, rating: 4.4, icon: '🍔' },
    { id: 7, name: 'California Roll', category: 'Sushi', price: 14.99, rating: 4.6, icon: '🍣' },
    { id: 8, name: 'Salmon Sushi', category: 'Sushi', price: 16.99, rating: 4.9, icon: '🍣' },
    { id: 9, name: 'Tuna Roll', category: 'Sushi', price: 15.99, rating: 4.7, icon: '🍣' },
    { id: 10, name: 'Chocolate Cake', category: 'Desserts', price: 6.99, rating: 4.9, icon: '🍰' },
    { id: 11, name: 'Cheesecake', category: 'Desserts', price: 7.99, rating: 4.8, icon: '🍰' },
    { id: 12, name: 'Ice Cream', category: 'Desserts', price: 4.99, rating: 4.7, icon: '🍦' },
    { id: 13, name: 'Cola', category: 'Drinks', price: 2.99, rating: 4.5, icon: '🥤' },
    { id: 14, name: 'Orange Juice', category: 'Drinks', price: 3.99, rating: 4.6, icon: '🧃' },
    { id: 15, name: 'Smoothie', category: 'Drinks', price: 5.99, rating: 4.8, icon: '🥤' },
    { id: 16, name: 'Caesar Salad', category: 'Salads', price: 8.99, rating: 4.5, icon: '🥗' },
    { id: 17, name: 'Greek Salad', category: 'Salads', price: 9.99, rating: 4.6, icon: '🥗' },
    { id: 18, name: 'Garden Salad', category: 'Salads', price: 7.99, rating: 4.4, icon: '🥗' }
  ]

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory)

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id)
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ))
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const handleCheckout = () => {
    if (cart.length > 0) {
      navigate('/payment', { state: { cart } })
    }
  }

  return (
    <>
      <Navbar />
      <div className="menu-page">
        <div className="menu-header">
          <div className="container">
            <h1>Our Menu</h1>
            <p>Choose from our wide selection of delicious dishes</p>
          </div>
        </div>

        <div className="container">
          <div className="menu-layout">
            <aside className="menu-sidebar">
              <div className="filter-section">
                <h3>Categories</h3>
                <div className="category-filters">
                  {categories.map(category => (
                    <button
                      key={category}
                      className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              {cart.length > 0 && (
                <div className="cart-summary">
                  <h3>Cart Summary</h3>
                  <div className="cart-items-count">
                    <span>Items:</span>
                    <span>{getTotalItems()}</span>
                  </div>
                  <button className="btn btn-primary" onClick={handleCheckout}>
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </aside>

            <main className="menu-content">
              <div className="menu-grid">
                {filteredItems.map(item => (
                  <div key={item.id} className="menu-item-card">
                    <div className="menu-item-image">{item.icon}</div>
                    <div className="menu-item-info">
                      <h3>{item.name}</h3>
                      <div className="menu-item-meta">
                        <span className="rating">⭐ {item.rating}</span>
                        <span className="price">${item.price}</span>
                      </div>
                      <button 
                        className="btn btn-secondary"
                        onClick={() => addToCart(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
