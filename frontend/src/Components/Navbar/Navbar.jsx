import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { IoClose } from "react-icons/io5";
import "./Navbar.css";

const Navbar = ({
  sidebarOpen = false,
  setSidebarOpen = () => { },
  isLoggedIn,
  setIsLoggedIn = () => { },
}) => {
  const navigate = useNavigate();
  const { cartCount } = useContext(CartContext);

  const [userName, setUserName] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

 
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo?.name) {
      setUserName(userInfo.name);
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    setIsLoggedIn(false);
    navigate("/login");
  };



  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid align-items-center">

          {/* SIDEBAR TOGGLE */}
          <button
            className="btn border-0 bg-transparent me-3 text-white"
            onClick={() => setSidebarOpen((prev) => !prev)}
            style={{ fontSize: "1.7rem" }}
          >
            {sidebarOpen ? <IoClose /> : "☰"}
          </button>

          {/* LOGO */}
          <Link
            className="navbar-brand fw-bold"
            style={{ color: "#ff0077d6",marginLeft:10 }}
            to="/"
          >
            ALPHA-GRID
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* MENU */}
          <div className={`navbar-collapse ${menuOpen ? "show" : "collapse"}`}>

            {/* 🔍 SEARCH BAR */}
            <div className="navbar-search d-none d-lg-flex">
              <i className="bi bi-search"></i>
              <input
                type="text"
                
                placeholder="Search products..."
                value={searchText}
                onChange={(e) => {
                  const value = e.target.value;
                  setSearchText(value);

                  navigate(
                    value.trim()
                      ? `/products?search=${encodeURIComponent(value)}`
                      : "/products"
                  );
                }}
              />
            </div>

            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>

             {isLoggedIn && (
                <li className="nav-item">
                  <span
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/account")}
                  >
                    Hello {userName}
                  </span>
                </li>
              )}

            

              <li className="nav-item position-relative">
                <Link to="/cart" className="nav-link">
                  <i className="bi bi-cart3 fs-4"></i>
                  {cartCount > 0 && (
                    <span className="badge cart-badge">{cartCount}</span>
                  )}
                </Link>
              </li>

              {isLoggedIn && (
                <li className="nav-item ms-2">
                  <button
                    className="btn btn-sm text-white"
                    style={{ background: "#ff007f" }}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* SPACER */}
      <div style={{ height: "70px" }}></div>
    </>
  );
};

export default Navbar;
