import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { Menu, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Blog", href: "/blog" },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="flex h-20 w-full items-center px-4 md:px-6 bg-white shadow-sm relative z-50"
        >
            <Link to="/" className="mr-6 flex items-center gap-2">
                <img src="/Globevista.png" alt="GlobeVista Logo" className="h-15 w-15 rounded-full" />
                <span className="text-xl font-bold text-blue-600">GlobeVista</span>
                <span className="text-xs text-gray-500">Explore World</span>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="ml-auto hidden lg:flex gap-6">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.href}
                        className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>

            {/* Book Now Button */}
            <div className="ml-auto lg:ml-6 hidden lg:block">
                <Link
                    to="#"
                    className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md flex items-center text-sm"
                >
                    Book Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden ml-auto text-gray-700 hover:text-blue-600"
            >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
            </button>

            {/* Mobile Slide Menu */}
            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-white border-t shadow-md p-6 flex flex-col gap-4 lg:hidden">
                    <Link to="/" className="flex items-center gap-2 mb-4">
                        <img src="/Globevista.png" alt="GlobeVista Logo" className="h-8 w-8 rounded-full" />
                        <span className="text-xl font-bold text-blue-600">GlobeVista</span>
                        <span className="text-xs text-gray-500">Explore World</span>
                    </Link>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-lg font-semibold text-gray-800 hover:text-blue-600"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="#"
                        className="mt-4 bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md flex items-center w-fit"
                    >
                        Book Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            )}
        </motion.header>
    );
}
