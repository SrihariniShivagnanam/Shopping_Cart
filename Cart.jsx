import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../../Styles/cart.css'; // Make sure the path is correct

const Cart = () => {
  const { items, total } = useSelector((state) => state.cart);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'gpay',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order placed:', formData, items);
    alert('Order placed successfully 🎉');
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-image-side" />
      <div className="cart-container">
        <h1 className="cart-title">🛒 Your Cart</h1>

        {items.length === 0 ? (
          <p className="empty-message">Your cart is empty 😢</p>
        ) : (
          <>
            {items.map((item) => (
              <div key={item.id} className="product-item">
                <img src={item.thumbnail} alt={item.title} />
                <div className="product-info">
                  <h2>{item.title}</h2>
                  <p>₹{item.price}</p>
                </div>
              </div>
            ))}

            <div className="cart-total">Total: ₹{total}</div>

            <form onSubmit={handleSubmit} className="order-form">
              <h2>🧾 Delivery Details</h2>
              <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} />
              <input type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} />
              <textarea name="address" placeholder="Full Address" required value={formData.address} onChange={handleChange}></textarea>

              <div className="payment-method">
                <label className="section-label">💳 Payment Method</label>
                <div className="radio-group">
                  <label><input type="radio" name="paymentMethod" value="gpay" checked={formData.paymentMethod === 'gpay'} onChange={handleChange} />GPay</label>
                  <label><input type="radio" name="paymentMethod" value="phonepe" checked={formData.paymentMethod === 'phonepe'} onChange={handleChange}/>PhonePe</label>
                  <label><input type="radio" name="paymentMethod" value="cash" checked={formData.paymentMethod === 'cash'} onChange={handleChange}/>Cash on Delivery
                </label>
                </div>
              </div>

              <button type="submit">Confirm Order 🚀</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
