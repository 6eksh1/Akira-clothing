import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Payment.css'

function Payment({ cart, removeFromCart, updateCartQuantity }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  })
  const [errors, setErrors] = useState({})

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const tax = subtotal * 0.1
  const deliveryFee = 3.99
  const total = subtotal + tax + deliveryFee

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.address.trim()) newErrors.address = 'Address is required'
    if (!formData.city.trim()) newErrors.city = 'City is required'
    if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required'
    if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Card number is required'
    if (!formData.expiryDate.trim()) newErrors.expiryDate = 'Expiry date is required'
    if (!formData.cvv.trim()) newErrors.cvv = 'CVV is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      alert('Order placed successfully! 🎉\nYour food will arrive in 30-45 minutes.')
      navigate('/home')
    }
  }

  const handleQuantityChange = (id, change) => {
    const item = cart.find(i => i.id === id)
    const newQuantity = item.quantity + change
    if (newQuantity > 0) {
      updateCartQuantity(id, newQuantity)
    }
  }

  return (
    <div className="payment-page">
      <h1>Checkout</h1>
      
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button onClick={() => navigate('/menu')} className="continue-shopping-btn">
            Browse Menu
          </button>
        </div>
      ) : (
        <div className="payment-container">
          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">{item.image}</div>
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p className="cart-item-price">${item.price}</p>
                  </div>
                  <div className="cart-item-controls">
                    <div className="quantity-controls">
                      <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                    </div>
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="order-totals">
              <div className="total-row">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="total-row">
                <span>Tax (10%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="total-row">
                <span>Delivery Fee:</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="total-row total">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="payment-form-section">
            <h2>Payment & Delivery</h2>
            <form onSubmit={handleSubmit} className="payment-form">
              <div className="form-section">
                <h3>Delivery Information</h3>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="address">Street Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 Main St"
                  />
                  {errors.address && <span className="error">{errors.address}</span>}
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="New York"
                    />
                    {errors.city && <span className="error">{errors.city}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="zipCode">ZIP Code</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="10001"
                    />
                    {errors.zipCode && <span className="error">{errors.zipCode}</span>}
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3>Payment Information</h3>
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                  />
                  {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date</label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      maxLength="5"
                    />
                    {errors.expiryDate && <span className="error">{errors.expiryDate}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      maxLength="4"
                    />
                    {errors.cvv && <span className="error">{errors.cvv}</span>}
                  </div>
                </div>
              </div>

              <button type="submit" className="place-order-btn">
                Place Order - ${total.toFixed(2)}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Payment
