import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import "./priceDetails.css";

const PriceDetails = () => {
  const location = useLocation();
  const { cartItems } = useContext(CartContext);

  const buyNowProduct = location.state?.buyNowProduct;

  const finalItems = buyNowProduct
    ? [buyNowProduct]     // ⚡ BUY NOW
    : cartItems;          // 🛒 CART

  const subtotal = finalItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );


  const tax = subtotal * 0.05;
  const totalPrice = subtotal + tax ;
  return (
    <div className="bg-white p-3 border">
      <h6 className="fw-bold text-secondary">PRICE DETAILS</h6>

      <div className="d-flex justify-content-between">
        <span>
          Price ({finalItems.length}{" "}
          {finalItems.length === 1 ? "item" : "items"})
        </span>
        <span>₹{subtotal.toLocaleString()}</span>
      </div>

       <div className="d-flex justify-content-between">
        <span>Tax (5%)</span>
        <span>₹{tax.toLocaleString()}</span>
      </div>

      
 
 

      <div className="d-flex justify-content-between fw-bold">
        <span>Total Payable</span>
        <span>₹{totalPrice.toLocaleString()}</span>
      </div>

      <p className="fst mt-2">
        Safe and Secure Payments. Easy returns.<br />
        100% Authentic Products.
      </p>

      <p className="snd">
        By continuing with the order,<br />
        you confirm that you are above 18 years of age,<br />
        and you agree to the Flipkart Terms of Use and Privacy Policy.
      </p>
    </div>
  );
};

export default PriceDetails;
