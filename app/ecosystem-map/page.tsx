'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TreesIcon as Tree, Info, Award, RefreshCw } from 'lucide-react'

// This would typically come from an API or database
const forestReserves = [
  { id: 1, name: "Yellowwood State Forest", state: "Indiana", area: 23158, established: 1903 },
  { id: 2, name: "Shawnee State Forest", state: "Ohio", area: 63747, established: 1922 },
  { id: 3, name: "Allegheny National Forest", state: "Pennsylvania", area: 513175, established: 1923 },
  { id: 4, name: "Huron-Manistee National Forests", state: "Michigan", area: 978906, established: 1909 },
  { id: 5, name: "White Mountain National Forest", state: "New Hampshire", area: 750852, established: 1918 },
]

const states = ["Indiana", "Ohio", "Pennsylvania", "Michigan", "New Hampshire"]

export default function ForestReserveGame() {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'end'>('start')
  const [currentReserve, setCurrentReserve] = useState(0)
  const [score, setScore] = useState(0)
  const [showInfo, setShowInfo] = useState(false)

  useEffect(() => {
    if (gameState === 'playing') {
      // Shuffle the forest reserves when the game starts
      forestReserves.sort(() => Math.random() - 0.5)
    }
  }, [gameState])

  const handleGuess = (guess: string) => {
    if (guess === forestReserves[currentReserve].state) {
      setScore(score + 1)
    }
    setShowInfo(true)
  }

  const nextReserve = () => {
    if (currentReserve < forestReserves.length - 1) {
      setCurrentReserve(currentReserve + 1)
      setShowInfo(false)
    } else {
      setGameState('end')
    }
  }

  const startGame = () => {
    setGameState('playing')
    setCurrentReserve(0)
    setScore(0)
    setShowInfo(false)
  }

  const restartGame = () => {
    startGame()
  }

return (
  <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-300 p-8 flex flex-col items-center justify-center">
    <h1 className="text-4xl font-bold mb-8 text-center text-green-800 flex items-center justify-center">
      <Tree className="mr-2" /> Forest Reserve Explorer
    </h1>

    <AnimatePresence mode="wait">
      {gameState === 'start' && (
        <motion.div
          key="start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center"
        >
          <p className="text-xl mb-6">Test your knowledge of forest reserves!</p>
          <button
            onClick={startGame}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-xl transition-colors duration-300"
          >
            Start Game
          </button>
        </motion.div>
      )}

      {gameState === 'playing' && (
        <motion.div
          key="playing"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-green-500 rounded-lg shadow-lg p-8 max-w-2xl w-full"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            {forestReserves[currentReserve].name}
          </h2>
          <p className="text-xl text-center mb-6">Which state is this forest reserve located in?</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {states.map((state) => (
              <button
                key={state}
                onClick={() => handleGuess(state)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                disabled={showInfo}
              >
                {state}
              </button>
            ))}
          </div>
          <AnimatePresence>
            {showInfo && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-6 overflow-hidden"
              >
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <Info className="mr-2" /> Forest Reserve Information
                </h3>
                <p><strong>State:</strong> {forestReserves[currentReserve].state}</p>
                <p><strong>Area:</strong> {forestReserves[currentReserve].area.toLocaleString()} acres</p>
                <p><strong>Established:</strong> {forestReserves[currentReserve].established}</p>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Score: {score}/{currentReserve + 1}</p>
            {showInfo && (
              <button
                onClick={nextReserve}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              >
                Next Reserve
              </button>
            )}
          </div>
        </motion.div>
      )}

      {gameState === 'end' && (
        <motion.div
          key="end"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <Award className="mr-2" /> Game Over!
          </h2>
          <p className="text-2xl mb-6">Your final score: {score}/{forestReserves.length}</p>
          <button
            onClick={restartGame}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-xl transition-colors duration-300 flex items-center"
          >
            <RefreshCw className="mr-2" /> Play Again
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);
}

