import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simple validation - in production, you'd validate properly
    if (formData.email && formData.password) {
      navigate('/home')
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1>🍔 FoodExpress</h1>
            <p>Welcome back! Please login to your account.</p>
          </div>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
          </form>
          <div className="login-footer">
            <p>Don't have an account? <a href="#">Sign up</a></p>
          </div>
        </div>
        <div className="login-image">
          <div className="login-image-content">
            <h2>Delicious Food Delivered Fast!</h2>
            <p>Order your favorite meals from the best restaurants in town.</p>
            <div className="features">
              <div className="feature">
                <span className="feature-icon">🚀</span>
                <span>Fast Delivery</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🍕</span>
                <span>Quality Food</span>
              </div>
              <div className="feature">
                <span className="feature-icon">💳</span>
                <span>Easy Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
