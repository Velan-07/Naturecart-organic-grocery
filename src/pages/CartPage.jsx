import React from 'react'
import { useCart } from '../context/CartContext'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function CartPage() {
  const { cart, setQty, remove, clear } = useCart()
  const total = cart.items.reduce((s, i) => s + i.price * i.qty, 0)

  if (cart.items.length === 0)
    return (
      <div className="max-w-5xl mx-auto p-6 text-center">
        <motion.h2
          className="text-2xl font-semibold text-slate-800 mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Your Organic Mart Cart is Empty 🛒
        </motion.h2>
        <p className="text-slate-500 mb-6">
          Looks like you haven’t added any products yet.
        </p>
        <Link
          to="/"
          className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-all"
        >
          Shop Fresh Now
        </Link>
      </div>
    )

  return (
    <motion.div
      className="max-w-6xl mx-auto p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Your Organic Mart Cart
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* 🛒 Cart Items */}
        <div className="md:col-span-2 space-y-4">
          {cart.items.map(it => (
            <motion.div
              key={it.id}
              className="flex items-center bg-white rounded-xl shadow-sm p-4 gap-4"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={it.image}
                alt={it.name}
                className="w-24 h-24 object-cover rounded-lg border border-gray-100"
                loading="lazy"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-slate-800">{it.name}</h4>
                <p className="text-sm text-slate-500">{it.category}</p>
                <div className="mt-2 flex items-center gap-3">
                  <span className="text-emerald-700 font-bold">
                    ₹{it.price}
                  </span>
                  <input
                    type="number"
                    value={it.qty}
                    min="1"
                    onChange={e =>
                      setQty(it.id, Math.max(1, Number(e.target.value)))
                    }
                    className="w-16 border border-gray-200 rounded-md px-2 py-1 text-center text-sm"
                  />
                  <button
                    onClick={() => remove(it.id)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 💰 Cart Summary */}
        <div className="bg-white rounded-xl shadow-md p-6 h-fit">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Order Summary
          </h3>
          <div className="flex justify-between text-slate-600 mb-2">
            <span>Items:</span>
            <span>{cart.items.length}</span>
          </div>
          <div className="flex justify-between text-slate-600 mb-4">
            <span>Total:</span>
            <span className="font-bold text-emerald-700">₹{total.toFixed(2)}</span>
          </div>

          <button
            onClick={() =>
              alert('Checkout mock — integrate payments to go live.')
            }
            className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-all"
          >
            Proceed to Checkout
          </button>
          <button
            onClick={() => clear()}
            className="w-full mt-3 text-sm text-slate-500 hover:text-red-500 transition"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </motion.div>
  )
}
