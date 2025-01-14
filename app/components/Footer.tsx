'use client'

import Link from 'next/link'
import { Home, TreesIcon as Tree, Droplet, Bike, Map, Users } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isAtTop ? 'bg-transparent text-white' : 'bg-green-500 text-green-600 shadow-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold">EcoSystem Monitor</Link>
        <ul className="flex space-x-4">
          <NavItem href="/" icon={<Home size={18} />} text="Dashboard" />
          <NavItem href="/forest-reserve" icon={<Tree size={18} />} text="Forest Reserve" />
          <NavItem href="/carbon-water-tracker" icon={<Droplet size={18} />} text="Carbon & Water" />
          <NavItem href="/challenges" icon={<Bike size={18} />} text="Challenges" />
          <NavItem href="/ecosystem-map" icon={<Map size={18} />} text="Ecosystem Map" />
          <NavItem href="/community" icon={<Users size={18} />} text="Community" />
        </ul>
      </nav>
    </motion.header>
  )
}

const NavItem = ({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) => (
  <li>
    <Link href={href} className="flex items-center hover:underline">
      {icon}
      <span className="ml-1">{text}</span>
    </Link>
  </li>
)

const Footer = () => (
  <footer className="w-full bg-green-400 text-white py-4">
    <div className="container mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} EcoSystem Monitor. All rights reserved.</p>
      <p>
        Check the project on{' '}
        <Link href="https://github.com/prashantxy/Eco-Friendly" className="text-green-400 hover:underline">
          GitHub
        </Link>
      </p>
    </div>
  </footer>
)

export default Header
export { Footer }
