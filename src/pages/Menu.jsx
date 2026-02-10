import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import '../styles/Menu.css'

const menuItems = {
  1: [ // Pizza Paradise
    { id: 1, name: 'Margherita Pizza', price: 12.99, description: 'Classic pizza with tomato, mozzarella, and basil', image: '🍕' },
    { id: 2, name: 'Pepperoni Pizza', price: 14.99, description: 'Loaded with pepperoni and cheese', image: '🍕' },
    { id: 3, name: 'Veggie Pizza', price: 13.99, description: 'Fresh vegetables and cheese', image: '🍕' },
    { id: 4, name: 'BBQ Chicken Pizza', price: 15.99, description: 'BBQ sauce, chicken, and onions', image: '🍕' }
  ],
  2: [ // Burger Kingdom
    { id: 5, name: 'Classic Burger', price: 8.99, description: 'Beef patty with lettuce, tomato, and cheese', image: '🍔' },
    { id: 6, name: 'Double Burger', price: 11.99, description: 'Two beef patties with all toppings', image: '🍔' },
    { id: 7, name: 'Chicken Burger', price: 9.99, description: 'Crispy chicken with special sauce', image: '🍔' },
    { id: 8, name: 'Veggie Burger', price: 8.49, description: 'Plant-based patty with fresh veggies', image: '🍔' }
  ],
  3: [ // Sushi Master
    { id: 9, name: 'California Roll', price: 10.99, description: 'Crab, avocado, and cucumber', image: '🍣' },
    { id: 10, name: 'Salmon Sashimi', price: 15.99, description: 'Fresh salmon slices', image: '🍣' },
    { id: 11, name: 'Tuna Roll', price: 12.99, description: 'Fresh tuna with rice', image: '🍣' },
    { id: 12, name: 'Tempura Roll', price: 11.99, description: 'Crispy tempura with vegetables', image: '🍣' }
  ],
  4: [ // Taco Fiesta
    { id: 13, name: 'Beef Tacos', price: 9.99, description: 'Three tacos with seasoned beef', image: '🌮' },
    { id: 14, name: 'Chicken Tacos', price: 9.49, description: 'Three tacos with grilled chicken', image: '🌮' },
    { id: 15, name: 'Fish Tacos', price: 10.99, description: 'Three tacos with crispy fish', image: '🌮' },
    { id: 16, name: 'Veggie Tacos', price: 8.99, description: 'Three tacos with grilled vegetables', image: '🌮' }
  ],
  5: [ // Pasta House
    { id: 17, name: 'Spaghetti Carbonara', price: 13.99, description: 'Creamy pasta with bacon', image: '🍝' },
    { id: 18, name: 'Fettuccine Alfredo', price: 12.99, description: 'Rich and creamy alfredo sauce', image: '🍝' },
    { id: 19, name: 'Penne Arrabiata', price: 11.99, description: 'Spicy tomato sauce pasta', image: '🍝' },
    { id: 20, name: 'Lasagna', price: 14.99, description: 'Layered pasta with meat and cheese', image: '🍝' }
  ],
  6: [ // Thai Kitchen
    { id: 21, name: 'Pad Thai', price: 11.99, description: 'Stir-fried noodles with shrimp', image: '🍜' },
    { id: 22, name: 'Green Curry', price: 12.99, description: 'Spicy green curry with chicken', image: '🍜' },
    { id: 23, name: 'Tom Yum Soup', price: 9.99, description: 'Hot and sour Thai soup', image: '🍜' },
    { id: 24, name: 'Fried Rice', price: 10.99, description: 'Thai style fried rice', image: '🍜' }
  ]
}

function Menu({ onLogout }) {
  const { restaurantId } = useParams()
  const navigate = useNavigate()
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  const items = menuItems[restaurantId] || []

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

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

  const removeFromCart = (itemId) => {
    const existingItem = cart.find(cartItem => cartItem.id === itemId)
    if (existingItem && existingItem.quantity > 1) {
      setCart(cart.map(cartItem => 
        cartItem.id === itemId 
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ))
    } else {
      setCart(cart.filter(cartItem => cartItem.id !== itemId))
    }
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const handleCheckout = () => {
    if (cart.length > 0) {
      navigate('/payment')
    }
  }

  return (
    <div className="menu-container">
      <Header onLogout={onLogout} title="Menu" showBack />
      
      <div className="menu-content">
        <div className="menu-header">
          <button onClick={() => navigate('/home')} className="back-button">
            ← Back
          </button>
          <h1>Menu Items</h1>
        </div>

        <div className="menu-grid">
          {items.map((item) => {
            const cartItem = cart.find(c => c.id === item.id)
            const quantity = cartItem ? cartItem.quantity : 0

            return (
              <div key={item.id} className="menu-item-card">
                <div className="menu-item-image">{item.image}</div>
                <div className="menu-item-info">
                  <h3>{item.name}</h3>
                  <p className="description">{item.description}</p>
                  <div className="menu-item-footer">
                    <span className="price">${item.price.toFixed(2)}</span>
                    <div className="quantity-controls">
                      {quantity > 0 && (
                        <>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="quantity-btn"
                          >
                            -
                          </button>
                          <span className="quantity">{quantity}</span>
                        </>
                      )}
                      <button 
                        onClick={() => addToCart(item)}
                        className="quantity-btn add-btn"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-info">
              <span>{getTotalItems()} items in cart</span>
            </div>
            <button onClick={handleCheckout} className="checkout-button">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Menu
