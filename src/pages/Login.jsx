import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Loader2, CheckCircle2 } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const navigate = useNavigate();

  async function doLogin(e) {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      setOk(true);
      setTimeout(() => {
        navigate("/");
      }, 1200);
    } catch (e) {
      setErr("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-50 to-white p-6 overflow-hidden relative">
      {/* 🌿 Background Floating Icons */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-emerald-100"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 20}px`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.7, 0.3],
              rotate: [0, 20, -20, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🌿
          </motion.div>
        ))}
      </motion.div>

      {/* 🌱 Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 border border-emerald-100 z-10"
      >
        {/* Logo + Title */}
        <motion.div
          className="flex items-center justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-3 rounded-xl shadow-sm">
            <Leaf className="text-emerald-600 w-7 h-7" />
          </div>
          <h1 className="ml-2 text-2xl font-extrabold text-emerald-700">
            NatureCart
          </h1>
        </motion.div>

        <h2 className="text-xl font-semibold text-slate-800 text-center mb-2">
          Welcome Back 🌱
        </h2>
        <p className="text-sm text-slate-500 text-center mb-6">
          Sign in to continue shopping fresh and organic.
        </p>

        {/* 🔐 Form */}
        <form onSubmit={doLogin} className="flex flex-col gap-4">
          <motion.input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            whileFocus={{ scale: 1.02 }}
            className="border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-emerald-300 outline-none transition-all"
            placeholder="Email address"
            required
          />
          <motion.input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            whileFocus={{ scale: 1.02 }}
            className="border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-emerald-300 outline-none transition-all"
            placeholder="Password"
            required
          />

          {err && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-red-600 text-center"
            >
              {err}
            </motion.div>
          )}

          {/* Login Button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-2.5 rounded-lg text-white font-medium transition-all ${
              loading
                ? "bg-emerald-400"
                : "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-md"
            }`}
          >
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-2"
                >
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Logging in...
                </motion.div>
              ) : ok ? (
                <motion.div
                  key="ok"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-2 text-white"
                >
                  <CheckCircle2 className="w-5 h-5" /> Success ✓
                </motion.div>
              ) : (
                <motion.span
                  key="text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Login
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </form>

        {/* Footer Links */}
        <div className="text-center mt-6 text-sm text-slate-500">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-emerald-600 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
