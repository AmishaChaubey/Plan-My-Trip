import React from "react";
// import BookingForm from "../components/BookingForm";
// import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero-section";
import TourCategories from "../components/Tour-Categories";
import TopDestination from "../components/Top-Destination";
import PopularTours from "../components/Popular-Tour";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import TourGuides from "../components/Tour-Guides";
import TestimonialForm from "./TestimonialForm";

const Home = () => (
    <div className="min-h-screen flex flex-col">
        <main className="flex-1">
            <HeroSection />
            <TourCategories />
            <TopDestination />
            <PopularTours />
            <TourGuides />
            <TestimonialForm />
            <Testimonials />
            <Footer />
        </main>
    </div>
);

export default Home;
