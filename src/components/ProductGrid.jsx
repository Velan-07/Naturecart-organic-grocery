import React, { useEffect, useState } from 'react'
import products from '../data/products'
import ProductCard from './ProductCard'
import { motion } from 'framer-motion'

export default function ProductGrid({category}){
  const [loading, setLoading] = useState(true)
  const rawSearch = (typeof window !== 'undefined' && localStorage.getItem('nc_search')) || ''
  const search = rawSearch ? rawSearch.toLowerCase() : ''
  useEffect(()=>{ const t=setTimeout(()=>setLoading(false),350); return ()=>clearTimeout(t) },[category, rawSearch])

  let filtered = category ? products.filter(p=>p.category===category) : products
  if(search) filtered = filtered.filter(p=> (p.name||'').toLowerCase().includes(search) || (p.category||'').toLowerCase().includes(search))

  if(loading){
    return <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4'> {Array.from({length:8}).map((_,i)=>(<div key={i} className='skeleton h-56'></div>))} </div>
  }

  if(filtered.length===0) return <div className='p-6 text-slate-500'>No products found.</div>

  return (
    <motion.div layout className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4'>
      {filtered.map(p=> <ProductCard key={p.id} p={p} />)}
    </motion.div>
  )
}
