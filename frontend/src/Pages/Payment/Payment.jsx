import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API_BASE_URL from "../../config.js";
import "./Payment.css";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [amount, setAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("online");
  const [loading, setLoading] = useState(false);

  const items = Array.isArray(location.state?.items)
    ? location.state.items
    : [];

  // 🔐 Redirect if opened directly
  useEffect(() => {
    if (!location.state?.amount || items.length === 0) {
      navigate("/");
      return;
    }
    setAmount(Number(location.state.amount)); // UI amount in ₹
  }, [location.state, navigate, items.length]);

  // ✅ SAVE ORDER
  const saveOrderAndRedirect = ({ paymentId, method }) => {
    const orderData = {
      orderId: "AG" + Date.now(),
      items,
      status: "order_placed",
      paymentMethod: method,
      paymentId,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("lastOrder", JSON.stringify(orderData));

    navigate("/payment-success", {
      state: {
        items,
        paymentMethod: method,
        paymentId,
        isBuyNow: items.length === 1,
      },
    });
  };

  // ✅ RAZORPAY PAYMENT
  const handleOnlinePayment = async () => {
    try {
      setLoading(true);

      if (!window.Razorpay) {
        alert("Razorpay SDK not loaded");
        return;
      }

      // 🔥 SEND PAISE TO BACKEND
      const res = await fetch(`${API_BASE_URL}create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amount * 100 }),
      });

      const order = await res.json();

      const options = {
        key: "rzp_test_RyVK9dIgTzLYky",
        amount: order.amount, // paise
        currency: "INR",
        name: "ALPHA-GRID",
        description: "Secure Payment",
        image: "/logo-pink.png",
        order_id: order.id,

        handler: async (response) => {
          const verify = await fetch(
            `${API_BASE_URL}/verify-payment`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            }
          );

          if (verify.ok) {
            saveOrderAndRedirect({
              paymentId: response.razorpay_payment_id,
              method: "online",
            });
          } else {
            alert("Payment verification failed ❌");
          }
        },

        theme: { color: "#ff2f6e" },
      };

      new window.Razorpay(options).open();
    } catch (err) {
      console.error(err);
      alert("Payment failed");
    } finally {
      setLoading(false);
    }
  };

  // ✅ CASH ON DELIVERY
  const handleCOD = () => {
    saveOrderAndRedirect({
      paymentId: "COD",
      method: "cod",
    });
  };

  const handlePayment = () => {
    if (loading) return;
    paymentMethod === "online" ? handleOnlinePayment() : handleCOD();
  };

  return (
    <div className="payment-page">
      <div className="payment-container">

        {/* LEFT */}
        <div className="payment-left">
          <h4 className="payment-title">Payment Details</h4>

          <div className="payment-methods">
            <label>
              <input
                type="radio"
                checked={paymentMethod === "online"}
                onChange={() => setPaymentMethod("online")}
              />
              Online Payment (UPI / Card / NetBanking)
            </label>

            <label>
              <input
                type="radio"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
              />
              Cash on Delivery
            </label>
          </div>

          <div className="payment-box">
            <p className="label">Order Amount</p>
            <h3 className="amount">₹{amount.toLocaleString("en-IN")}</h3>
          </div>

          <button
            className="pay-btn"
            onClick={handlePayment}
            disabled={loading}
          >
            {loading
              ? "Processing..."
              : paymentMethod === "cod"
              ? "Place Order"
              : `Pay ₹${amount.toLocaleString("en-IN")}`}
          </button>
        </div>

        {/* RIGHT */}
        <div className="payment-right">
          <h6>Price Details</h6>

          <div className="price-row">
            <span>Price</span>
            <span>₹{amount.toLocaleString("en-IN")}</span>
          </div>

          <div className="price-row">
            <span>Delivery Charges</span>
            <span className="free">FREE</span>
          </div>

          <div className="price-total">
            <span>Total Payable</span>
            <span>₹{amount.toLocaleString("en-IN")}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Payment;
