import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import API_BASE_URL from "../../config.js";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/products/${id}`)
      .then(res => setProduct(res.data));
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.put(
      `${API_BASE_URL}/api/products/${id}`,
      product,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );

    navigate("/admin/products");
  };

  return (
    <div className="container mt-5">
      <h2>Edit Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={product.name || ""}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <input
          name="price"
          value={product.price || ""}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <input
          name="category"
          value={product.category || ""}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <button className="btn btn-primary">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;