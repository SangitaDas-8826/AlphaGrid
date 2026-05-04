import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../../config.js";



const AddProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    description: ""
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API_BASE_URL}/api/products/add-product`,
         product,
 
  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  }
);
 navigate("/admin/products");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} className="form-control mb-2" />
        <input name="price" placeholder="Price" onChange={handleChange} className="form-control mb-2" />
        <select 
  name="category" 
  onChange={handleChange} 
  className="form-control mb-2"
>
  <option value="">Select Category</option>
  <option value="Mobiles">Mobiles</option>
  <option value="Laptops">Laptops</option>
  <option value="Electronics">Electronics</option>
  <option value="Accessories">Accessories</option>
</select>
        <input name="image" placeholder="Image URL" onChange={handleChange} className="form-control mb-2" />
        <textarea name="description" placeholder="Description" onChange={handleChange} className="form-control mb-2" />
        
        <button className="btn btn-success">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;