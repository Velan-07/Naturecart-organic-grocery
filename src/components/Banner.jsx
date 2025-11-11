import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Tag, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Banner() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8 items-center">
      {/* 🪴 Text Section */}
      <motion.div
        className="md:col-span-2 bg-gradient-to-r from-emerald-50 to-white rounded-2xl p-10 flex flex-col justify-center shadow-sm"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          Fresh organic produce <br className="hidden md:block" /> delivered to
          your door 🍃
        </h1>

        <p className="mt-4 text-slate-600 text-lg">
          Handpicked, locally sourced, and shipped within 24 hours.
          Try our seasonal boxes and eco essentials.
        </p>

        {/* 🌟 Animated Buttons */}
        <div className="mt-6 flex flex-wrap gap-4">
          {/* 🟢 Contact Us Button */}
          <motion.div
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-xl shadow-md transition-all hover:from-emerald-600 hover:to-emerald-700"
            >
              <PhoneCall size={18} />
              Contact Us
            </Link>
          </motion.div>

          {/* 🛍️ See Offers Button */}
          <motion.div
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <Link
              to="/offers"
              className="flex items-center gap-2 text-emerald-700 border border-emerald-300 px-6 py-3 rounded-xl bg-white transition-all hover:bg-emerald-100 hover:text-emerald-800 shadow-sm"
            >
              <Tag size={18} />
              See Offers
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* 🌿 Image Section */}
      <motion.div
        className="hidden md:block"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.img
          src="https://tse4.mm.bing.net/th/id/OIP.xOTNfBdOgiPNDHUptTL1UQHaDF?pid=Api&P=0&h=180"
          alt="fresh produce"
          className="w-full h-64 object-cover rounded-2xl shadow-md"
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 150 }}
        />
      </motion.div>
    </section>
  );
}
