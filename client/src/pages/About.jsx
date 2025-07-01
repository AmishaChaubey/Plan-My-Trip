import React from "react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-center mb-8 text-blue-700"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    About GlobeVista
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <motion.img
                        src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="About GlobeVista"
                        className="rounded-lg shadow-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    />

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Explore The World With Us</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            At GlobeVista, our mission is to help travelers discover the beauty and diversity of destinations across the globe.
                            Whether you’re planning a romantic escape, an adventurous trip, or a family holiday, we’ve got you covered.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our dedicated team of travel experts ensures that each tour is well-planned, safe, and filled with unforgettable experiences.
                            Let us take you on a journey of a lifetime.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
