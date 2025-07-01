const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  image: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Testimonial", testimonialSchema);
