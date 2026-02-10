import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css';

function Payment({ cart, updateQuantity, removeFromCart, clearCart }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 0 ? 4.99 : 0;
  const tax = subtotal * 0.1;
  const total = subtotal + deliveryFee + tax;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    // In a real app, this would process payment through a payment gateway
    setOrderPlaced(true);
    
    setTimeout(() => {
      clearCart();
      navigate('/home');
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="payment-page">
        <div className="container">
          <div className="success-message">
            <span className="success-icon">✅</span>
            <h2>Order Placed Successfully!</h2>
            <p>Your delicious food is on the way!</p>
            <p>Redirecting to home...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-page">
      <div className="payment-header">
        <h1>Checkout</h1>
        <p>Complete your order</p>
      </div>

      <div className="container">
        <div className="payment-layout">
          <div className="payment-form-section">
            <form onSubmit={handleSubmit} className="payment-form">
              <section className="form-section">
                <h3>Delivery Information</h3>
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    name="address"
                    placeholder="Delivery Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP Code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </section>

              <section className="form-section">
                <h3>Payment Details</h3>
                <div className="form-row">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number (e.g., 4242 4242 4242 4242)"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    maxLength="19"
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    maxLength="5"
                    required
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    maxLength="3"
                    required
                  />
                </div>
              </section>

              <button type="submit" className="place-order-btn" disabled={cart.length === 0}>
                Place Order - ${total.toFixed(2)}
              </button>
            </form>
          </div>

          <div className="order-summary">
            <h3>Order Summary</h3>
            
            {cart.length === 0 ? (
              <p className="empty-cart">Your cart is empty</p>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map(item => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-info">
                        <span className="cart-item-emoji">{item.emoji}</span>
                        <div>
                          <h4>{item.name}</h4>
                          <p className="cart-item-price">${item.price}</p>
                        </div>
                      </div>
                      <div className="cart-item-actions">
                        <div className="quantity-control">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="qty-btn"
                          >
                            -
                          </button>
                          <span className="quantity">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="qty-btn"
                          >
                            +
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="remove-btn"
                        >
                          🗑️
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
                    <span>Delivery Fee:</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="total-row">
                    <span>Tax (10%):</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="total-row grand-total">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
