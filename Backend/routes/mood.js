const express = require("express");
const Mood = require("../models/mood");

const router = express.Router();

router.post("/add", async (req, res) => {
  const mood = new Mood(req.body);
  await mood.save();
  res.json({ message: "Mood saved" });
});

router.get("/:userId", async (req, res) => {
  const moods = await Mood.find({ userId: req.params.userId });
  res.json(moods);
});

module.exports = router;
