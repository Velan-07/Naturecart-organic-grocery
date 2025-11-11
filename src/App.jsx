import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import CartPage from './pages/CartPage'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Admin from './pages/Admin'
import Checkout from './pages/Checkout'
import Offers from './pages/Offers'
import ProductDetails from './pages/ProductDetails'
import { AnimatePresence, motion } from 'framer-motion'
import Preloader from './components/Preloader'
import ScrollTop from './components/ScrollTop'
import ProductCard from './components/ProductCard'
import Contact from './pages/Contact'

export default function App(){
  const location = useLocation()
  const [isReady, setIsReady] = useState(false)

  useEffect(()=>{
    // Simple preloader: show for minimal 600ms or until load
    const ready = () => setTimeout(()=>setIsReady(true), 600)
    if (document.readyState === 'complete') ready(); else window.addEventListener('load', ready); 
    return ()=> window.removeEventListener('load', ready)
  },[])

  if(!isReady) return <Preloader />

  return (
    <div className="app-root">
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={location.pathname} initial={{opacity:0, y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:0.36}}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path='/ProductGrid' element={<ProductCard/>}/>
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </motion.div>
      </AnimatePresence>
      <ScrollTop />
    </div>
  )
}
