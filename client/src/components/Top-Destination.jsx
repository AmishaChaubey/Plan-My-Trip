import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const destinations = [
    { name: "Maldives", image: "https://cdn.pixabay.com/photo/2018/12/17/08/20/sea-island-3879941_1280.jpg", listings: 25 },
    { name: "Greece", image: "https://cdn.pixabay.com/photo/2023/10/12/14/41/town-8310950_1280.jpg", listings: 18 },
    { name: "London", image: "https://cdn.pixabay.com/photo/2021/08/12/05/19/cathedral-6539937_1280.jpg", listings: 30 },
    { name: "Switzerland", image: "https://cdn.pixabay.com/photo/2022/04/12/18/00/europe-7128531_1280.jpg", listings: 22 },
    { name: "Sydney", image: "https://cdn.pixabay.com/photo/2017/11/02/10/31/sydney-2910646_1280.jpg", listings: 15 },
];

export default function TopDestination() {
    const [activeTab, setActiveTab] = useState("Maldives");
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -300 : 300,
                behavior: "smooth",
            });
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-lg font-serif italic text-gray-500 text-center md:text-left"
                >
                    Top Destination
                </motion.p>

                <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 md:mb-0"
                    >
                        Top Destination
                    </motion.h2>

                    <div className="flex flex-wrap gap-2">
                        {destinations.map((dest) => (
                            <button
                                key={dest.name}
                                onClick={() => setActiveTab(dest.name)}
                                className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${activeTab === dest.name
                                    ? "bg-blue-600 text-white"
                                    : "border-blue-600 text-blue-600 hover:bg-blue-50"
                                    }`}
                            >
                                {dest.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="relative overflow-hidden">
                    {/* Arrow Buttons */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-blue-100 transition hidden md:block"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-blue-100 transition hidden md:block"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Cards Scroll Area */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 gap-4 scroll-smooth scrollbar-hide"
                    >
                        {destinations.map((dest, index) => (
                            <motion.div
                                key={dest.name}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex-shrink-0 w-72 md:w-80 lg:w-96 snap-center"
                            >
                                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                                    <img
                                        src={dest.image || "/placeholder.svg"}
                                        alt={dest.name}
                                        className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h3 className="text-2xl font-bold">{dest.name}</h3>
                                        <p className="text-sm">{dest.listings} Listing</p>
                                        <a
                                            href="#"
                                            className="inline-block mt-2 bg-white text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
                                        >
                                            View All
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
