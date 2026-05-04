import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API_BASE_URL from "../../config.js";

function VerifyEmail() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [status, setStatus] = useState("Verifying your email...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/user/verify/${token}`);

        const data = await res.json();

        if (res.ok) {
          setStatus("✅ Email verified successfully! Redirecting to login...");
          
          setTimeout(() => {
            navigate("/login");
          }, 3000);

        } else {
          setStatus(data.message || "❌ Verification failed. Link may be expired.");
        }

      } catch (error) {
        setStatus("❌ Network error. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      verifyEmail();
    } else {
      setStatus("❌ Invalid verification link.");
      setLoading(false);
    }
  }, [token, navigate]);

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: "linear-gradient(135deg, #6a11cb, #2575fc)" }}
    >
      <div className="card shadow p-4 text-center" style={{ maxWidth: "420px" }}>
        <h3 className="fw-bold mb-3">Email Verification</h3>

        {loading ? (
          <p className="text-muted">Verifying your email...</p>
        ) : (
          <p className="text-muted">{status}</p>
        )}
      </div>
    </div>
  );
}

export default VerifyEmail;