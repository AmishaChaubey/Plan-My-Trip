const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// POST /api/bookings
router.post("/", async (req, res) => {
  const { tourId, tourName, name, email, phone } = req.body;

  // Basic validation
  if (!tourId || !tourName || !name || !email || !phone) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newBooking = new Booking({ tourId, tourName, name, email, phone });
    await newBooking.save();
    res.status(201).json({ message: "Booking successful", data: newBooking });
  } catch (err) {
    res.status(500).json({ message: "Booking failed", error: err.message });
  }
});

module.exports = router;
