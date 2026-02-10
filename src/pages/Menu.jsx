import React, { useState } from 'react'
import '../styles/Menu.css'

function Menu({ addToCart }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const menuItems = [
    { id: 1, name: 'Margherita Pizza', price: 12.99, category: 'pizza', image: '🍕', description: 'Fresh tomatoes, mozzarella, and basil' },
    { id: 2, name: 'Pepperoni Pizza', price: 14.99, category: 'pizza', image: '🍕', description: 'Classic pepperoni with cheese' },
    { id: 3, name: 'Veggie Pizza', price: 13.99, category: 'pizza', image: '🍕', description: 'Bell peppers, onions, mushrooms' },
    { id: 4, name: 'Cheese Burger', price: 9.99, category: 'burgers', image: '🍔', description: 'Juicy beef patty with cheese' },
    { id: 5, name: 'Chicken Burger', price: 10.99, category: 'burgers', image: '🍔', description: 'Grilled chicken breast burger' },
    { id: 6, name: 'Veggie Burger', price: 8.99, category: 'burgers', image: '🍔', description: 'Plant-based patty' },
    { id: 7, name: 'California Roll', price: 11.99, category: 'sushi', image: '🍣', description: 'Crab, avocado, and cucumber' },
    { id: 8, name: 'Salmon Sushi', price: 15.99, category: 'sushi', image: '🍣', description: 'Fresh salmon nigiri' },
    { id: 9, name: 'Spaghetti Carbonara', price: 13.99, category: 'pasta', image: '🍝', description: 'Creamy pasta with bacon' },
    { id: 10, name: 'Penne Arrabbiata', price: 12.99, category: 'pasta', image: '🍝', description: 'Spicy tomato sauce pasta' },
    { id: 11, name: 'Chocolate Cake', price: 6.99, category: 'desserts', image: '🍰', description: 'Rich chocolate layer cake' },
    { id: 12, name: 'Cheesecake', price: 7.99, category: 'desserts', image: '🍰', description: 'New York style cheesecake' }
  ]

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'pizza', name: 'Pizza' },
    { id: 'burgers', name: 'Burgers' },
    { id: 'sushi', name: 'Sushi' },
    { id: 'pasta', name: 'Pasta' },
    { id: 'desserts', name: 'Desserts' }
  ]

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleAddToCart = (item) => {
    addToCart({ ...item, quantity: 1 })
    // Simple feedback
    alert(`${item.name} added to cart!`)
  }

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>Choose from our delicious selection</p>
      </div>

      <div className="menu-controls">
        <input
          type="text"
          className="search-input"
          placeholder="Search for food..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-item-card">
            <div className="menu-item-image">{item.image}</div>
            <div className="menu-item-content">
              <h3>{item.name}</h3>
              <p className="item-description">{item.description}</p>
              <div className="menu-item-footer">
                <span className="item-price">${item.price}</span>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="no-results">
          <p>No items found. Try a different search or category.</p>
        </div>
      )}
    </div>
  )
}

export default Menu
