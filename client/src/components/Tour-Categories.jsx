import React from "react";
import { motion } from "framer-motion";

const categories = [
    { name: "Cruises", image: "https://images.unsplash.com/photo-1559599746-8823b38544c6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Hiking", image: "https://images.unsplash.com/photo-1568454537842-d933259bb258?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Airbirds", image: "https://images.unsplash.com/photo-1545358232-f348422c5b4d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Wildlife", image: "https://images.unsplash.com/photo-1496196614460-48988a57fccf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Walking", image: "https://images.unsplash.com/photo-1682695795557-17447f921f79?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

export default function TourCategories() {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.3 },
        },
    };

    return (
        <section className="py-20 bg-gray-50 ">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-lg font-serif italic text-gray-500"
                >
                    Wonderful Place For You
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-gray-800 mb-12"
                >
                    Tour Categories
                </motion.h2>

                <div className="flex justify-center flex-wrap gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative w-48 h-64 rounded-lg shadow-lg overflow-hidden bg-white p-2 flex flex-col items-center justify-start"
                        >
                            <img
                                src={category.image || "/placeholder.svg"}
                                alt={category.name}
                                className="w-full h-32 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">
                                {category.name}
                            </h3>
                            <a
                                href="#"
                                className="text-sm text-blue-600 hover:underline mt-1"
                            >
                                Read More
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
