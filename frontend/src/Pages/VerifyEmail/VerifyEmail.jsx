import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


function VerifyEmail() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("Verifying...");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await fetch(`https://alphagrid-my6w.onrender.com/api/user/verify/${token}`, {
          method: "GET"
        });

        const data = await res.json();
        console.log(data)

        if (res.ok) {
          setStatus("Email verified successfully!");
          setTimeout(() => navigate("/login"), 3000);
        } else {
          setStatus(data.message || "Verification failed");
        }
      } catch (error) {
        setStatus("Network error. Please try again.");
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: "linear-gradient(135deg, #6a11cb, #2575fc)" }}>
      <div className="card shadow p-4 text-center" style={{ maxWidth: "420px" }}>
        <h3 className="fw-bold mb-2">Email Verification</h3>
        <p className="text-muted mb-4">{status}</p>
      </div>
    </div>
  );
}

export default VerifyEmail;