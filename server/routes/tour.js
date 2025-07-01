const express = require("express");
const router = express.Router();
const tours = require("../data/tours.json"); // static tour list

router.get("/search", (req, res) => {
  const { from ="", to = "", date = "" } = req.query;

  const filtered = tours.filter(tour =>
    tour.from.toLowerCase().includes(from.toLowerCase()) &&
    tour.to.toLowerCase().includes(to.toLowerCase())
  );

  res.json(filtered);
});

router.get("/:id", (req, res) => {
  const tour = tours.find(t => t._id === req.params.id);
  if (tour) {
    res.json(tour);
  } else {
    res.status(404).json({ message: "Tour not found" });
  }
});

module.exports = router;
