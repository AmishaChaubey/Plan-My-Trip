import React from "react";
import { Star, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const tours = [
    {
        name: "Greece Tour Package",
        image: "https://cdn.pixabay.com/photo/2018/05/09/01/00/greece-3384386_1280.jpg",
        rating: 4.8,
        price: 980.0,
        duration: "7 Days",
    },
    {
        name: "Italy Tour Package",
        image: "https://cdn.pixabay.com/photo/2017/08/24/19/35/town-2678058_1280.jpg",
        rating: 4.8,
        price: 890.0,
        duration: "7 Days",
    },
    {
        name: "Dubai Tour Package",
        image: "https://cdn.pixabay.com/photo/2017/08/10/16/11/burj-al-arab-2624317_1280.jpg",
        rating: 4.8,
        price: 870.0,
        duration: "7 Days",
    },
    {
        name: "Switzerland",
        image: "https://cdn.pixabay.com/photo/2024/02/14/14/57/mountains-8573646_1280.jpg",
        rating: 4.8,
        price: 980.0,
        duration: "7 Days",
    },
];

export default function PopularTours() {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-lg font-serif italic text-gray-500"
                >
                    Best Place For You
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-gray-800 mb-12"
                >
                    Most Popular Tour
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tours.map((tour, index) => (
                        <motion.div
                            key={tour.name}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden group"
                        >
                            <div className="relative h-60 overflow-hidden">
                                <img
                                    src={tour.image || "/placeholder.svg"}
                                    alt={tour.name}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6 text-left">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{tour.name}</h3>
                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                    <div className="flex items-center mr-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-4 w-4 ${i < Math.floor(tour.rating)
                                                    ? "fill-yellow-400 text-yellow-400"
                                                    : "text-gray-300"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span>({tour.rating} Rating)</span>
                                </div>
                                <div className="text-2xl font-bold text-blue-600 mb-4">
                                    ${tour.price.toFixed(2)}
                                    <span className="text-base font-normal text-gray-500">/Person</span>
                                </div>
                                <div className="flex items-center justify-between border-t pt-4">
                                    <div className="flex items-center text-gray-500 text-sm">
                                        <Clock className="h-4 w-4 mr-1" /> {tour.duration}
                                    </div>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center text-sm">
                                        Book Now <ArrowRight className="ml-1 h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
