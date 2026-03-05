import React, { useState } from "react";
import "./CustomerService.css";

const CustomerService = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mt-5 customer-page">
      <h2 className="text-center mb-4 fw-bold">Customer Service</h2>

      <div className="row">
        {/* LEFT SIDE - CONTACT INFO */}
        <div className="col-md-5 mb-4">
          <div className="card p-4 shadow-sm">
            <h5 className="fw-bold mb-3">Need Help?</h5>
            <p>We are here to assist you with your orders and queries.</p>

            <p><strong>Email:</strong> support@yourstore.com</p>
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Working Hours:</strong> 9 AM - 6 PM</p>
          </div>
        </div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <div className="col-md-7">
          <div className="card p-4 shadow-sm">
            <h5 className="fw-bold mb-3">Send Us a Message</h5>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn w-100 text-white"
                style={{ background: "#ff007f" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;