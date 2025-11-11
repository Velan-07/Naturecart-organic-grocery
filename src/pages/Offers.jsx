import React from "react";
import { motion } from "framer-motion";
import { Leaf, Gift, Truck, Percent, ShoppingBag } from "lucide-react";

export default function Offers() {
  const offers = [
    {
      icon: <Percent className="text-emerald-600 w-8 h-8" />,
      title: "Flat 20% Off on Fresh Produce 🥦",
      desc: "Get 20% off on all fruits & vegetables — healthy eating made affordable!",
      code: "GREEN20",
      bg: "from-emerald-50 to-white",
    },
    {
      icon: <Truck className="text-emerald-600 w-8 h-8" />,
      title: "Free Delivery Above ₹799 🚚",
      desc: "Enjoy free, eco-friendly delivery for all orders above ₹799.",
      code: "FREESHIP",
      bg: "from-emerald-100 to-white",
    },
    {
      icon: <Gift className="text-emerald-600 w-8 h-8" />,
      title: "Buy 1 Get 1 on Organic Juices 🧃",
      desc: "Stay refreshed! Buy one organic juice and get another free — this week only!",
      code: "JUICEB1G1",
      bg: "from-green-50 to-white",
    },
    {
      icon: <ShoppingBag className="text-emerald-600 w-8 h-8" />,
      title: "Free Reusable Eco Bag 🌱",
      desc: "Get a free eco-friendly NatureCart jute bag on every order above ₹999.",
      code: "ECOBAG",
      bg: "from-emerald-50 to-white",
    },
    {
      icon: <Leaf className="text-emerald-600 w-8 h-8" />,
      title: "Loyalty Reward — 5% Cashback 💚",
      desc: "Earn 5% cashback in NaturePoints on every order for your next purchase.",
      code: "LOYAL5",
      bg: "from-emerald-100 to-white",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-12 px-6">
      <motion.div
        className="max-w-6xl mx-auto text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-extrabold text-emerald-700 mb-3">
          🌿 NatureCart Offers & Rewards
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Discover exciting discounts, eco-friendly rewards, and loyalty bonuses
          designed to make healthy living even more rewarding.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {offers.map((offer, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`rounded-2xl bg-gradient-to-br ${offer.bg} shadow-md p-6 text-center border border-emerald-100 hover:shadow-lg transition-all duration-300`}
          >
            <div className="flex justify-center mb-3">{offer.icon}</div>
            <h3 className="text-lg font-bold text-emerald-700 mb-2">
              {offer.title}
            </h3>
            <p className="text-slate-600 text-sm mb-3">{offer.desc}</p>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="inline-block mt-2 bg-emerald-600 text-white px-4 py-1.5 rounded-lg text-xs tracking-wider shadow-sm cursor-pointer hover:bg-emerald-700"
            >
              USE CODE: {offer.code}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
