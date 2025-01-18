import { TreeNFT } from '@/types/nft'

export const trees: TreeNFT[] = [
  {
    id: '1',
    name: 'Amazon Rainforest Section A',
    image: '/placeholder.svg?height=400&width=400',
    price: 0.5,
    description: 'Monitor and protect a vital section of the Amazon rainforest. This area is home to diverse wildlife and plays a crucial role in carbon sequestration.',
    impact: {
      trees: 500,
      farmers: 5,
      carbonOffset: 1000
    },
    rarity: 'rare'
  },
  {
    id: '2',
    name: 'Borneo Mangrove Reserve',
    image: '/placeholder.svg?height=400&width=400',
    price: 0.3,
    description: 'Support the preservation of crucial mangrove ecosystems that protect coastlines and provide habitat for marine life.',
    impact: {
      trees: 300,
      farmers: 3,
      carbonOffset: 500
    },
    rarity: 'common'
  },
  {
    id: '3',
    name: 'Congo Basin Ancient Forest',
    image: '/placeholder.svg?height=400&width=400',
    price: 1.0,
    description: 'Help preserve one of Africa\'s oldest forest sections, supporting both wildlife and local communities.',
    impact: {
      trees: 1000,
      farmers: 10,
      carbonOffset: 2000
    },
    rarity: 'legendary'
  }
]

