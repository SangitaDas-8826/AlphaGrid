import {  useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./OrderTracking.css";

const OrderTracking = () => {

  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  // 🔐 CHECK LOGIN
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [navigate]);


  // 📦 LOAD ORDER (ONLY from localStorage)
useEffect(() => {
  const savedOrder = JSON.parse(localStorage.getItem("lastOrder"));
  if (savedOrder) {
    setOrder(savedOrder);
  }
}, []);


  if (!order) return <p>Loading order...</p>;

  // ✅ FINAL ITEMS (same structure as OrderSummary)
  const finalItems = (order.items || []).map((item) => ({
    _id: item._id,
    name: item.name ,
    image: item.image,
    quantity: item.quantity || 1,
    price: item.price || 0,
  }));
console.log(finalItems)
  // 🔄 TRACKING STEPS
  const steps = [
    { key: "order_placed", label: "Order Placed" },
    { key: "shipped", label: "Shipped" },
    { key: "out_for_delivery", label: "Out for Delivery" },
    { key: "delivered", label: "Delivered" },
  ];

  const activeIndex = steps.findIndex((step) => step.key === order.status);
const subtotal = finalItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05;
  const totalPrice = subtotal + tax;
  return (
    <div className="tracking-container">
      <h2>Order Tracking</h2>
      <p>
        <b>Order ID:</b> {order.orderId || order.id || "N/A"}
      </p>

      {/* PRODUCTS */}
      {finalItems.map((item) => (
        <div className="tracking-product" key={item._id}>
          <img src={item.image} alt={item.name} width="80" height="80" />
          <div className="tracking-info">
            <p className="product-name">{item.name}</p>
            <p className="product-qty">Qty: {item.quantity}</p>
            <p className="product-price">₹{totalPrice.toLocaleString("en-IN")}</p>
          </div>
        </div>
      ))}

      {/* TRACKING STEPS */}
      <div className="tracking-steps">
        {steps.map((step, index) => (
          <div className="step" key={step.key}>
            <div className={`circle ${index <= activeIndex ? "active" : ""}`}>
              {index <= activeIndex ? "✔" : index + 1}
            </div>
            <p>{step.label}</p>
          </div>
        ))}
      </div>

      {/* DELIVERY DATE */}
      <p className="delivery-date">
        📦 Expected Delivery:{" "}
        <b>{order.expectedDelivery || "TBD"}</b>
      </p>
    </div>
  );
};

export default OrderTracking;
