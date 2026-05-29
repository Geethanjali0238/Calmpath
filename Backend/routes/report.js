const express = require("express");
const router = express.Router();

/**
 * USER FEEDBACK ON SESSION
 */
router.post("/feedback", async (req, res) => {
  const { userId, therapistName, rating, comment } = req.body;

  // In production → store in DB
  console.log("Feedback received:", {
    userId,
    therapistName,
    rating,
    comment
  });

  res.json({ success: true });
});

/**
 * THERAPIST REPORT SUBMISSION
 */
router.post("/submit", async (req, res) => {
  const { userId, reportText } = req.body;

  // In production → save securely
  console.log("Therapist report:", { userId, reportText });

  res.json({ success: true });
});

module.exports = router;
