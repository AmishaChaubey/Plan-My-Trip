import React, { useState } from "react";

export default function TestimonialForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        rating: 0, // ⭐️ New field
        image: ""
    });

    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRatingClick = (value) => {
        setForm({ ...form, rating: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const res = await fetch("http://localhost:5000/api/testimonials", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setSuccess(true);
                setForm({ name: "", email: "", message: "", rating: 0, image: "" });
            } else {
                const error = await res.json();
                alert(error.message || "Submission failed");
            }
        } catch (err) {
            alert("Something went wrong.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-4 mt-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Leave a Testimonial</h2>
            {success && (
                <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
                    Thank you for your feedback!
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label>Name:</label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full border px-3 py-2 rounded"
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full border px-3 py-2 rounded"
                    />
                </div>
                <div>
                    <label>Image:</label>
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL (optional)"
                        value={form.image}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full border px-3 py-2 rounded"
                    />
                </div>

                <div>
                    <label>Rating:</label>
                    <div className="flex space-x-1 mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                onClick={() => handleRatingClick(star)}
                                className={`cursor-pointer text-2xl ${form.rating >= star ? "text-yellow-400" : "text-gray-400"
                                    }`}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={submitting}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    {submitting ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
}
