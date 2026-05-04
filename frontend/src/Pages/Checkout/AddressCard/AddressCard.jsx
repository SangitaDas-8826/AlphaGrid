import { useNavigate } from "react-router-dom";
import "./AddressCard.css";

const AddressCard = ({
  address,
  selectedId,
  onSelect,
  onRemove,
  setStep,
  setIsConfirmed,
}) => {
  const navigate = useNavigate();
  const isActive = selectedId === address.id;

  // 🔹 Select address (open summary but NOT confirmed)
  const handleSelect = () => {
    if (!isActive) {
      onSelect(address.id);
      setStep(3);            // show order summary
      setIsConfirmed(false); // not confirmed yet
    }
  };

  // 🔹 Confirm address
  const handleDeliverHere = (e) => {
    e.stopPropagation();
    setIsConfirmed(true);   // confirmed
  };

  return (
    <div
      className={`address-box ${isActive ? "active" : ""}`}
      onClick={handleSelect}
    >
      <div className="address-left">
        <input
          type="radio"
          checked={isActive}
          readOnly
          className="me-2"
        />
        <strong>{address.name}</strong>

        <p className="address-text">
          {address.street}, {address.city} - {address.pincode}
        </p>

        {isActive && (
          <button
            className="btn btn-warning btn-sm mt-2"
            onClick={handleDeliverHere}
          >
            DELIVER HERE
          </button>
        )}
      </div>

      {isActive && (
        <div className="address-right">
          <button
            className="btn btn-link text-primary"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/checkout/address/edit/${address.id}`);
            }}
          >
            Edit
          </button>

          <button
            className="btn btn-link text-danger"
            onClick={(e) => {
              e.stopPropagation();
              onRemove(address.id);
              setStep(2);
              setIsConfirmed(false);
            }}
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default AddressCard;
