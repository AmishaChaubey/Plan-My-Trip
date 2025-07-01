import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

// Replace these with your actual Avatar and Card components or create them
const Avatar = ({ src, alt }) => (
    <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-blue-600">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
);

const Card = ({ children }) => (
    <div className="p-6 flex flex-col items-center text-center rounded-xl shadow-lg bg-white h-full">
        {children}
    </div>
);

const guides = [
    { name: "Jacob Jones", role: "Tourist Guide", avatar: "https://cdn.pixabay.com/photo/2024/03/23/17/16/man-8651694_1280.jpg" },
    { name: "Jane Cooper", role: "Tourist Guide", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Guy Hawkins", role: "Tourist Guide", avatar: "https://images.unsplash.com/photo-1722322426803-101270837197?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Jenny Wilson", role: "Tourist Guide", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

export default function TourGuides() {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-lg font-serif italic text-gray-500"
                >
                    Meet with Guide
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-gray-800 mb-12"
                >
                    Tour Guide
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {guides.map((guide, index) => (
                        <motion.div
                            key={guide.name}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card>
                                <Avatar src={guide.avatar || "/placeholder.svg"} alt={guide.name} />
                                <h3 className="text-xl font-semibold text-gray-800">{guide.name}</h3>
                                <p className="text-sm text-gray-500 mb-4">{guide.role}</p>
                                <div className="flex gap-3">
                                    <a href="#" className="text-blue-600 hover:text-blue-800">
                                        <Facebook className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-blue-600 hover:text-blue-800">
                                        <Twitter className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-blue-600 hover:text-blue-800">
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-blue-600 hover:text-blue-800">
                                        <Instagram className="h-5 w-5" />
                                    </a>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
