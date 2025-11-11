import React, { useState } from 'react'
import Banner from '../components/Banner'
import ProductGrid from '../components/ProductGrid'

export default function Home(){
  const [category, setCategory] = useState(null)
  const cats = ['Fruits','Vegetables','Grains','Dairy','Snacks','Eco']

  return (
    <div className='page-home'>
      <Banner />
      <section className='max-w-7xl mx-auto px-4 py-4'>
        <h3 className='text-lg font-semibold mb-3'>Shop by Category</h3>
        <div className='flex gap-3 flex-wrap mb-4'>
          {cats.map(c=>(
            <button key={c} onClick={()=>setCategory(category===c? null : c)} className={`px-3 py-2 rounded-full text-sm ${category===c ? 'bg-emerald-600 text-white' : 'bg-white ring-1 ring-gray-100'}`}>{c}</button>
          ))}
          {category && <button onClick={()=>setCategory(null)} className='px-3 py-2 rounded-full text-sm bg-white ring-1 ring-gray-100'>Clear</button>}
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-4'>
        <h3 className='text-lg font-semibold mb-2'>{category || 'Popular products'}</h3>
        <ProductGrid category={category} />
      </section>
    </div>
  )
}
