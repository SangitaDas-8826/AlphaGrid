import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
  category,
  setCategory,
  brand,
  setBrand,
  price = [0, 999999],
  setPrice,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Update URL
  const updateURL = (newCategory, newBrand, newPrice) => {
    const params = new URLSearchParams();

    if (newCategory !== "ALL") params.set("category", newCategory);
    if (newBrand !== "ALL") params.set("brand", newBrand);
    if (newPrice[1] !== 999999) params.set("maxPrice", newPrice[1]);

    navigate(`/products?${params.toString()}`);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
  const params = new URLSearchParams(location.search);

  const urlCategory = params.get("category") || "ALL";
  const urlBrand = params.get("brand") || "ALL";
  const urlMaxPrice = params.get("maxPrice");

  setCategory(urlCategory);
  setBrand(urlBrand);
  setPrice([0, urlMaxPrice ? Number(urlMaxPrice) : 999999]);

}, [location.search, setCategory, setBrand, setPrice]);

  return (
    <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <div className="sidebar-content">

        {/* CATEGORY */}
        <h5 className="fw-bold mb-2">Category</h5>
        {["ALL", "MOBILE", "HEADPHONE", "LAPTOP", "TV"].map((c) => (
          <div key={c} className="menu-item d-flex align-items-center">
            <input
              type="radio"
              name="category"
              className="me-2"
              checked={category === c}
              onChange={() => {
                setCategory(c);
                updateURL(c, brand, price);
              }}
            />
            <label>{c}</label>
          </div>
        ))}

        {/* BRAND */}
        <h5 className="fw-bold mt-3 mb-2">Brand</h5>
        <select
          className="form-select"
          value={brand}
          onChange={(e) => {
            const newBrand = e.target.value;
            setBrand(newBrand);
            updateURL(category, newBrand, price);
          }}
        >
          <option value="ALL">ALL</option>
          <option value="Samsung">Samsung</option>
          <option value="Apple">Apple</option>
          <option value="HP">HP</option>
          <option value="OnePlus">OnePlus</option>
          <option value="ASUS">ASUS</option>
        </select>

        {/* PRICE RANGE */}
        <h5 className="fw-bold mt-3 mb-2">Price Range</h5>
        <div className="d-flex justify-content-between mb-1">
          <span>₹{price[1].toLocaleString()}</span>
        </div>

        <input
          type="range"
          min="0"
          max="999999"
          step="500"
          value={price[1]}
          onChange={(e) => {
            const newPrice = [0, Number(e.target.value)];
            setPrice(newPrice);
            updateURL(category, brand, newPrice);
          }}
          className="form-range"
        />

        {/* RESET */}
        <button
          className="btn w-100 mt-3 text-white"
          style={{ background: "#ff007f" }}
          onClick={() => {
            setCategory("ALL");
            setBrand("ALL");
            setPrice([0, 999999]);
            navigate("/products");
          }}
        >
          Reset Filters
        </button>

        {/* HELP & SETTINGS */}
        <h5 className="fw-bold mt-4 mb-3">Help & Settings</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item px-0 border-0">
            Your Account
          </li>
          <li className="list-group-item px-0 border-0">
            Customer Service
          </li>
          <li className="list-group-item px-0 border-0">
            Sign In
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Sidebar;