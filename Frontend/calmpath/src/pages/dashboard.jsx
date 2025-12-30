// @ts-nocheck
import React from "react";

import { useState } from "react";
import Layout from "../components/Layout";
import { doctors } from "../data/doctors";
import BookSessionModal from "../components/BookSessionModal";
import PaymentModal from "../components/PaymentModal";

export default function Dashboard() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [pendingDoctor, setPendingDoctor] = useState(null); // 🔥 NEW
  const [showPayment, setShowPayment] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const allBookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  const userBookings = allBookings.filter(
    (b) => b.email === user.email
  );

  const handleBookClick = (doctor) => {
    // 🚫 From 4th booking → payment first
    if (userBookings.length >= 3) {
      setPendingDoctor(doctor); // 🔥 remember doctor
      setShowPayment(true);
    } else {
      setSelectedDoctor(doctor);
    }
  };

  return (
    <Layout>
      <h2 style={{ color: "#2d6a4f" }}>
        Available Therapists
      </h2>

      <div style={grid}>
        {doctors.map((doc) => (
          <div key={doc.id} style={card}>
            <h3>{doc.name}</h3>
            <p>{doc.role}</p>
            <p>{doc.specialty}</p>
            <p>
              Available: {doc.availableFrom} – {doc.availableTo}
            </p>

            <button
              style={btn}
              onClick={() => handleBookClick(doc)}
            >
              Book Session
            </button>
          </div>
        ))}
      </div>

      {/* 💳 PAYMENT MODAL */}
      {showPayment && (
        <PaymentModal
          onSuccess={() => {
            setShowPayment(false);
            setSelectedDoctor(pendingDoctor); // 🔥 UNLOCK BOOKING
            setPendingDoctor(null);
          }}
          onClose={() => {
            setShowPayment(false);
            setPendingDoctor(null);
          }}
        />
      )}

      {/* 📅 BOOKING MODAL */}
      {selectedDoctor && (
        <BookSessionModal
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
        />
      )}
    </Layout>
  );
}

/* styles */
const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "20px",
};

const card = {
  background: "#f4f9f6",
  padding: "20px",
  borderRadius: "14px",
};

const btn = {
  marginTop: "10px",
  padding: "8px",
  width: "100%",
  background: "#2d6a4f",
  color: "white",
  border: "none",
  borderRadius: "8px",
};
