import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import API from "../../Services/api";
import { CartContext } from "../../Context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductDetails.css";
import { useNavigate } from "react-router-dom";




const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const images = product?.images || [];
const mainImage = images[activeIndex];


  useEffect(() => {
    if (!id) {
      setError("No product ID provided");
      setLoading(false);
      return;
      
    }

    API.get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
       setActiveIndex(0);

        setLoading(false);
      })
      .catch((err) => {
        setError(err.response?.data?.message || "Failed to load product");
        setLoading(false);
      });
  }, [id]);

 const handleAddToCart = () => {
  addToCart({
    _id: product._id,
    name: product.name,
    price: product.price,
    image: product.images?.[0], // ✅ FIX
    quantity,
  });

  navigate("/cart");
};


  if (loading) return <p className="text-center mt-5">Loading product...</p>;
  if (error) return <p className="text-center mt-5 text-danger">{error}</p>;

const handleBuyNow = () => {
  navigate("/checkout", {
   state: {
      buyNowProduct: {
        _id: product._id,
        name: product.name,
        image: product.images?.[0] || "/placeholder.png",
        price: product.price || 0,
        quantity: quantity,
      },
    },
  });
};

  
  return (
    <div className="product-container ">
      {/* Images */}
   <div className="product-images-wrapper">

 

  {/* RIGHT – Main Image + Dots */}
  <div className="main-image-box">
    <img
      src={mainImage}
      alt={product.name}
      className="product-main-image"
      onClick={() =>
        navigate(`/image-preview/${encodeURIComponent(mainImage)}`)
      }
    />

    {/* DOTS */}
    <div className="image-dots">
      {images.map((_, idx) => (
        <span
          key={idx}
          className={`dot ${activeIndex === idx ? "active" : ""}`}
          onClick={() => setActiveIndex(idx)}
        />
      ))}
    </div>
  </div>

</div>



      {/* Info */}
      <div className="product-info">
        <h5 className="quality">{product.quality}</h5>
        <h2 className="product-title">{product.name}</h2>
        <p className="product-category">{product.category}</p>
        <p className={`product-stock ${product.countInStock > 0 ? "in-stock" : "out-of-stock"}`}>
          {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
        </p>
        <h4 className="product-price">₹{product.price ? Number(product.price).toLocaleString("en-IN") : "0"}</h4>

        {product.description && (
          <div className="product-description mt-4">
            <h5>Description</h5>
            <p>{product.description}</p>
          </div>
        )}

        {product.countInStock > 0 && (
          <div className="quantity-selector">
            <label>Quantity:</label>
            <input
              type="number"
              min="1"
              max={product.countInStock}
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.min(product.countInStock, Math.max(1, Number(e.target.value))))
              }
            />
          </div>
        )}

        <button
          className="add-to-cart-btn"
          onClick={handleAddToCart}
          disabled={product.countInStock === 0}
        >
          Add to Cart
        </button>
        <button className="buy-now-btn"  onClick={() => handleBuyNow(product)}>
           Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
