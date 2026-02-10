import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Header.css'

function Header({ onLogout, title, showBack }) {
  const navigate = useNavigate()

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-left">
          {showBack && (
            <button onClick={() => navigate(-1)} className="header-back-btn">
              ←
            </button>
          )}
          <div className="app-logo">
            <span className="logo-icon">🍔</span>
            <span className="logo-text">{title || 'FoodHub'}</span>
          </div>
        </div>
        <button onClick={onLogout} className="logout-button">
          Logout
        </button>
      </div>
    </header>
  )
}

export default Header
