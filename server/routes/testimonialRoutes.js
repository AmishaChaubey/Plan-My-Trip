
const express = require("express");
const router = express.Router();
const Testimonial = require("../models/Testimonial");

// POST testimonial
router.post("/", async (req, res) => {
  const { name, email, message, rating, image } = req.body;

  if (!name || !email || !message || !rating) {
    return res.status(400).json({ message: "All fields are required including rating" });
  }

  try {
    const newTestimonial = new Testimonial({ name, email, message, rating, image });
    await newTestimonial.save();
    res.status(201).json({ message: "Testimonial submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Submission failed", error: error.message });
  }
});

// GET all testimonials
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 }); // latest first
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch testimonials" });
  }
});

module.exports = router;
