import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Payment from './pages/Payment';
import Navbar from './components/Navbar';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prev => {
      const existingItem = prev.find(i => i.id === item.id);
      if (existingItem) {
        return prev.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart(prev => 
      prev.map(item => 
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="app">
      {isAuthenticated && <Navbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />}
      <Routes>
        <Route 
          path="/login" 
          element={
            isAuthenticated ? 
              <Navigate to="/home" replace /> : 
              <Login onLogin={() => setIsAuthenticated(true)} />
          } 
        />
        <Route 
          path="/home" 
          element={
            isAuthenticated ? 
              <Home /> : 
              <Navigate to="/login" replace />
          } 
        />
        <Route 
          path="/menu" 
          element={
            isAuthenticated ? 
              <Menu cart={cart} addToCart={addToCart} /> : 
              <Navigate to="/login" replace />
          } 
        />
        <Route 
          path="/payment" 
          element={
            isAuthenticated ? 
              <Payment 
                cart={cart} 
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
              /> : 
              <Navigate to="/login" replace />
          } 
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
}

export default App;
