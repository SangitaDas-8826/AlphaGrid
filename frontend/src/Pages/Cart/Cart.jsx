// Cart.jsx
import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate()
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="cart-container mt-100">
      <div className="cart-items">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <p>{item.name}</p>
                <p>  ₹{item.price ? Number(item.price).toLocaleString("en-IN") : "0"}</p>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item._id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item._id, 1)}>+</button>
                </div>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item._id)}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      <div className="order-summary">
        <h3>Order Summary</h3>

        <p>
          <span>Subtotal ({cartItems.length} items)</span>
          <span>₹{subtotal.toLocaleString()}</span>
        </p>

        <p>
          <span>Shipping</span>
          <span>Free</span>
        </p>

        <p>
          <span>Tax (5%)</span>
          <span>₹{tax.toFixed(2)}</span>
        </p>

        <h3>
          <span>Total</span>
          <span> ₹{Number(total).toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}</span>
        </h3>

        <button className="place-order" onClick={() => navigate("/checkout")}>Place Order</button>
        <button className="continue-shopping">Continue Shopping</button>

        <div className="para">
          <ul>
            <li>Free shipping on orders over $50</li>
            <li>30-day return policy</li>
            <li>Secure checkout with SSL encryption</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Cart;
