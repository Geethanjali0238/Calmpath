const mongoose = require("mongoose");

const TherapistSchema = new mongoose.Schema({
  name: String,
  qualification: String,
  availableSlots: [String]
});

module.exports = mongoose.model("Therapist", TherapistSchema);
