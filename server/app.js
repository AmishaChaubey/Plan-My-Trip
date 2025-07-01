const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bookingRoutes = require('./routes/bookingRoutes');
const contactRoutes = require('./routes/contactRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const tourRoutes = require('./routes/tour');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// ✅ use routes
app.use('/api/bookings', bookingRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/tours', tourRoutes); 

app.get('/', (req, res) => {
  res.send('Tour and Travel API running...');
});

module.exports = app;
