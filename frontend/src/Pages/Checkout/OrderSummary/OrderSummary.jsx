import { useContext } from "react";
import "./OrderSummary.css";
import { CartContext } from "../../../Context/CartContext";
import { useNavigate, useLocation } from "react-router-dom";

const OrderSummary = () => {
  const { cartItems, removeFromCart, updateQuantity } =
    useContext(CartContext);

  const navigate = useNavigate();
  const location = useLocation();

  // ✅ DEFINE FIRST
  const buyNowProduct = location.state?.buyNowProduct || null;
  const isBuyNow = Boolean(buyNowProduct);

  const getDeliveryDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toLocaleDateString("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  // ✅ FINAL ITEMS
  const finalItems = isBuyNow
    ? [
        {
          _id: buyNowProduct._id,
          name: buyNowProduct.name,
          image: buyNowProduct.image,
          price: buyNowProduct.price,
          quantity: buyNowProduct.quantity,
        },
      ]
    : cartItems.map((item) => ({
        _id: item._id,
        name: item.name,
        image: item.image,
        price: item.price,
        quantity: item.quantity,
      }));

  const subtotal = finalItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05;
  const totalPrice = subtotal + tax;

  return (
    <div className="order-summary-box">
      {/* HEADER */}
      <div className="order-summary-header">
        <span>3</span>
        <h6>ORDER SUMMARY</h6>
      </div>

      {/* ITEMS */}
      {finalItems.length === 0 ? (
        <p className="p-3 text-muted">Your cart is empty</p>
      ) : (
        finalItems.map((item) => (
          <div key={item._id} className="order-item">
            <div className="order-image">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="order-details">
              <h6>{item.name}</h6>
              <div className="price-row">
               ₹{(Number(item.price) * item.quantity).toLocaleString("en-IN")}

              </div>

              {!isBuyNow && (
                <div className="qty-row">
                  <button onClick={() => updateQuantity(item._id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item._id, 1)}>+</button>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item._id)}
                  >
                    REMOVE
                  </button>
                </div>
              )}
            </div>

            <div className="order-delivery">
              <p>
                Delivery by <strong>{getDeliveryDate(4)}</strong>
              </p>
            </div>
          </div>
        ))
      )}

      {/* TOTAL & PAYMENT */}
      {finalItems.length > 0 && (
        <>
          <div className="order-total">
            <span>Total Payable</span>
            <span>₹{totalPrice.toLocaleString()}</span>
          </div>

          <button
            className="btn btn-warning w-100 mt-3"
            onClick={() =>
              navigate("/payment", {
                state: {
                  amount: totalPrice,
                  items: finalItems, // ✅ already single item for Buy Now
                  isBuyNow,
                },
              })
            }
          >
            CONTINUE TO PAYMENT
          </button>
        </>
      )}
    </div>
  );
};

export default OrderSummary;
