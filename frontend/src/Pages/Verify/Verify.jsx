import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../config.js";

 function Verify() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const message =
    location.state?.message || "We have sent a verification link to your email.";

  const userEmail = location.state?.email || ""; // optional: pass email from register

  // Handle Resend Email
  const handleResend = async () => {
    if (!userEmail) {
      alert("Email not available. Please login and request verification again.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${API_BASE_URL}/api/user/reVerify`, {
        email: userEmail,
      });

      alert(res.data.message || "Verification email resent successfully!");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to resend email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: "linear-gradient(135deg, #6a11cb, #2575fc)" }}
    >
      <div className="card shadow p-4 text-center" style={{ maxWidth: "420px" }}>
        <div className="mb-3">
          <i className="bi bi-envelope-check fs-1 text-primary"></i>
        </div>

        <h3 className="fw-bold mb-2">{message}</h3>

        <p className="text-muted mb-4">
          Please check your inbox and click the verification link to continue.
        </p>

        <button
          className="btn btn-primary w-100 mb-2"
          onClick={() => window.location.href = "mailto:"}
        >
          Open Email App
        </button>

        <button
          className="btn btn-outline-secondary w-100"
          onClick={handleResend}
          disabled={loading}
        >
          {loading ? "Resending..." : "Resend Email"}
        </button>
      </div>
    </div>
  );
}
export default Verify