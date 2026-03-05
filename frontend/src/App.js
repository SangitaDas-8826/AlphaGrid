import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from "./Components/Navbar/Navbar";

import Overlay from "./Components/Overlay/Overlay";
import Footer from "./Components/Footer/Footer";
import ImagePreview from "./Pages/ImagePreview/ImagePreview";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Sidebar from "./Components/Sidebar/Sidebar";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Cart from "./Pages/Cart/Cart";
import Verify from "./Pages/Verify/Verify";
import VerifyEmail from "./Pages/VerifyEmail/VerifyEmail";
import Checkout from "./Pages/Checkout/Checkout";
import AddressForm from "./Pages/Checkout/AddressForm/AddressForm";
import MyAccount from "./Pages/MyAccount/MyAccount";
import Payment from "./Pages/Payment/Payment";
import PaymentSuccess from "./Pages/Payment/PaymentSuccess";
import OrderTracking from "./Pages/OrderTracking/OrderTracking";
import AdminRoute from "./Components/AdminRoute";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AddProduct from "./Pages/Admin/AddProduct";
import AdminProducts from "./Pages/Admin/AdminProducts";
import UpdateProduct from "./Pages/Admin/UpdateProduct";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("token")
  );

  const [sidebarOpen, setSidebarOpen] = useState(false);

const [category, setCategory] = useState("ALL");
const [brand, setBrand] = useState("ALL");
const [price, setPrice] = useState([0, 999999]);


  

  return (
    <BrowserRouter>

      {/* ✅ PASS SIDEBAR PROPS */}
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* ✅ OVERLAY */}
      <Overlay
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
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

      
      <Routes>
        <Route
          path="/"
          element={
           isLoggedIn ? <Home /> : <Navigate to="/login" replace />
          }/>
           <Route path="/payment" element={<Payment />} />
           <Route path="/payment-success" element={<PaymentSuccess />} />
           <Route path="/products" element={ <Products category={category}
                                                        brand={brand}
                                                        price={price}/>}/>
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={ isLoggedIn ? (
              <Navigate to="/" replace />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            ) } />
        <Route path="/image-preview/:image"element={<ImagePreview />}/>
        <Route path="account" element={<MyAccount/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/verify/:token" element={<VerifyEmail />} />
        <Route path="/order-tracking/:orderId" element={<OrderTracking />} />
         <Route path="/checkout" element={<Checkout />}>
          <Route path="address" element={<AddressForm />} />
        </Route>
        <Route />
          <Route path="/admin" element={ <AdminRoute> <AdminDashboard /></AdminRoute>} />
  <Route path="/admin/products" element={<AdminProducts />} />
  <Route path="/admin/add-product" element={<AddProduct/>} />
  <Route path="/admin/update-product/:id" element={<UpdateProduct />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
