// models/Tour.js
const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  image: String,
  description: String,
  price: {
    type: Number,
    required: true,
  },
  duration: String,
  rating: {
    type: Number,
    default: 4.5,
  },
  availableDates: [Date],
}, { timestamps: true });

module.exports = mongoose.model("Tour", tourSchema);
