
import React, { useEffect, useRef, useState } from "react";

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);
    const scrollRef = useRef(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/testimonials");
                const data = await res.json();
                setTestimonials(data);
            } catch (err) {
                console.error("Error loading testimonials", err);
            }
        };
        fetchTestimonials();
    }, []);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    return (
        <section className="bg-gray-100 py-10 px-4 relative">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">What Our Travelers Say</h2>

                {/* Scrollable Carousel */}
                <div className="relative">
                    {/* Scroll buttons */}
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow rounded-full p-2 z-10"
                    >
                        ◀
                    </button>
                    <button
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow rounded-full p-2 z-10"
                    >
                        ▶
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-4 px-8 scroll-smooth no-scrollbar"
                    >
                        {testimonials.map((t) => (
                            <div
                                key={t._id}
                                className="min-w-[300px] bg-white p-6 rounded-lg shadow hover:shadow-md transition flex-shrink-0 text-center"
                            >
                                <img
                                    src={
                                        t.image?.trim() !== ""
                                            ? t.image
                                            : "https://via.placeholder.com/100x100.png?text=User"
                                    }
                                    alt={t.name}
                                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border"
                                />
                                <p className="text-gray-700 mb-4">"{t.message}"</p>
                                <div className="text-yellow-400 text-lg mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className={i < t.rating ? "text-yellow-400" : "text-gray-300"}>
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <p className="font-semibold text-gray-800">— {t.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
