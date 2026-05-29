const mongoose = require("mongoose");

const JournalSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  text: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Journal", JournalSchema);
