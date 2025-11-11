import React from 'react'
import { useCart } from '../context/CartContext'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Checkout() {
  const { cart, clear } = useCart()
  const total = cart.items.reduce((s, i) => s + i.price * i.qty, 0)

  if (cart.items.length === 0)
    return (
      <div className="max-w-5xl mx-auto p-6 text-center">
        <motion.h2
          className="text-2xl font-semibold text-slate-800 mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          No items in your cart 🛒
        </motion.h2>
        <p className="text-slate-500 mb-6">
          Add some organic freshness to your cart before checkout.
        </p>
        <Link
          to="/"
          className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-all"
        >
          Back to Shop
        </Link>
      </div>
    )

  return (
    <motion.div
      className="max-w-5xl mx-auto p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Checkout — Organic Mart
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* 🛍️ Order Summary */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4 text-slate-800">
            Order Summary
          </h3>
          {cart.items.map(it => (
            <div
              key={it.id}
              className="flex justify-between py-2 border-b border-gray-100 text-slate-700"
            >
              <div>
                {it.name} <span className="text-sm text-slate-500">× {it.qty}</span>
              </div>
              <div>₹{(it.price * it.qty).toFixed(2)}</div>
            </div>
          ))}
          <div className="flex justify-between mt-4 font-semibold text-slate-900">
            <span>Total</span>
            <span className="text-emerald-700">₹{total.toFixed(2)}</span>
          </div>
        </div>

        {/* 💳 Payment Simulation */}
        <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">
            Payment (Test)
          </h3>
          <p className="text-sm text-slate-500 mb-4">
            This is a mock checkout page. You can simulate payment below or
            connect a real gateway (Stripe / Razorpay / PayPal).
          </p>

          <button
            onClick={() => {
              alert('Payment simulated successfully ✅')
              clear()
            }}
            className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-all"
          >
            Pay Now (Test)
          </button>

          <button
            onClick={() =>
              alert(
                'To go live, integrate a payment gateway (Stripe, Razorpay, PayPal).'
              )
            }
            className="w-full mt-3 text-sm text-slate-500 hover:text-emerald-700 transition"
          >
            Integrate Payment Gateway
          </button>
        </div>
      </div>
    </motion.div>
  )
}
