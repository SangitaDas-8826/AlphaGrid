import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";
import { useState } from "react";
import Profile from "./Profile/Profile";


import Orders from "./Orders/Orders"
import "./MyAccount.css";

const MyAccount = () => {
  const [active, setActive] = useState("profile");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <Container fluid className="account-wrapper py-4">
      <Container>
        <Row>
          {/* LEFT MENU */}
          <Col lg={3} md={4} className="mb-3">
            <Card className="account-menu">
              <div className="user-box">
                <div className="avatar">SD</div>
                <div>
                  <p className="mb-0 fw-bold" style={{
                    color: "#000000c5",
                    fontSize: "20px"
                  }}>Sangita Das</p>
                  <small className="text-muted" style={{
                    fontSize:"15px"
                  }}>View Profile</small>
                </div>
              </div>

              <ListGroup variant="flush">
                <ListGroup.Item
                  action
                  active={active === "profile"}
                  onClick={() => setActive("profile")}
                >
                  👤 Profile Information
                </ListGroup.Item>

                <ListGroup.Item
                  action
                  active={active === "orders"}
                  onClick={() => setActive("orders")}
                >
                  📦 My Orders
                </ListGroup.Item>

                <ListGroup.Item
                  action
                  className="text-danger"
                  onClick={handleLogout}
                >

                  🚪 Logout
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          {/* RIGHT CONTENT */}
          <Col lg={9} md={8}>
            <Card className="account-content p-4">
              {active === "profile" && <Profile />}
              {active === "orders" && <Orders />}


            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default MyAccount;
