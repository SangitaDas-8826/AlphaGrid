import { useNavigate } from "react-router-dom";

import AddressCard from "../AddressCard/AddressCard";
import "./AddressList.css";

const AddressList = ({ addresses, selectedId, onSelect, onRemove,setStep,setIsConfirmed }) => {
 const navigate = useNavigate();


  return (
    <div>
      <h6 className="fw-bold mb-3">DELIVER TO</h6>

      {addresses.length === 0 && (
        <p className="text-muted">No saved addresses</p>
      )}

      {addresses.map((addr) => (
        <AddressCard
         key={addr.id}
          address={addr}
          selectedId={selectedId}
          onSelect={onSelect}
          onRemove={onRemove}
           setStep={setStep}
          setIsConfirmed={setIsConfirmed}
        />
      ))}

      <button
        className="btn btn-link text-primary fw-bold mt-3"
        onClick={() => navigate("/checkout/address")}
      >
        + Add a new address
      </button>
    </div>
  );
};

export default AddressList;
