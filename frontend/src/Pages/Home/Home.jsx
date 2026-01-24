import React from "react";
import Hero from "../../Components/Hero/Hero";
import { useNavigate } from "react-router-dom";

import iphone from "../../assets/iphone.png";
import laptop from "../../assets/laptop.png";
import headphone from "../../assets/headphone.png";
import earpods from "../../assets/earpods.png";
import speaker from "../../assets/musicbox.png";
import tablet from "../../assets/tablet.png"
import camera from "../../assets/camera.png"
import charger from "../../assets/charger.png"
import led from "../../assets/led.png"
import router from "../../assets/router.png"
import gaming from "../../assets/gaming.png"
import smartwatch from "../../assets/smartwatch.png"


const categories = [
  { name: "Mobiles", image: iphone },
  { name: "Laptops", image: laptop },
  { name: "Headphones", image: headphone },
  { name: "Earphones", image: earpods },
  { name: "Speakers", image: speaker },
  { name: "Tablets", image: tablet},
  { name: "Camera", image: camera},
  { name: "LED TV", image: led },
  { name: "Chargers", image: charger},
  { name: "Router", image: router},
  { name: "Gaming Gadget", image: gaming},
  { name: "Smart Watch", image: smartwatch},
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* HERO */}
      <Hero />

      {/* CATEGORIES */}
      <div className="container my-5">
        <h4 className="mb-4">Shop by Category</h4>

        <div className="row justify-content-center">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="col-6 col-md-2 text-center"
              style={{ cursor: "pointer" }}
              onClick={() =>
                navigate(`/products?category=${cat.name}`)
              }
            >
              <img src={cat.image} alt={cat.name} width="80" />
              <p className="mt-2 fw-semibold">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <div className="container my-4">
        <div className="row text-center">
          <div className="col-md-4">
            <i className="bi bi-truck fs-1"></i>
            <h6 className="mt-2">Free Shipping</h6>
            <p className="small text-muted">On orders over ₹500</p>
          </div>

          <div className="col-md-4">
            <i className="bi bi-shield-check fs-1"></i>
            <h6 className="mt-2">Secure Payment</h6>
            <p className="small text-muted">100% secure transactions</p>
          </div>

          <div className="col-md-4">
            <i className="bi bi-headset fs-1"></i>
            <h6 className="mt-2">24/7 Support</h6>
            <p className="small text-muted">Always here to help</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
