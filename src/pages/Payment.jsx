import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './Payment.css'

function Payment() {
  const location = useLocation()
  const navigate = useNavigate()
  const cart = location.state?.cart || []

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    paymentMethod: 'card'
  })

  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const calculateTax = () => {
    return calculateSubtotal() * 0.1
  }

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax() + 5 // $5 delivery fee
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setOrderPlaced(true)
    setTimeout(() => {
      navigate('/home')
    }, 3000)
  }

  if (orderPlaced) {
    return (
      <>
        <Navbar />
        <div className="payment-page">
          <div className="container">
            <div className="success-message">
              <div className="success-icon">✅</div>
              <h1>Order Placed Successfully!</h1>
              <p>Your order will be delivered in 30-40 minutes</p>
              <p>Thank you for ordering with FoodExpress!</p>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="payment-page">
        <div className="container">
          <h1 className="page-title">Checkout</h1>
          
          {cart.length === 0 ? (
            <div className="empty-cart">
              <h2>Your cart is empty</h2>
              <button className="btn btn-primary" onClick={() => navigate('/menu')}>
                Browse Menu
              </button>
            </div>
          ) : (
            <div className="payment-layout">
              <div className="payment-form-section">
                <form onSubmit={handleSubmit} className="payment-form">
                  <section className="form-section">
                    <h2>Delivery Information</h2>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>City *</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Delivery Address *</label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows="3"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Zip Code *</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </section>

                  <section className="form-section">
                    <h2>Payment Method</h2>
                    <div className="payment-methods">
                      <label className="payment-method-option">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={formData.paymentMethod === 'card'}
                          onChange={handleChange}
                        />
                        <span>💳 Credit/Debit Card</span>
                      </label>
                      <label className="payment-method-option">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cash"
                          checked={formData.paymentMethod === 'cash'}
                          onChange={handleChange}
                        />
                        <span>💵 Cash on Delivery</span>
                      </label>
                    </div>

                    {formData.paymentMethod === 'card' && (
                      <div className="card-details">
                        <div className="form-group">
                          <label>Card Number *</label>
                          <input
                            type="text"
                            name="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Cardholder Name *</label>
                          <input
                            type="text"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-row">
                          <div className="form-group">
                            <label>Expiry Date *</label>
                            <input
                              type="text"
                              name="expiryDate"
                              placeholder="MM/YY"
                              value={formData.expiryDate}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>CVV *</label>
                            <input
                              type="text"
                              name="cvv"
                              placeholder="123"
                              value={formData.cvv}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </section>

                  <button type="submit" className="btn btn-primary btn-submit">
                    Place Order - ${calculateTotal().toFixed(2)}
                  </button>
                </form>
              </div>

              <aside className="order-summary">
                <h2>Order Summary</h2>
                <div className="order-items">
                  {cart.map(item => (
                    <div key={item.id} className="order-item">
                      <div className="item-icon">{item.icon}</div>
                      <div className="item-details">
                        <h4>{item.name}</h4>
                        <p>Qty: {item.quantity}</p>
                      </div>
                      <div className="item-price">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="order-calculations">
                  <div className="calculation-row">
                    <span>Subtotal</span>
                    <span>${calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="calculation-row">
                    <span>Tax (10%)</span>
                    <span>${calculateTax().toFixed(2)}</span>
                  </div>
                  <div className="calculation-row">
                    <span>Delivery Fee</span>
                    <span>$5.00</span>
                  </div>
                  <div className="calculation-row total">
                    <span>Total</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Payment
