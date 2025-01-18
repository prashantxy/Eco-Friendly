'use client'

import { useState } from 'react'
import { Wallet, TreePine, Globe, ArrowUpRight, Users, Timer, Leaf } from 'lucide-react'

interface Campaign {
  id: string
  title: string
  description: string
  goalAmount: number
  currentAmount: number
  supporters: number
  deadline: Date
  category: 'forest' | 'water' | 'climate' | 'wildlife'
  location: string
}

const EnvironmentalCrowdfunding = () => {
  const [campaigns] = useState<Campaign[]>([
    {
      id: '0x1234',
      title: 'Amazon Rainforest Conservation',
      description: 'Support the preservation of 100 hectares of Amazon rainforest through blockchain-backed land protection.',
      goalAmount: 50,
      currentAmount: 32.5,
      supporters: 156,
      deadline: new Date('2024-03-01'),
      category: 'forest',
      location: 'Brazil'
    },
    {
      id: '0x5678',
      title: 'Clean Water Initiative',
      description: 'Installing water purification systems in rural communities using smart contract automation.',
      goalAmount: 25,
      currentAmount: 18.75,
      supporters: 89,
      deadline: new Date('2024-02-15'),
      category: 'water',
      location: 'India'
    }
  ])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-green-800 mb-2">Blockchain Environmental Initiatives</h1>
        <p className="text-green-600">Support verified environmental projects with transparent blockchain tracking</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-green-50 p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-2 text-green-700 mb-2">
            <Globe className="w-5 h-5" />
            <h3 className="font-semibold">Total Impact</h3>
          </div>
          <p className="text-2xl font-bold text-green-800">51.25 ETH</p>
          <p className="text-sm text-green-600">Contributed to projects</p>
        </div>
        
        <div className="bg-green-50 p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-2 text-green-700 mb-2">
            <Users className="w-5 h-5" />
            <h3 className="font-semibold">Community</h3>
          </div>
          <p className="text-2xl font-bold text-green-800">245</p>
          <p className="text-sm text-green-600">Active supporters</p>
        </div>

        <div className="bg-green-50 p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-2 text-green-700 mb-2">
            <TreePine className="w-5 h-5" />
            <h3 className="font-semibold">Projects</h3>
          </div>
          <p className="text-2xl font-bold text-green-800">12</p>
          <p className="text-sm text-green-600">Active campaigns</p>
        </div>
      </div>

      {/* Campaign Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-green-800">{campaign.title}</h3>
                <span className="text-xs text-gray-500">{campaign.id}</span>
              </div>
              
              <p className="text-gray-600 mb-4">{campaign.description}</p>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-green-700">{(campaign.currentAmount / campaign.goalAmount * 100).toFixed(1)}% Funded</span>
                  <span className="text-green-700">{campaign.goalAmount} ETH Goal</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${(campaign.currentAmount / campaign.goalAmount * 100)}%` }}
                  />
                </div>
              </div>

              {/* Campaign Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                <div>
                  <p className="text-gray-500">Raised</p>
                  <p className="font-semibold text-green-700">{campaign.currentAmount} ETH</p>
                </div>
                <div>
                  <p className="text-gray-500">Supporters</p>
                  <p className="font-semibold text-green-700">{campaign.supporters}</p>
                </div>
                <div>
                  <p className="text-gray-500">Time Left</p>
                  <p className="font-semibold text-green-700">
                    {Math.ceil((campaign.deadline.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days
                  </p>
                </div>
              </div>

              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2">
                <Wallet className="w-4 h-4" />
                Support Project
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EnvironmentalCrowdfunding
