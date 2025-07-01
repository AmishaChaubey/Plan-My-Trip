import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
    {
        id: 1,
        title: "Top 10 Travel Destinations for 2025",
        image: "https://images.unsplash.com/photo-1551279076-6887dee32c7e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        excerpt: "Explore our expert list of must-visit places for 2025, featuring beaches, cities, and hidden gems.",
        date: "June 25, 2025",
    },
    {
        id: 2,
        title: "Travel Tips for First-Time Flyers",
        image: "https://images.unsplash.com/photo-1600714480856-dc99b28892eb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        excerpt: "First time on a plane? Here's what you need to know before your takeoff.",
        date: "June 15, 2025",
    },
    {
        id: 3,
        title: "How to Pack Light for Long Trips",
        image: "https://images.unsplash.com/photo-1648737967037-96967e9151b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        excerpt: "Packing efficiently can make or break your trip. Here’s how to do it right.",
        date: "May 30, 2025",
    },
];

export default function Blog() {
    return (
        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-center mb-10 text-blue-700"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Travel Blog
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <motion.div
                            key={post.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                            <div className="p-5">
                                <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                                <p className="text-gray-600 text-sm">{post.excerpt}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
