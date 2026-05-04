import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import "./AddressForm.css";

const AddressForm = () => {
  const { addAddress } = useOutletContext(); // ✅ from Checkout
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    const { name, phone, street, city, pincode } = address;

    if (!name || !phone || !street || !city || !pincode) {
      alert("Please fill all fields");
      return;
    }

    const newAddress = {
      id: Date.now(),
      name,
      phone,
      street,
      city,
      pincode,
    };

    // 🔥 THIS IS THE KEY LINE
    addAddress(newAddress);

    navigate("/checkout");
  };

  return (
    <div className="border p-3 mt-3">
      <h6 className="fw-bold">Add New Address</h6>

      <input
        name="name"
        className="form-control mb-2"
        placeholder="Full Name"
        value={address.name}
        onChange={handleChange}
      />

      <input
        name="phone"
        className="form-control mb-2"
        placeholder="Phone Number"
        value={address.phone}
        onChange={handleChange}
      />

      <input
        name="street"
        className="form-control mb-2"
        placeholder="Address"
        value={address.street}
        onChange={handleChange}
      />

      <input
        name="city"
        className="form-control mb-2"
        placeholder="City"
        value={address.city}
        onChange={handleChange}
      />

      <input
        name="pincode"
        className="form-control mb-3"
        placeholder="Pincode"
        value={address.pincode}
        onChange={handleChange}
      />

      <button
        className="btn btn-primary w-100 mb-2"
        onClick={handleSave}
      >
        Save and Deliver Here
      </button>

      <button
        className="btn btn-secondary w-100"
        onClick={() => navigate("/checkout")}
      >
        Cancel
      </button>
    </div>
  );
};

export default AddressForm;
