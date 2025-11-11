import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Leaf, CheckCircle } from "lucide-react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-16 px-6 flex flex-col items-center justify-center">
            {/* 🌿 Title Section */}
            <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-700 mb-3">
                    Get in Touch 🌱
                </h1>
                <p className="text-slate-600 text-lg max-w-xl mx-auto">
                    Have questions about our organic products, delivery, or partnerships?
                    We’d love to hear from you — NatureCart is always happy to connect!
                </p>
            </motion.div>

            {/* 📨 Contact Content */}
            <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-start">
                {/* 💬 Contact Form */}
                <motion.form
                    className="bg-white rounded-2xl shadow-xl p-8"
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    onSubmit={handleSubmit}
                >
                    <h2 className="text-2xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
                        <Leaf size={22} /> Send Us a Message
                    </h2>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-400 outline-none transition-all"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-400 outline-none transition-all"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea
                            rows="4"
                            placeholder="Write your message here..."
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-400 outline-none transition-all resize-none"
                            required
                        ></textarea>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 250 }}
                        className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold py-3 rounded-lg shadow-md hover:from-emerald-600 hover:to-emerald-700 transition-all"
                    >
                        Send Message
                    </motion.button>

                    {/* ✅ Success Popup Animation */}
                    <AnimatePresence>
                        {submitted && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="mt-5 flex items-center gap-2 bg-emerald-100 text-emerald-700 p-3 rounded-lg shadow-sm"
                            >
                                <CheckCircle size={20} />
                                <p>Message sent successfully!</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.form>

                {/* 📍 Contact Info Section */}
                <motion.div
                    className="bg-emerald-600 text-white rounded-2xl p-8 shadow-lg flex flex-col justify-center"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <MapPin size={22} /> Contact Details
                    </h2>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Phone size={20} />
                            <p className="text-lg">+91 74183 53026</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail size={20} />
                            <p className="text-lg">velan.stack@gmail.com</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <MapPin size={20} />
                            <p className="text-lg leading-snug">
                                Electronic City, Bangalore,
                                <br /> Karnataka, India
                            </p>
                        </div>
                    </div>

                    {/* 🌐 Social Icons */}
                    <div className="mt-8 flex gap-5 text-2xl">
                        <motion.a
                            href="https://wa.me/917418353026"
                            target="_blank"
                            whileHover={{ scale: 1.15, y: -3 }}
                            className="hover:text-emerald-100"
                        >
                            <i className="bi bi-whatsapp"></i>
                        </motion.a>

                        <motion.a
                            href="https://www.instagram.com/king_of_haters_07___?igsh=MTNkdW9xZHE2amxqdA=="
                            target="_blank"
                            whileHover={{ scale: 1.15, y: -3 }}
                            className="hover:text-emerald-100"
                        >
                            <i className="bi bi-instagram"></i>
                        </motion.a>

                        <motion.a
                            href="https://www.linkedin.com/in/velan-fsd"
                            target="_blank"
                            whileHover={{ scale: 1.15, y: -3 }}
                            className="hover:text-emerald-100"
                        >
                            <i className="bi bi-linkedin"></i>
                        </motion.a>

                        <motion.a
                            href="https://github.com/Velan-07"
                            target="_blank"
                            whileHover={{ scale: 1.15, y: -3 }}
                            className="hover:text-emerald-100"
                        >
                            <i className="bi bi-github"></i>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
