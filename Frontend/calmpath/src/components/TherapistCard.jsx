export default function TherapistCard({ therapist, onBook }) {
  return (
    <div style={card}>
      <h3>{therapist.name}</h3>
      <p style={role}>{therapist.role}</p>
      <p><b>Available:</b> {therapist.time}</p>

      <button style={btn} onClick={() => onBook(therapist.name)}>
        Book Session
      </button>
    </div>
  );
}

const card = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "14px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
};

const role = {
  color: "#40916c",
  fontWeight: "bold"
};

const btn = {
  marginTop: "15px",
  width: "100%",
  padding: "10px",
  backgroundColor: "#2d6a4f",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};
