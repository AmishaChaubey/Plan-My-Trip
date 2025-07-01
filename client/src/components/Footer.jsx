import React from "react";
import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Youtube,
    Phone,
    Mail,
    MapPin,
    ArrowUp,
    ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const paymentIcons = [
        {
            label: "Visa",
            src: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
        },
        {
            label: "MasterCard",
            src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
        },
        {
            label: "PayPal",
            src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
        },
        {
            label: "Apple Pay",
            src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
        },
    ];

    return (
        <footer className="bg-white pt-20 pb-8 relative">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {/* Logo and Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-start"
                >
                    <a href="/" className="flex items-center gap-2 mb-4">
                        <img
                            src="/Globevista.png"
                            alt="Globevista Logo"
                            className="h-15 w-15 rounded-full"
                        />
                        <span className="text-xl font-bold text-blue-600">GlobeVista</span>
                        <span className="text-xs text-gray-500">Explore World</span>
                    </a>
                    <p className="text-sm text-gray-500 mb-4">
                        Rapidiously myocoordinate cross-platform intellectual capital
                        model. Appropriately create interactive infrastructures.
                    </p>
                    <div className="flex gap-3">
                        {[Facebook, Twitter, Linkedin, Instagram, Youtube].map(
                            (Icon, i) => (
                                <a key={i} href="#" className="text-blue-600 hover:text-blue-800">
                                    <Icon className="h-5 w-5" />
                                </a>
                            )
                        )}
                    </div>
                </motion.div>

                {/* Useful Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                >
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Useful Link
                    </h3>
                    <ul className="space-y-2 text-gray-500 text-sm">
                        {[
                            { label: "Home", href: "/" },
                            { label: "About Us", href: "/about" },
                            { label: "Our Services", href: "#" },
                            { label: "Terms of Service", href: "#" },
                            { label: "Tour Booking Now", href: "#" },
                        ].map((item, i) => (
                            <li key={i}>
                                <a
                                    href={item.href}
                                    className="hover:text-blue-600 flex items-center"
                                >
                                    <ArrowRight className="h-4 w-4 mr-2" /> {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Get In Touch
                    </h3>
                    <ul className="space-y-2 text-gray-500 text-sm">
                        <li className="flex items-center">
                            <Phone className="h-4 w-4 mr-2" /> +01 234 567 890
                        </li>
                        <li className="flex items-center">
                            <Phone className="h-4 w-4 mr-2" /> +09 876 543 210
                        </li>
                        <li className="flex items-center">
                            <Mail className="h-4 w-4 mr-2" /> mailinfo00@realar.com
                        </li>
                        <li className="flex items-center">
                            <Mail className="h-4 w-4 mr-2" /> support24@realar.com
                        </li>
                        <li className="flex items-start">
                            <MapPin className="h-4 w-4 mr-2 mt-1" /> 789 Inner Lane, Holy park,
                            California, USA
                        </li>
                    </ul>
                </motion.div>
            </div>

            {/* Scroll To Top Button */}
            <div className="absolute bottom-4 right-4">
                <button
                    onClick={scrollToTop}
                    className="bg-blue-600 hover:bg-blue-800 text-white rounded-full p-3 shadow-lg"
                >
                    <ArrowUp className="h-6 w-6" />
                    <span className="sr-only">Scroll to top</span>
                </button>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200 mt-12 pt-4  text-center text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center px-10">
                <p>&copy; {new Date().getFullYear()} GlobeVista. All rights reserved.</p>
                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                    <span>We Accept</span>
                    {paymentIcons.map((icon, i) => (
                        <img
                            key={i}
                            src={icon.src}
                            alt={icon.label}
                            title={icon.label}
                            className="h-5 w-auto object-contain"
                        />
                    ))}
                </div>
            </div>
        </footer>
    );
}
