const express = require("express");
const router = express.Router();
const User = require("../models/User");

/**
 * LOGIN / SIGNUP (MVP)
 * If user exists → login
 * Else → create new user
 */
router.post("/login", async (req, res) => {
  try {
    const { name, password } = req.body;

    let user = await User.findOne({ name });

    if (!user) {
      user = new User({ name, password });
      await user.save();
    }

    res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Auth error" });
  }
});

module.exports = router;
