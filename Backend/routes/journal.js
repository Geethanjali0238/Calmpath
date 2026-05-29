const express = require("express");
const router = express.Router();
const Journal = require("../models/Journal");

/* SAVE JOURNAL ENTRY */
router.post("/save", async (req, res) => {
  try {
    const { userId, text } = req.body;

    const entry = new Journal({
      userId,
      text
    });

    await entry.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

/* GET JOURNAL HISTORY */
router.get("/:userId", async (req, res) => {
  try {
    const entries = await Journal.find({ userId: req.params.userId })
      .sort({ date: -1 });

    res.json(entries);
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

module.exports = router;
