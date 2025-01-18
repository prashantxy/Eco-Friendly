'use client'

import { useState } from 'react'
import { TreeNFTCard } from '@/components/ui/tree-nft-card'
import { trees } from '@/app/data/trees'
import { toast } from 'sonner'
import { TreePine } from 'lucide-react'

export default function NFTMarketplace() {
  const [loading, setLoading] = useState<string | null>(null)

  const handleBuyNFT = async (id: string) => {
    setLoading(id)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success('Forest portion adopted successfully! Thank you for contributing to forest preservation.')
    } catch (error) {
      toast.error('Failed to adopt forest portion. Please try again.')
    } finally {
      setLoading(null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto py-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TreePine className="w-8 h-8 text-green-600" />
            <h1 className="text-3xl font-bold text-green-900">Forest Reserve NFT Monitoring</h1>
          </div>
          <p className="text-lg text-green-700">
            This page displays real-time health stats of selected forest reserves and allows users to "adopt" 
            portions for virtual monitoring through NFTs. Each adoption contributes to forest preservation and 
            sustainable farming practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-green-100/50 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-2">Air Quality</h3>
            <div className="text-3xl font-bold text-green-700">45</div>
            <div className="text-sm text-green-600">Current AQI (Good)</div>
          </div>
          <div className="bg-blue-100/50 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Humidity</h3>
            <div className="text-3xl font-bold text-blue-700">65%</div>
            <div className="text-sm text-blue-600">Current Humidity Level</div>
          </div>
          <div className="bg-yellow-100/50 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-900 mb-2">Vegetation Health</h3>
            <div className="text-3xl font-bold text-yellow-700">85%</div>
            <div className="text-sm text-yellow-600">Healthy Vegetation</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trees.map((tree) => (
            <TreeNFTCard
              key={tree.id}
              tree={tree}
              onBuy={handleBuyNFT}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

