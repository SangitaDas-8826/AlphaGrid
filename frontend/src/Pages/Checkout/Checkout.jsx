import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import UserInfo from "./UserInfo/UserInfo";
import AddressList from "./AddressList/AddressList";
import PriceDetails from "./priceDetails/priceDetails";
import OrderSummary from "./OrderSummary/OrderSummary";
import "./Checkout.css";

const Checkout = () => {
  const [addresses, setAddresses] = useState([]);
  const [step, setStep] = useState(2); // 2 = Address, 3 = Order Summary
  const [selectedId, setSelectedId] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);


  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("addresses")) || [];
    setAddresses(stored);

    const selected =
      localStorage.getItem("selectedAddressId");
    if (selected) setSelectedId(Number(selected));
  }, []);

  const addAddress = (newAddress) => {
    const updated = [...addresses, newAddress];
    setAddresses(updated);
    localStorage.setItem("addresses", JSON.stringify(updated));
    setSelectedId(newAddress.id);
  };

  const removeAddress = (id) => {
  const updated = addresses.filter(a => a.id !== id);
  setAddresses(updated);
  localStorage.setItem("addresses", JSON.stringify(updated));

  // 🔴 HIDE ORDER SUMMARY
  setIsConfirmed(false);
  setStep(2);
};


  return (
    <div className="container-fluid checkout-container checkout-wrappe">
      <div className="row justify-content-center">

        {/* LEFT SIDE */}
        <div className="col-lg-8 checkout-left-card">

          {/* STEP 1 */}
          <UserInfo />

          {/* STEP 2 */}
          <AddressList
            addresses={addresses}
            selectedId={selectedId}
            onSelect={setSelectedId}
            onRemove={removeAddress}
            setStep={setStep}   // ✅ IMPORTANT
            setIsConfirmed={setIsConfirmed}
          />

          {/* Add Address form */}
          <Outlet context={{ addAddress }} />

          {/* STEP 3 – ORDER SUMMARY */}
          {step === 3 && isConfirmed && (
            <OrderSummary />
          )}

        </div>

        {/* RIGHT SIDE */}
        <div className="col-lg-4 checkout-right-card">
          <PriceDetails />
        </div>

      </div>
    </div>
  );
};

export default Checkout;
