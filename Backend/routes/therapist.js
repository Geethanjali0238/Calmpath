const express = require("express");
const Therapist = require("../models/Therapist");

const router = express.Router();

router.get("/", async (req, res) => {
  const therapists = await Therapist.find();
  res.json(therapists);
});

module.exports = router;
