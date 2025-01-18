'use client'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import Wallet from "@/app/components/ThirdWebWallet"
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="bg-green-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold">
          <Link href="/">Eco-Verse</Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="hover:text-green-200 px-2 py-1">Home</Link>
          <Link href="/forest-reserve" className="hover:text-green-200 px-2 py-1">Forest Reserve</Link>
          <Link href="/carbon-water-tracker" className="hover:text-green-200 px-2 py-1">CO2 & H2O Tracker</Link>
          <Link href="/challenges" className="hover:text-green-200 px-2 py-1">Challenges</Link>
          <Link href="/ecosystem-map" className="hover:text-green-200 px-2 py-1">Ecosystem Map</Link>
          <Link href="/community" className="hover:text-green-200 px-2 py-1">Community</Link>
          <Link href="/crowdFunding" className="hover:text-green-200 px-2 py-1">Crowd-Funding</Link>
          <Link href="/econfts" className="hover:text-green-200 px-2 py-1">Eco-NFTs</Link>
        </div>

        <div className="ml-4">
          <Wallet />
        </div>
      </div>

      {/* Mobile Menu (When Hamburger is Open) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-green-700 text-white px-4">
          <Link href="/" className="block py-3 px-2">Home</Link>
          <Link href="/forest-reserve" className="block py-3 px-2">Forest Reserve</Link>
          <Link href="/carbon-water-tracker" className="block py-3 px-2">Carbon & Water Tracker</Link>
          <Link href="/challenges" className="block py-3 px-2">Challenges</Link>
          <Link href="/ecosystem-map" className="block py-3 px-2">Ecosystem Map</Link>
          <Link href="/community" className="block py-3 px-2">Community</Link>
          <Link href="/crowdFunding" className="block py-3 px-2">Crowd-Funding</Link>
          <Link href="/econfts" className="block py-3 px-2">Eco-NFTs</Link>
        </div>
      )}

      {/* Optional Icon */}
      <motion.div 
        className="absolute right-4 bottom-4 hover:text-green-200"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
      >
        <Heart className="w-6 h-6" />
      </motion.div>
    </nav>
  )
}

export default Navbar;
