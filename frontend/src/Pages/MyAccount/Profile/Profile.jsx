import { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import "./Profile.css";

const Profile = () => {
  const [editField, setEditField] = useState(null);
  const [otpField, setOtpField] = useState(null);

  const [data, setData] = useState({
    name: "Sangita Das",
    gender: "Female",
    email: "sangita@gmail.com",
    mobile: "9876543210",
  });

  const [temp, setTemp] = useState(data);
  const [otp, setOtp] = useState("");

  const startEdit = (field) => {
    setTemp(data);
    setEditField(field);
  };

  const saveField = () => {
    setData(temp);
    setEditField(null);
    setOtpField(null);
    setOtp("");
  };

  const cancelEdit = () => {
    setEditField(null);
    setOtpField(null);
    setOtp("");
  };

  const sendOtp = (field) => {
    setOtpField(field);
  };

  const renderBox = (label, field, verify = false) => (
    <div className="fk-box">
      <Row className="align-items-center">
        <Col md={4} className="fk-label">{label}</Col>

        <Col md={6}>
          {editField === field ? (
            <>
              <Form.Control
                size="sm"
                value={temp[field]}
                onChange={(e) =>
                  setTemp({ ...temp, [field]: e.target.value })
                }
              />

              {verify && otpField === field && (
                <Form.Control
                  size="sm"
                  className="mt-2"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              )}
            </>
          ) : (
            <span className="fk-value">{data[field]}</span>
          )}
        </Col>

        <Col md={2} className="text-end">
          {editField === field ? (
            <>
              {verify && !otpField && (
                <Button
                  variant="link"
                  className="fk-edit"
                  onClick={() => sendOtp(field)}
                >
                  Send OTP
                </Button>
              )}
              <Button variant="link" className="fk-edit" onClick={saveField}>
                Save
              </Button>
              <Button
                variant="link"
                className="fk-cancel"
                onClick={cancelEdit}
              >
                Cancel
              </Button>
            </>
          ) : (
            <Button
              variant="link"
              className="fk-edit"
              onClick={() => startEdit(field)}
            >
              Edit
            </Button>
          )}
        </Col>
      </Row>
    </div>
  );

  return (
    <div className="fk-profile">
  
      <h5 className="fk-title"
      >Personal Information</h5>

      {renderBox("Name", "name")}

      <h6 className="fk-subtitle">Gender</h6>
      {renderBox("Your Gender", "gender")}

      <h6 className="fk-subtitle">Email Address</h6>
      {renderBox("Email", "email", true)}

      <h6 className="fk-subtitle">Mobile Number</h6>
      {renderBox("Mobile", "mobile", true)}

      
    </div>
  );
};

export default Profile;
