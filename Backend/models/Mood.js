const mongoose = require("mongoose");

const MoodSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  stress: Number,
  sleep: Number,
  energy: Number,
  focus: Number,
  emoji: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Mood", MoodSchema);
