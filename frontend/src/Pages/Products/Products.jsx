import React, { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router-dom";
import API_BASE_URL from "../../config.js";
import "./Products.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Overlay from "../../Components/Overlay/Overlay";
import { CartContext } from "../../Context/CartContext";

const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  // STATES
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("ALL");
  const [brand, setBrand] = useState("ALL");
  const [price, setPrice] = useState([0, 999999]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // 🔍 SEARCH QUERY FROM URL
  const searchQuery =
    new URLSearchParams(location.search).get("search")?.toLowerCase().trim() || "";

  // 📂 CATEGORY FROM URL
  const categoryFromURL =
    new URLSearchParams(location.search).get("category") || "ALL";

  // ✅ APPLY CATEGORY FROM URL
  useEffect(() => {
    setCategory(categoryFromURL);
  }, [categoryFromURL]);

  // FETCH PRODUCTS
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/products`)
      .then((res) => res.json())
    .then((data) => {
      console.log("FULL RESPONSE:", data);
      console.log("TYPE OF PRODUCTS:", typeof data.products);
      console.log("IS ARRAY:", Array.isArray(data.products));

      setProducts(data || []); // ✅ very important
    })
    .catch((err) => console.error(err));
}, []);
  // FILTER PRODUCTS
  const filtered = products.filter((p) => {
   const c =
  category === "ALL" ||
  p.category?.toLowerCase().includes(category.toLowerCase()) ||
  category.toLowerCase().includes(p.category?.toLowerCase());

    const b = brand === "ALL" || p.brand === brand;
    const pr = p.price >= price[0] && p.price <= price[1];

    const s =
      !searchQuery ||
      p.name?.toLowerCase().includes(searchQuery) ||
      p.brand?.toLowerCase().includes(searchQuery) ||
      p.category?.toLowerCase().includes(searchQuery);

    return c && b && pr && s;
  });

  return (
    <div className="container-fluid p-3 mt-5">
      <Overlay sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        category={category}
        setCategory={setCategory}
        brand={brand}
        setBrand={setBrand}
        price={price}
        setPrice={setPrice}
      />

      <div className="row g-4 p-3 product-grid">
        {filtered.map((item) => (
          <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={item._id}>
            <div
              className="product-card"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/product/${item._id}`)}
            >
              <div className="product-image-wrapper">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="product-info text-center">
                <h6 className="product-description">
                  {item.description?.slice(0, 40)}...
                </h6>

                <h6 className="product-title">{item.name}</h6>
                <p className="fw-bold">₹{item.price ? Number(item.price).toLocaleString("en-IN") : "0"}</p>

                <button
                  className="btn w-100 text-white"
                  style={{ background: "#000000c5" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(item);
                  }}
                >
                  <i className="bi bi-cart-plus me-2"></i>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="text-center mt-5">No products found</p>
        )}
      </div>
    </div>
  );
};

export default Products;