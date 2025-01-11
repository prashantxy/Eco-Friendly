'use client';

import Link from 'next/link';
import { Home, TreesIcon as Tree, Droplet, Bike, Map, Users } from 'lucide-react'
import { useState } from 'react';
import { motion } from 'framer-motion';

const HorizontalNavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full bg-green-600 text-white shadow-md transition-all duration-300 ${
        isCollapsed ? 'h-12' : 'h-16'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center justify-between h-full px-4">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold">
          {isCollapsed ? 'EM' : 'EcoSystem Monitor'}
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-4">
          <NavItem href="/" icon={<Home size={18} />} text="Dashboard" />
          <NavItem href="/forest-reserve" icon={<Tree size={18} />} text="Forest Reserve" />
          <NavItem href="/carbon-water-tracker" icon={<Droplet size={18} />} text="Carbon & Water" />
          <NavItem href="/challenges" icon={<Bike size={18} />} text="Challenges" />
          <NavItem href="/ecosystem-map" icon={<Map size={18} />} text="Ecosystem Map" />
          <NavItem href="/community" icon={<Users size={18} />} text="Community" />
        </ul>

        {/* Collapse Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 bg-green-700 rounded hover:bg-green-800 transition-colors"
        >
          {isCollapsed ? 'Expand' : 'Collapse'}
        </button>
      </div>
    </motion.nav>
  );
};

const NavItem = ({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) => (
  <li>
    <Link
      href={href}
      className="flex items-center space-x-1 hover:bg-green-700 px-3 py-2 rounded transition-colors"
    >
      {icon}
      <span>{text}</span>
    </Link>
  </li>
);

export default HorizontalNavbar;
