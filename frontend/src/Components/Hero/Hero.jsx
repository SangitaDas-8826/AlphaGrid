
import "./Hero.css";
import React, { useState,useEffect } from "react";
import heroImg1 from "../../assets/iphone.png";
import heroImg2 from "../../assets/headphone.png";
import heroImg3 from "../../assets/laptop.png";
import heroImg4 from "../../assets/earpods.png";
import heroImg5 from "../../assets/musicbox.png";

import { useNavigate } from "react-router-dom";

const images = [
  heroImg1,
  heroImg2,
  heroImg3,
  heroImg4,
  heroImg5,
];

const Hero = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔁 AUTO SLIDE EVERY 3 SECONDS
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // cleanup
  }, []);
 


  return (
  
   <section className="hero-section">
      <div className="hero-overlay"></div>

      <div className="hero-content container">
        <div className="hero-left">
          <span className="hero-tag">NEW ARRIVALS</span>

          <h1 className="hero-title">
            Latest <br /> Electronics
          </h1>

          <p className="hero-desc">
            Upgrade your lifestyle with cutting-edge gadgets at unbeatable
            prices.
          </p>

          <div className="hero-buttons">
            <button className="btn-dark" onClick={() => navigate("/products")}>
              Shop Now
            </button>
            <button className="btn-light">View Deals</button>
          </div>
        </div>

        {/* PRICE BADGE */}
        <div className="price-badge">
          <span>from</span>
          <h3>₹29,999</h3>
        </div>

          {/* RIGHT IMAGE */}
          {/* RIGHT IMAGE WITH DOTS */}
        <div className="hero-right">
          <img
            src={images[currentIndex]}
            alt="Latest Electronics"
            className="hero-img"
          />

          {/* DOT INDICATORS */}
          <div className="hero-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onMouseEnter={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
   
  );
};

export default Hero;
