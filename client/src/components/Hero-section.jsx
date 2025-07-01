import React, { useState } from "react";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { CalendarDays, Search, ArrowRight } from "lucide-react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";

const locations = [
    "New York", "London", "Dubai", "Paris", "Tokyo",
    "Sydney", "Singapore", "Rome", "Bangkok", "Istanbul"
];

export default function HeroSection() {
    const [date, setDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [fromSuggestions, setFromSuggestions] = useState([]);
    const [toSuggestions, setToSuggestions] = useState([]);
    const navigate = useNavigate();

    const filterSuggestions = (value) => {
        return locations.filter((loc) =>
            loc.toLowerCase().includes(value.toLowerCase())
        );
    };

    const handleFromChange = (e) => {
        const value = e.target.value;
        setFrom(value);
        setFromSuggestions(value ? filterSuggestions(value) : locations);
    };

    const handleToChange = (e) => {
        const value = e.target.value;
        setTo(value);
        setToSuggestions(value ? filterSuggestions(value) : locations);
    };

    const handleFromFocus = () => {
        setFromSuggestions(locations);
    };

    const handleToFocus = () => {
        setToSuggestions(locations);
    };

    const handleFromSelect = (val) => {
        setFrom(val);
        setFromSuggestions([]);
    };

    const handleToSelect = (val) => {
        setTo(val);
        setToSuggestions([]);
    };

    const handleSearch = async () => {
        try {
            const searchDate = date ? new Date(date).toISOString() : "";
            const response = await fetch(
                `http://localhost:5000/api/tours/search?from=${from}&to=${to}&date=${searchDate}`
            );
            const data = await response.json();

            if (data.length > 0) {
                const tourId = data[0]._id;
                navigate(`/booking/${tourId}`);
            } else {
                alert("No tours found for the selected criteria.");
            }
        } catch (error) {
            console.error("Search error:", error);
            alert("Something went wrong while searching.");
        }
    };

    return (
        <section className="relative w-full h-[600px] md:h-[700px] overflow-visible">
            <img
                src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop"
                alt="Natural Wonder"
                className="absolute w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-black/30 z-10"></div>

            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-lg md:text-xl font-serif italic mb-4"
                >
                    Get unforgettable pleasure with us
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
                >
                    Natural Wonder <br /> Of The World
                </motion.h1>

                <div className="flex flex-wrap gap-4 justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <button className="bg-blue-600 hover:bg-blue-800 text-white px-8 py-3 text-lg rounded-full flex items-center gap-2">
                            Explore Tours <ArrowRight size={20} />
                        </button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                    >
                        <button className="border border-white text-white px-8 py-3 text-lg rounded-full hover:bg-white/20 flex items-center gap-2">
                            Our Services <ArrowRight size={20} />
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Search Form */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-30 left-1/2 -translate-x-1/2 translate-y-1/2 z-100 bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-4 w-[90%] max-w-4xl"
            >
                {/* From Input */}
                <div className="relative w-full md:w-auto">
                    <input
                        type="text"
                        placeholder="From"
                        className="w-full px-4 py-2 border rounded-md"
                        value={from}
                        onChange={handleFromChange}
                        onFocus={handleFromFocus}
                    />
                    {fromSuggestions.length > 0 && (
                        <ul className="absolute z-50 w-full bg-white border rounded shadow mt-1 max-h-40 overflow-y-auto">
                            {fromSuggestions.map((item, i) => (
                                <li
                                    key={i}
                                    onClick={() => handleFromSelect(item)}
                                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* To Input */}
                <div className="relative w-full md:w-auto">
                    <input
                        type="text"
                        placeholder="To"
                        className="w-full px-4 py-2 border rounded-md"
                        value={to}
                        onChange={handleToChange}
                        onFocus={handleToFocus}
                    />
                    {toSuggestions.length > 0 && (
                        <ul className="absolute z-50 w-full bg-white border rounded shadow mt-1 max-h-40 overflow-y-auto">
                            {toSuggestions.map((item, i) => (
                                <li
                                    key={i}
                                    onClick={() => handleToSelect(item)}
                                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Date Picker */}
                <div className="relative w-full md:w-auto">
                    <button
                        onClick={() => setShowCalendar(!showCalendar)}
                        className="w-full px-4 py-2 border rounded-md flex items-center justify-start text-left text-gray-700"
                    >
                        <CalendarDays className="mr-2 h-5 w-5" />
                        {date ? format(date, "PPP") : "Pick a date"}
                    </button>
                    {showCalendar && (
                        <div className="absolute top-full mt-2 z-50 bg-white border rounded-md p-2 shadow-lg">
                            <Calendar
                                onChange={(d) => {
                                    setDate(d);
                                    setShowCalendar(false);
                                }}
                                value={date}
                            />
                        </div>
                    )}
                </div>

                {/* Search Button */}
                <button
                    onClick={handleSearch}
                    className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-md flex items-center gap-2 w-full md:w-auto"
                >
                    <Search className="h-5 w-5" /> Search
                </button>
            </motion.div>
        </section>
    );
}
