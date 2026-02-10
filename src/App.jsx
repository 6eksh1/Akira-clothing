import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Payment from './pages/Payment'
import './styles/App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true'
  })

  const handleLogin = () => {
    setIsAuthenticated(true)
    localStorage.setItem('isAuthenticated', 'true')
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('cart')
  }

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={isAuthenticated ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} 
        />
        <Route 
          path="/home" 
          element={isAuthenticated ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/menu/:restaurantId" 
          element={isAuthenticated ? <Menu onLogout={handleLogout} /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/payment" 
          element={isAuthenticated ? <Payment onLogout={handleLogout} /> : <Navigate to="/login" />} 
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  )
}

export default App
