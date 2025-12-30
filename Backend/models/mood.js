const mongoose = require("mongoose");

const MoodSchema = new mongoose.Schema({
  userId: String,
  stress: Number,
  energy: Number,
  sleep: Number,
  focus: Number,
  emoji: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Mood", MoodSchema);
