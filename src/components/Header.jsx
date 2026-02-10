import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Header.css'

function Header({ onLogout, cartCount }) {
  const location = useLocation()

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <h1>🍔 FoodieExpress</h1>
        </div>
        <nav className="header-nav">
          <Link 
            to="/home" 
            className={location.pathname === '/home' ? 'active' : ''}
          >
            Home
          </Link>
          <Link 
            to="/menu" 
            className={location.pathname === '/menu' ? 'active' : ''}
          >
            Menu
          </Link>
          <Link 
            to="/payment" 
            className={location.pathname === '/payment' ? 'active' : ''}
          >
            Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </nav>
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  )
}

export default Header
