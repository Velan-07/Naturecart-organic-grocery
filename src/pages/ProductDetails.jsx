import React from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductDetails(){
  const { id } = useParams()
  const p = products.find(x=>x.id===id)
  const { add } = useCart()
  if(!p) return <div className='container p-6'>Product not found. <Link to='/'>Go home</Link></div>
  return (
    <div className='max-w-6xl mx-auto p-6'>
      <div className='grid md:grid-cols-2 gap-6 bg-white rounded-xl shadow-sm p-6'>
        <div>
          <img loading='lazy' src={p.image} alt={p.name} className='rounded-lg w-full h-96 object-cover' onError={(e)=>{e.target.src='/src/assets/fallback.jpg'}} />
        </div>
        <div>
          <h1 className='text-2xl font-bold'>{p.name}</h1>
          <p className='text-sm text-slate-500 mt-1'>{p.category}</p>
          <div className='text-3xl text-emerald-600 font-extrabold mt-4'>₹{p.price}</div>
          <p className='mt-4 text-slate-700'>{p.description}</p>
          <div className='mt-6 flex gap-3'>
            <button onClick={()=>add(p)} className='bg-emerald-600 text-white px-4 py-2 rounded-lg'>Add to cart</button>
            <Link to='/checkout' className='px-4 py-2 border rounded-lg'>Buy Now</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
