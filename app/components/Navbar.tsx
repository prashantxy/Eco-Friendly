'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Home, TreesIcon as Tree, Droplet, Bike, Map, Users} from 'lucide-react'
import Wallet from "@/app/components/ThirdWebWallet"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Toggle menu for mobile view
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="bg-green-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="text-2xl font-semibold">
          <Link href="/">Eco-Verse</Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden lg:flex space-x-6">
          <Link href="/" className="hover:text-green-200">Home</Link>
          <Link href="/forest-reserve" className="hover:text-green-200">Forest Reserve</Link>
          <Link href="/carbon-water-tracker" className="hover:text-green-200">Carbon & Water Tracker</Link>
          <Link href="/challenges" className="hover:text-green-200">Challenges</Link>
          <Link href="/ecosystem-map" className="hover:text-green-200">Ecosystem Map</Link>
          <Link href="/community" className="hover:text-green-200">Community</Link>
        </div>
        <Wallet/>
      </div>

      {/* Mobile Menu (When Hamburger is Open) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-green-700 text-white py-4 px-6">
          <Link href="/" className="block py-2">Home</Link>
          <Link href="/forest-reserve" className="block py-2">Forest Reserve</Link>
          <Link href="/carbon-water-tracker" className="block py-2">Carbon & Water Tracker</Link>
          <Link href="/challenges" className="block py-2">Challenges</Link>
          <Link href="/ecosystem-map" className="block py-2">Ecosystem Map</Link>
          <Link href="/community" className="block py-2">Community</Link>
        </div>
      )}

      {/* Optional Icon */}
      <motion.div 
        className="hover:text-green-200"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
      >
        <Heart className="w-6 h-6" />
      </motion.div>
    </nav>
  )
}

export default Navbar
