import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar({ cartCount }) {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/home" className="navbar-logo">
          🍔 FoodieExpress
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link 
              to="/home" 
              className={`navbar-link ${location.pathname === '/home' ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/menu" 
              className={`navbar-link ${location.pathname === '/menu' ? 'active' : ''}`}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link 
              to="/payment" 
              className={`navbar-link cart-link ${location.pathname === '/payment' ? 'active' : ''}`}
            >
              🛒 Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
