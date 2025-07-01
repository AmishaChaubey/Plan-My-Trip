// import { Home } from "lucide-react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import BookingsPage from "./pages/Booking";
import BookingSuccess from "./pages/BookingSuccess";
import About from "./pages/About";
import Blog from "./pages/Blog";
// import Blog from "./pages/Blog";
// import Reviews from "./pages/Reviews";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking/:tourId" element={<BookingsPage />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/blog" element={<Blog />} />
        <Route path="/reviews" element={<Reviews />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
