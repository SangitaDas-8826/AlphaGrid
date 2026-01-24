import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Overlay from "./Components/Overlay/Overlay";
import Footer from "./Components/Footer/Footer";
import ImagePreview from "./Pages/ImagePreview/ImagePreview";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("token")
  );

  // ✅ SINGLE SOURCE OF TRUTH
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

      {/* ✅ SIDEBAR */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <Home /> : <Navigate to="/login" replace />
          }
        />
           <Route path="/payment" element={<Payment />} />
           <Route path="/payment-success" element={<PaymentSuccess />} />

        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route
          path="/image-preview/:image"
          element={<ImagePreview />}
        />
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
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
