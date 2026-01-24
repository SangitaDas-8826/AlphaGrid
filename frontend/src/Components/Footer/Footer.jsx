import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="text-white pt-5 pb-3" style={{ background: "#0f0f1a" }}>
      <div className="container">

        <div className="row">

          {/* Brand Info */}
          <div className="col-md-3 mb-4">
            <h4 className="fw-bold" style={{ color: "#ff007f" }}>ALPHA-GRID</h4>
            <p className="small text-light mt-3">
              Powering Your World with the Best in Electronics.
            </p>

            <p className="small text-secondary mb-1">
              123 Electronics St, New York, USA
            </p>

            <p className="small text-secondary mb-1">
              Email: support@kart.co
            </p>

            <p className="small text-secondary">
              Phone: (123) 456-7890
            </p>
          </div>

          {/* Customer Service */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Customer Service</h6>
            <ul className="list-unstyled text-secondary small">
              <li className="mb-2">Contact Us</li>
              <li className="mb-2">Shipping & Returns</li>
              <li className="mb-2">FAQs</li>
              <li className="mb-2">Order Tracking</li>
              <li className="mb-2">Size Guide</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Follow Us</h6>
            <ul className="list-unstyled text-secondary small">
              <li className="mb-2">Facebook</li>
              <li className="mb-2">Instagram</li>
              <li className="mb-2">Twitter</li>
              <li className="mb-2">LinkedIn</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Stay in the Loop</h6>
            <p className="small text-secondary">
              Subscribe to get offers, free giveaways, and updates.
            </p>

            <div className="d-flex">
              <input
                type="email"
                placeholder="Your email address"
                className="form-control form-control-sm"
              />
              <button className="btn btn-sm ms-2 text-white"
                style={{ background: "#ff007f" }}>
                Subscribe
              </button>
            </div>
          </div>

        </div>

        <hr className="border-secondary" />

        {/* Bottom Text */}
        <div className="text-center mt-3 small text-secondary">
          © 2025 ALPHA-GRID. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
