// @ts-nocheck
import { useState } from "react";

export default function BookSessionModal({ doctor, onClose }) {
  const [selectedTime, setSelectedTime] = useState("");

  // generate 30‑minute slots
  const generateSlots = (start, end) => {
    const slots = [];
    let [sh, sm] = start.split(":").map(Number);
    let [eh, em] = end.split(":").map(Number);

    let current = sh * 60 + sm;
    const endTime = eh * 60 + em;

    while (current + 30 <= endTime) {
      const h = Math.floor(current / 60);
      const m = current % 60;
      slots.push(
        `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`
      );
      current += 30;
    }
    return slots;
  };

  const timeSlots = generateSlots(
    doctor.availableFrom,
    doctor.availableTo
  );

  const confirmBooking = () => {
    if (!selectedTime) {
      alert("Please select a time slot");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    const booking = {
      doctorName: doctor.name,
      role: doctor.role,
      specialty: doctor.specialty,
      date: new Date().toLocaleDateString(),
      time: selectedTime,
      meetLink: doctor.meetLink,
      email: user.email, // 🔥 THIS LINE FIXES PROFILE
    };


    const existing =
      JSON.parse(localStorage.getItem("bookings")) || [];

    localStorage.setItem(
      "bookings",
      JSON.stringify([...existing, booking])
    );

    alert("Session booked successfully ✅");
    onClose();
  };

  return (
    <div style={overlay}>
      <div style={modal}>
        <h3>{doctor.name}</h3>
        <p>{doctor.role}</p>
        <p>{doctor.specialty}</p>

        <p>
          Available: {doctor.availableFrom} – {doctor.availableTo}
        </p>

        {/* ✅ STRICT TIME SLOT SELECTION */}
        <select
          style={select}
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          <option value="">Select a time slot</option>
          {timeSlots.map((t, i) => (
            <option key={i} value={t}>
              {t}
            </option>
          ))}
        </select>

        <button style={btn} onClick={confirmBooking}>
          Confirm Booking
        </button>

        <button style={cancelBtn} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
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

const select = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  borderRadius: "8px",
};

const btn = {
  width: "100%",
  padding: "10px",
  background: "#2d6a4f",
  color: "white",
  border: "none",
  borderRadius: "8px",
  marginTop: "15px",
};

const cancelBtn = {
  width: "100%",
  padding: "10px",
  background: "#aaa",
  border: "none",
  borderRadius: "8px",
  marginTop: "8px",
};
