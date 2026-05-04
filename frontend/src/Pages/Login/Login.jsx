import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../../config.js";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/user/login`,
        { email, password }
      );
     
      toast.success("Login Successful!");

      // ✅ SAVE TOKEN (IMPORTANT)
      localStorage.setItem("token", response.data.accessToken);
      // ✅ SAVE USER INFO (OPTIONAL)
      localStorage.setItem(
  "userInfo",
  JSON.stringify({
    name: response.data.user.firstName,
    email: response.data.user.email,
  })
);
      // ✅ UPDATE LOGIN STATE
      setIsLoggedIn(true);

      setTimeout(() => {
        navigate("/");
      }, 1500);

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center">
      <ToastContainer />
      <div className="card login-card p-4 shadow-lg">
        <h3 className="text-center mb-4 fw-bold text-primary">
          Welcome Back
        </h3>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 py-2">
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <a href="/register" className="text-decoration-none fw-semibold">
            Create a new account
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
