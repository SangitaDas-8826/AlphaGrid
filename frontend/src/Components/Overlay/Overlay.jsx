import "./Overlay.css";

const Overlay = ({ sidebarOpen, setSidebarOpen }) => {
  if (!sidebarOpen) return null;

  return (
    <div
  className={`overlay ${sidebarOpen ? "show" : ""}`}
  onClick={() => setSidebarOpen(false)}
/>
  );
};

export default Overlay;
