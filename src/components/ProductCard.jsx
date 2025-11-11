import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ProductCard({ p }) {
  const { add } = useCart()
  const [added, setAdded] = useState(false)
  const handleAdd = () => {
    add(p)
    setAdded(true)
    setTimeout(() => setAdded(false), 1400)
  }

  return (
    <motion.div
      className="product-card bg-white rounded-xl shadow-sm overflow-hidden flex flex-col relative"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.28 }}
    >
      <Link to={`/product/${p.id}`} className="relative block">
        <img
          src={p.image}
          loading="lazy"
          decoding="async"
          alt={p.name}
          className="w-full h-44 object-cover img-fade"
          onLoad={(e) => e.currentTarget.classList.add('img-loaded')}
          onError={(e) => (e.currentTarget.src = '/src/assets/fallback.jpg')}
        />
        {p.badge && (
          <div className="absolute left-2 top-2 bg-emerald-600 text-white px-2 py-0.5 text-xs rounded-md">
            {p.badge}
          </div>
        )}
      </Link>

      <div className="p-4 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-slate-900">{p.name}</h3>
          <p className="text-xs text-slate-500 mt-1 line-clamp-2">
            {p.description || ''}
          </p>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <div className="text-lg font-bold text-emerald-600">₹{p.price}</div>
            <div className="text-xs text-slate-500">⭐ {p.rating}</div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <button
              onClick={handleAdd}
              className="bg-emerald-600 text-white px-3 py-1 rounded-md text-sm hover:bg-emerald-700"
            >
              Add
            </button>
            <Link to={`/product/${p.id}`} className="text-xs text-emerald-600">
              View
            </Link>
          </div>
        </div>
      </div>

      {added && (
        <div className="absolute right-3 top-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
          Added
        </div>
      )}
    </motion.div>
  )
}
