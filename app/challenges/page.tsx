'use client'

import { useState } from 'react'
import { Bike } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedHero from '../components/AnimatedHero'
export default function Challenges() {
  // State to track user's answers
  const [answers, setAnswers] = useState({
    cycleToWork: false,
    plantTrees: false,
    reducePlastic: false,
  })

  const [badge, setBadge] = useState<string | null>(null)
  const [leaderboard, setLeaderboard] = useState<{ name: string; badge: string }[]>([
    { name: 'Alice', badge: '🌍 Eco Champion' },
    { name: 'Bob', badge: '🌱 Green Contributor' },
  ])
  const [userName, setUserName] = useState('')

  // Function to calculate the badge based on answers
  const calculateBadge = () => {
    let score = 0
    if (answers.cycleToWork) score += 1
    if (answers.plantTrees) score += 1
    if (answers.reducePlastic) score += 1

    // Assign a badge based on score
    if (score === 3) {
      setBadge('🌍 Eco Champion')
    } else if (score === 2) {
      setBadge('🌱 Green Contributor')
    } else if (score === 1) {
      setBadge('♻️ Eco Beginner')
    } else {
      setBadge('❌ Try Again')
    }

    // Add to leaderboard if not already there
    if (userName && badge && !leaderboard.some(user => user.name === userName)) {
      setLeaderboard(prev => [...prev, { name: userName, badge }])
    }
  }

  return (
    
   <div className="relative overflow-hidden w-screen h-screen bg-green-50">
  {/* Floating Background */}
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-300 via-green-400 to-blue-300 z-0 animate-background">
    <div className="floating-bubbles absolute top-10 left-20 opacity-30 animate-bubble"></div>
    <div className="floating-leaves absolute top-20 right-10 opacity-40 animate-leaf"></div>
    <div className="floating-clouds absolute top-40 left-40 opacity-20 animate-cloud"></div>
  </div>
</div>

      
      {/* Header Section */}
     
      <motion.h1 
        className="text-5xl font-extrabold mb-6 flex items-center text-green-600 z-10 relative"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <Bike className="mr-3 text-4xl" /> Eco-Friendly Challenges
      </motion.h1>
      
      {/* Description Section */}
      <motion.p 
        className="text-xl text-gray-700 mb-8 z-10 relative"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        Join the green revolution! Answer the eco-challenges below to earn badges for your contribution to a sustainable planet.
      </motion.p>

      {/* Static Questions Section */}
      <motion.div 
        className="bg-blue-200 p-8 rounded-lg shadow-lg mb-6 z-10 relative"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-green-600 mb-4">How are you helping the planet?</h2>
        
        <div className="space-y-4 text-gray-800">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={answers.cycleToWork}
              onChange={() => setAnswers(prev => ({ ...prev, cycleToWork: !prev.cycleToWork }))}
              className="mr-3"
            />
            <span>Cycle to work for a week</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={answers.plantTrees}
              onChange={() => setAnswers(prev => ({ ...prev, plantTrees: !prev.plantTrees }))}
              className="mr-3"
            />
            <span>Plant 3 trees this month</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={answers.reducePlastic}
              onChange={() => setAnswers(prev => ({ ...prev, reducePlastic: !prev.reducePlastic }))}
              className="mr-3"
            />
            <span>Reduce plastic use by 50%</span>
          </div>
        </div>
      </motion.div>

      {/* User Name Input */}
      <motion.div 
        className="mb-6 z-10 relative"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        <label className="block text-gray-800 mb-2">Enter your name:</label>
        <input
          type="text"
          className="p-3 border rounded-md w-full"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Your Name"
        />
      </motion.div>

      {/* Calculate Badge Button */}
      <motion.div
        className="mb-6 z-10 relative"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        <button
          onClick={calculateBadge}
          className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
        >
          Get My Eco Badge
        </button>
      </motion.div>

      {/* Badge Section */}
      {badge && (
        <motion.div 
          className="bg-green-300 p-8 rounded-lg shadow-lg text-center z-10 relative"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-green-600 mb-4">Your Eco Badge</h2>
          <p className="text-5xl">{badge}</p>
        </motion.div>
      )}

      {/* Leaderboard Section */}
      <motion.div 
        className="mt-10 bg-green-200 p-8 rounded-lg shadow-lg z-10 relative"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-green-600 mb-4">Leaderboard</h2>
        
        <ul className="space-y-4 text-gray-800">
          {leaderboard.map((user, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{user.name}</span>
              <span>{user.badge}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
    
  )
}
