import React, { useState } from 'react';
import './Menu.css';

function Menu({ cart, addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const menuItems = [
    { id: 1, name: 'Margherita Pizza', category: 'Pizza', price: 12.99, emoji: '🍕', description: 'Classic tomato and mozzarella' },
    { id: 2, name: 'Pepperoni Pizza', category: 'Pizza', price: 14.99, emoji: '🍕', description: 'Loaded with pepperoni' },
    { id: 3, name: 'Classic Burger', category: 'Burgers', price: 9.99, emoji: '🍔', description: 'Beef patty with lettuce and tomato' },
    { id: 4, name: 'Cheese Burger', category: 'Burgers', price: 10.99, emoji: '🍔', description: 'Double cheese burger' },
    { id: 5, name: 'California Roll', category: 'Sushi', price: 14.99, emoji: '🍣', description: 'Crab, avocado, and cucumber' },
    { id: 6, name: 'Salmon Roll', category: 'Sushi', price: 16.99, emoji: '🍣', description: 'Fresh salmon and rice' },
    { id: 7, name: 'Spaghetti Carbonara', category: 'Pasta', price: 13.99, emoji: '🍝', description: 'Creamy pasta with bacon' },
    { id: 8, name: 'Penne Arrabiata', category: 'Pasta', price: 12.99, emoji: '🍝', description: 'Spicy tomato sauce pasta' },
    { id: 9, name: 'Chocolate Cake', category: 'Desserts', price: 6.99, emoji: '🍰', description: 'Rich chocolate layer cake' },
    { id: 10, name: 'Cheesecake', category: 'Desserts', price: 7.99, emoji: '🍰', description: 'Creamy New York style' },
    { id: 11, name: 'Fresh Juice', category: 'Drinks', price: 4.99, emoji: '🥤', description: 'Orange or apple juice' },
    { id: 12, name: 'Smoothie', category: 'Drinks', price: 5.99, emoji: '🥤', description: 'Mixed berry smoothie' }
  ];

  const categories = ['All', 'Pizza', 'Burgers', 'Sushi', 'Pasta', 'Desserts', 'Drinks'];

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item) => {
    addToCart(item);
    // Show a simple feedback (in a real app, you might use a toast notification)
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>Choose from our delicious selection</p>
      </div>

      <div className="container">
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

        <div className="menu-grid">
          {filteredItems.map(item => {
            const itemInCart = cart.find(cartItem => cartItem.id === item.id);
            return (
              <div key={item.id} className="menu-card">
                <span className="menu-emoji">{item.emoji}</span>
                <div className="menu-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="menu-footer">
                    <span className="menu-price">${item.price}</span>
                    <button 
                      className="add-btn"
                      onClick={() => handleAddToCart(item)}
                    >
                      {itemInCart ? `In Cart (${itemInCart.quantity})` : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
