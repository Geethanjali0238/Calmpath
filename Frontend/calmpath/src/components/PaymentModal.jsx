// @ts-nocheck
export default function PaymentModal({ onSuccess, onClose }) {
  return (
    <div style={overlay}>
      <div style={modal}>
        <h3>Payment Required</h3>
        <p>
          You have completed 3 free sessions.
          Please pay to continue booking.
        </p>

        {/* SAMPLE QR CODE */}
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=CalmPath-Payment"
          alt="Payment QR"
          style={{ margin: "15px 0" }}
        />

        <p style={{ fontSize: "13px", color: "#555" }}>
          * Sample QR for demo purpose
        </p>

        <button style={payBtn} onClick={onSuccess}>
          I’ve Paid
        </button>

        <button style={cancelBtn} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

/* styles */
const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modal = {
  background: "white",
  padding: "25px",
  borderRadius: "14px",
  width: "360px",
  textAlign: "center",
};

const payBtn = {
  width: "100%",
  padding: "10px",
  background: "#2d6a4f",
  color: "white",
  border: "none",
  borderRadius: "8px",
  marginBottom: "8px",
};

const cancelBtn = {
  width: "100%",
  padding: "10px",
  background: "#aaa",
  border: "none",
  borderRadius: "8px",
};
