import { Card, Button, Badge } from "react-bootstrap";
import "./Orders.css";

const Orders = () => {
  return (
    <>
      <h5 className="section-title">My Orders</h5>

      <Card className="order-card">
        <div className="order-row">
          {/* PRODUCT IMAGE */}
          <div className="order-img">
            <img
              src="https://m.media-amazon.com/images/I/61VuVU94RnL._SX679_.jpg"
              alt="Product"
            />
          </div>

          {/* PRODUCT DETAILS */}
          <div className="order-details">
            <p className="order-title">Apple iPhone 14 (128 GB)</p>
            <small className="order-id">Order ID: #AG12345</small>
            <p className="order-price">₹69,999</p>
            <p className="order-date">
              Delivered on <strong>05 Jan 2026</strong>
            </p>
            
          </div>

          
            

          {/* STATUS + ACTION */}
          <div className="order-action">
            <Badge className="status-badge delivered">Delivered</Badge>

            <Button
              size="sm"
              variant="outline-primary"
              className="view-btn"
            >
              View Details
            </Button>
          </div>
        </div>
      </Card>
       <Card className="order-card">
        <div className="order-row">
          {/* PRODUCT IMAGE */}
          <div className="order-img">
            <img
              src="https://m.media-amazon.com/images/I/61VuVU94RnL._SX679_.jpg"
              alt="Product"
            />
          </div>

          {/* PRODUCT DETAILS */}
          <div className="order-details">
            <p className="order-title">Apple iPhone 14 (128 GB)</p>
            <small className="order-id">Order ID: #AG12345</small>
            <p className="order-price">₹69,999</p>
            <p className="order-date">
              Delivered on <strong>05 Jan 2026</strong>
            </p>
            
          </div>

          
            

          {/* STATUS + ACTION */}
          <div className="order-action">
            <Badge className="status-badge delivered">Delivered</Badge>

            <Button
              size="sm"
              variant="outline-primary"
              className="view-btn"
            >
              View Details
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Orders;
