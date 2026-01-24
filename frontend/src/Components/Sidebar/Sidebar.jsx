import React, { useState } from "react";
import './Sidebar.css'

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [category, setCategory] = useState("ALL");
  const [brand, setBrand] = useState("ALL");
  const [price, setPrice] = useState([0, 999999]);

  return (
    <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <div className="sidebar-content">
        {/* CATEGORY */}
        <h5 className="fw-bold mb-2">Category</h5>
        {["ALL", "MOBILE", "HEADPHONE", "LAPTOP", "TV"].map((c) => (
          <div key={c} className="menu-item d-flex align-items-center">
            <input
              type="radio"
              className="me-2"
              checked={category === c}
              onChange={() => setCategory(c)}
            />
            <label className="form-check-label">{c}</label>
          </div>
        ))}

        {/* BRAND */}
        <h5 className="fw-bold mt-3 mb-2">Brand</h5>
        <select
          className="form-select"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option>ALL</option>
          <option>Samsung</option>
          <option>Apple</option>
          <option>HP</option>
          <option>OnePlus</option>
          <option>ASUS</option>
        </select>

        {/* PRICE RANGE */}
        <h5 className="fw-bold mt-3 mb-2">Price Range</h5>
        <div className="d-flex justify-content-between mb-1">
          <span>₹0</span>
          <span>₹{price[1].toLocaleString()}</span>
        </div>

        <input
          type="range"
          min="0"
          max="100000"
          step="500"
          value={price[1]}
          onChange={(e) => setPrice([0, Number(e.target.value)])}
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
          }}
        >
          Reset Filters
        </button>

        {/* HELP & SETTINGS */}
        <h5 className="fw-bold mt-4 mb-3">Help & Settings</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item px-0 border-0">
            <i className="bi bi-person me-2"></i> Your Account
          </li>
          <li className="list-group-item px-0 border-0">
            <i className="bi bi-headset me-2"></i> Customer Service
          </li>
          <li className="list-group-item px-0 border-0">
            <i className="bi bi-box-arrow-in-right me-2"></i> Sign In
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
