import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Login from './pages/Login'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Payment from './pages/Payment'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [cart, setCart] = useState([])

  const handleLogin = (email, password) => {
    // Simple login logic - in production, validate against backend
    if (email && password) {
      setIsLoggedIn(true)
      return true
    }
    return false
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCart([])
  }

  const addToCart = (item) => {
    setCart([...cart, { ...item, id: Date.now() }])
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const updateCartQuantity = (id, quantity) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity } : item
    ))
  }

  return (
    <Router>
      <div className="app">
        {isLoggedIn && <Header onLogout={handleLogout} cartCount={cart.length} />}
        <Routes>
          <Route 
            path="/login" 
            element={
              isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />
            } 
          />
          <Route 
            path="/home" 
            element={
              isLoggedIn ? <Home /> : <Navigate to="/login" />
            } 
          />
          <Route 
            path="/menu" 
            element={
              isLoggedIn ? <Menu addToCart={addToCart} /> : <Navigate to="/login" />
            } 
          />
          <Route 
            path="/payment" 
            element={
              isLoggedIn ? (
                <Payment 
                  cart={cart} 
                  removeFromCart={removeFromCart}
                  updateCartQuantity={updateCartQuantity}
                />
              ) : <Navigate to="/login" />
            } 
          />
          <Route path="/" element={<Navigate to={isLoggedIn ? "/home" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
