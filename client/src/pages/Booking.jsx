import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BookingsPage() {
    const { tourId } = useParams();
    const navigate = useNavigate();
    const [tour, setTour] = useState(null);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTourDetails = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/tours/${tourId}`);
                if (!res.ok) throw new Error("Failed to fetch tour");
                const data = await res.json();
                setTour(data);
            } catch (err) {
                setError("Failed to load tour details.");
            } finally {
                setLoading(false);
            }
        };
        fetchTourDetails();
    }, [tourId]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        if (!tour || !tour._id || !tour.name) {
            alert("Tour information is missing. Please try again.");
            setSubmitting(false);
            return;
        }

        try {
            const res = await fetch("http://localhost:5000/api/bookings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, tourId: tour._id, tourName: tour.name }),
            });

            if (res.ok) {
                alert("Booking confirmed!");
                navigate("/booking-success");
            } else {
                const errData = await res.json();
                alert(errData.message || "Booking failed");
            }
        } catch (err) {
            alert("Unexpected error. Make sure backend is running.");
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) return <div><p className="text-center p-4">Loading tour...</p><Footer /></div>;
    if (error) return <div><p className="text-center text-red-500 p-4">{error}</p><Footer /></div>;
    if (!tour) return <div><p className="text-center text-gray-600 p-4">Tour not found</p><Footer /></div>;

    return (
        <div>

            <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-16">
                <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">Book Your Tour</h1>
                <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
                    <div className="flex-1">
                        <img
                            src={tour.image || "/placeholder.svg"}
                            alt={tour.name}
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{tour.name}</h2>
                        <p className="text-gray-700 mb-2">{tour.description}</p>
                        <p className="text-gray-600"><strong>Price:</strong> ${tour.price.toFixed(2)}</p>
                        <p className="text-gray-600"><strong>Duration:</strong> {tour.duration}</p>
                        <p className="text-gray-600"><strong>Rating:</strong> {tour.rating} Stars</p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex-1 bg-gray-100 p-6 rounded-md space-y-4">
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
                        >
                            {submitting ? "Submitting..." : "Confirm Booking"}
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}
