import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Your message has been sent successfully.");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                const errorData = await response.json();
                alert(errorData.message || "Failed to send message.");
            }
        } catch (error) {
            console.error("Error submitting contact form:", error);
            alert("An unexpected error occurred. Please ensure the backend server is running.");
        } finally {
            setLoading(false);
        }
    };

    return (

        <div className="min-h-screen py-20 px-4 bg-gray-100">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800"
            >
                Contact Us
            </motion.h1>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white p-6 shadow-lg rounded-xl"
                >
                    <h2 className="text-2xl font-bold text-blue-600 mb-6">Get in Touch</h2>

                    <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Our Address</h3>
                            <p className="text-gray-600 text-sm">789 Inner Lane, Holy park, California, USA</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                            <Phone className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Call Us</h3>
                            <p className="text-gray-600 text-sm">+01 234 567 890</p>
                            <p className="text-gray-600 text-sm">+09 876 543 210</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                            <Mail className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Email Us</h3>
                            <p className="text-gray-600 text-sm">mailinfo00@realar.com</p>
                            <p className="text-gray-600 text-sm">support24@realar.com</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white p-6 shadow-lg rounded-xl"
                >
                    <h2 className="text-2xl font-bold text-blue-600 mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-1 font-medium text-gray-700">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full border px-4 py-2 rounded-md"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full border px-4 py-2 rounded-md"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-1 font-medium text-gray-700">Subject</label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full border px-4 py-2 rounded-md"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-1 font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full border px-4 py-2 rounded-md"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
