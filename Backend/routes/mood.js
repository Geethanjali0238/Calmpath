const express = require("express");
const router = express.Router();
const Mood = require("../models/Mood");

router.post("/save", async (req, res) => {
  const mood = new Mood(req.body);
  await mood.save();
  res.json({ success: true });
});

router.get("/:userId", async (req, res) => {
  const moods = await Mood.find({ userId: req.params.userId });
  res.json(moods);
});

module.exports = router;
