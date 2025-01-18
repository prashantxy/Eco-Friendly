export interface TreeNFT {
    id: string
    name: string
    image: string
    price: number
    description: string
    impact: {
      trees: number
      farmers: number
      carbonOffset: number
    }
    rarity: 'common' | 'rare' | 'legendary'
  }
  
  