import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BookingSuccess() {
    return (
        <div>

            <main style={{ textAlign: "center", padding: "4rem" }}>
                <h1 style={{ fontSize: "2.5rem", color: "green" }}>🎉 Booking Confirmed!</h1>
                <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
                    Thank you for booking with us. We hope you enjoy your tour!
                </p>
                <Link to="/" style={{ marginTop: "2rem", display: "inline-block", fontSize: "1rem", textDecoration: "none", color: "#007bff" }}>
                    ← Back to Home
                </Link>
            </main>
            <Footer />
        </div>
    );
}
