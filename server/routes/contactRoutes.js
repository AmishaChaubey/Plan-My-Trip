const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Message sent" });
  } catch (err) {
    res.status(500).json({ message: "Message failed", error: err.message });
  }
});

module.exports = router;
