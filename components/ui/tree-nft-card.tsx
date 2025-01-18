import { TreeNFT } from '@/types/nft'
import { Leaf, Users, TreePine, Activity } from 'lucide-react'

interface TreeNFTCardProps {
  tree: TreeNFT
  onBuy: (id: string) => void
}

export function TreeNFTCard({ tree, onBuy }: TreeNFTCardProps) {
  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-lg overflow-hidden border border-green-100">
      <div className="relative">
        <img
          src={tree.image || "/placeholder.svg"}
          alt={tree.name}
          className="w-full h-48 object-cover"
        />
        <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-sm 
          ${tree.rarity === 'legendary' ? 'bg-green-600' : 
            tree.rarity === 'rare' ? 'bg-green-500' : 'bg-green-400'} 
          text-white font-medium`}
        >
          {tree.rarity}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-green-900 mb-2">{tree.name}</h3>
        <p className="text-sm text-green-700 mb-4">{tree.description}</p>
        
        <div className="bg-green-50 rounded-lg p-4 mb-4">
          <div className="text-sm font-medium text-green-800 mb-2">Environmental Impact</div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="bg-green-100 p-2 rounded-full">
                <TreePine className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-green-600">Trees to Plant</span>
                <span className="text-sm font-medium text-green-900">{tree.impact.trees} trees</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-green-100 p-2 rounded-full">
                <Users className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-green-600">Farmers Supported</span>
                <span className="text-sm font-medium text-green-900">{tree.impact.farmers} farmers</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-green-100 p-2 rounded-full">
                <Leaf className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-green-600">Carbon Offset</span>
                <span className="text-sm font-medium text-green-900">{tree.impact.carbonOffset}kg CO2</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-green-600" />
            <span className="text-lg font-bold text-green-900">{tree.price} ETH</span>
          </div>
          <button 
            onClick={() => onBuy(tree.id)}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            Adopt This Portion
          </button>
        </div>
      </div>
    </div>
  )
}

