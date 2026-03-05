import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>

      <Link to="/admin/products" className="btn btn-dark m-2">
        Manage Products
      </Link>

      <Link to="/admin/add-product" className="btn btn-primary m-2">
        Add Product
      </Link>
    </div>
  );
};

export default AdminDashboard;
