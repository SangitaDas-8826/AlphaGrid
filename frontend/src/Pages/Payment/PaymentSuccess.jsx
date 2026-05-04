import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./PaymentSuccess.css";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { items = [], paymentId } = location.state || {};

  useEffect(() => {
    const timer = setTimeout(() => {
      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + 3);

      const orderId = "AG" + Date.now();

      const orderData = {
        orderId,
        status: "order_placed",
        expectedDelivery: deliveryDate.toDateString(),
        items, // ✅ ONLY WHAT USER PAID FOR
        paymentId,
      };

      // ✅ SAVE ONCE (ONLY HERE)
      localStorage.setItem("lastOrder", JSON.stringify(orderData));

      navigate(`/order-tracking/${orderId}`);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, items, paymentId]);

  return (
    <div className="payment-success-wrapper">
      <div className="success-card">

        <div className="checkmark">
          ✓
        </div>

        <h1>Order Placed Successfully</h1>

        <p className="success-msg">
          Thank you for shopping with <strong>ALPHA-GRID</strong>
        </p>

        <div className="payment-info">
          <span>Payment ID</span>
          <strong>{paymentId}</strong>
        </div>

        <div className="redirect-msg">
          Redirecting to order tracking…
        </div>

        <div className="progress-bar">
          <span />
        </div>

      </div>
    </div>
  );
};

export default PaymentSuccess;
