import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const isLoginPage = location.pathname === '/login'

  const handleLogout = () => {
    navigate('/login')
  }

  if (isLoginPage) {
    return null
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <h2>🍔 FoodExpress</h2>
          </div>
          <div className="navbar-menu">
            <Link to="/home" className={location.pathname === '/home' ? 'active' : ''}>
              Home
            </Link>
            <Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''}>
              Menu
            </Link>
            <Link to="/payment" className={location.pathname === '/payment' ? 'active' : ''}>
              Cart
            </Link>
            <button className="btn btn-primary" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <div className="navbar-mobile-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
