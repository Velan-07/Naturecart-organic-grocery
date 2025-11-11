import React from "react";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function Preloader() {
  return (
    <div
      id="preloader"
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-emerald-50 to-white z-50"
    >
      {/* 🌿 Animated Leaf Icon */}
      <motion.div
        initial={{ rotate: 0, scale: 0.8 }}
        animate={{
          rotate: [0, 20, -20, 0],
          scale: [0.8, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-tr from-emerald-100 to-emerald-200 p-4 rounded-full shadow-md"
      >
        <Leaf className="w-10 h-10 text-emerald-600" />
      </motion.div>

      {/* 🌱 Loading Text */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.8, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="mt-6 text-lg font-semibold text-emerald-700 tracking-wide"
      >
        Loading NatureCart...
      </motion.h3>

      {/* ✨ Optional Dots Animation */}
      <motion.div
        className="flex mt-3 gap-1"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.25, repeat: Infinity },
          },
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-2 h-2 bg-emerald-500 rounded-full"
            variants={{
              hidden: { opacity: 0.3, y: 0 },
              visible: {
                opacity: [0.3, 1, 0.3],
                y: [-2, 2, -2],
                transition: { duration: 0.8, repeat: Infinity },
              },
            }}
          ></motion.span>
        ))}
      </motion.div>
    </div>
  );
}
