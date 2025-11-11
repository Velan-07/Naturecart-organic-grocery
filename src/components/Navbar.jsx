import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [glow, setGlow] = useState(false);
  const [user, setUser] = useState(null);
  const [q, setQ] = useState(
    () =>
      (typeof window !== "undefined" && localStorage.getItem("nc_search")) || ""
  );
  const navigate = useNavigate();
  const { cart } = useCart();
  const itemsCount = cart.items.reduce((s, i) => s + i.qty, 0);

  // Scroll listener for navbar glow
  useEffect(() => {
    const onScroll = () => setGlow(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Persist search query
  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("nc_search", q);
  }, [q]);

  // Auth state listener
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub && unsub();
  }, []);

  // Scroll progress tracking
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  // Search handler
  function doSearch(e) {
    e?.preventDefault();
    localStorage.setItem("nc_search", q || "");
    navigate("/");
    window.dispatchEvent(new Event("storage"));
  }

  return (
    <>
      {/* 🌿 Animated Navbar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 z-50 backdrop-blur-lg transition-all duration-500 ${
          glow
            ? "bg-white/90 shadow-lg border-b border-emerald-100"
            : "bg-white/70 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* 🌿 Brand Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 select-none"
          >
            <Link
              to="/"
              className="flex items-center gap-3 hover:drop-shadow-md transition-all"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-12 h-12 bg-gradient-to-tr from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center shadow-sm"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"
                    fill="#16a34a"
                  />
                </svg>
              </motion.div>
              <div>
                <h1 className="font-extrabold text-lg text-slate-900">
                  NatureCart
                </h1>
                <p className="text-xs text-slate-500 -mt-0.5">
                  Organic • Local • Fresh
                </p>
              </div>
            </Link>
          </motion.div>

          {/* 🔍 Search Bar */}
          <motion.form
            onSubmit={doSearch}
            className="flex-1 mx-4 hidden md:block"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="relative">
              <motion.input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                whileFocus={{ boxShadow: "0 0 0 2px #10b98150" }}
                className="w-full rounded-xl border border-gray-200 pl-4 pr-20 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
                placeholder="Search organic fruits, snacks, or eco products..."
              />
              <motion.button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg px-4 py-1.5 text-sm font-medium shadow-sm hover:from-emerald-600 hover:to-emerald-700"
              >
                Search
              </motion.button>
            </div>
          </motion.form>

          {/* 🧭 Navigation */}
          <motion.nav
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/offers"
              className="text-sm text-slate-600 hover:text-emerald-600 transition-all"
            >
              Offers
            </Link>

            {user ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => signOut(auth)}
                className="text-sm text-slate-700 px-3 py-1 rounded-md hover:bg-emerald-50 transition-all"
              >
                Logout
              </motion.button>
            ) : (
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  to="/login"
                  className="text-sm bg-emerald-600 text-white px-3 py-1 rounded-lg shadow-md hover:bg-emerald-700 transition-all"
                >
                  Login
                </Link>
              </motion.div>
            )}

            {/* 🛒 Cart */}
            <motion.div whileHover={{ rotate: 10, scale: 1.1 }}>
              <Link
                to="/cart"
                className="relative inline-flex items-center p-2 rounded-lg hover:bg-emerald-50 transition-all"
              >
                <svg
                  className="w-6 h-6 text-slate-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4"
                  />
                </svg>
                <AnimatePresence>
                  {itemsCount > 0 && (
                    <motion.span
                      key="cart-badge"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-2 shadow-sm"
                    >
                      {itemsCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            </motion.div>
          </motion.nav>
        </div>

        {/* 🌿 Scroll Progress Bar */}
        <motion.div
          className="h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 origin-left"
          style={{ scaleX }}
        />
      </motion.header>
    </>
  );
}
