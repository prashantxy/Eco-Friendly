'use client' // Mark this file as a client component

import { useState, useEffect } from 'react'
import { TreesIcon as Tree } from 'lucide-react'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'
import { useRouter } from 'next/navigation';

// Dynamically import Leaflet components for client-side rendering
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false })
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false })
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false })

// Define types for reserves
type Reserve = {
  id: number
  name: string
  lat: number
  lng: number
  health: number
}

export default function ForestReserve() {
  const [reserves, setReserves] = useState<Reserve[]>([])
  const router = useRouter();
  // Mock API call to fetch forest reserves
  useEffect(() => {
    const fetchReserves = async () => {
      const data: Reserve[] = [
        { id: 1, name: 'Amazon Rainforest', lat: 51.505, lng: -0.09, health: 92 },
        { id: 2, name: 'European Reserve', lat: 48.8566, lng: 2.3522, health: 78 },
      ]
      setReserves(data)
    }
    fetchReserves()
  }, [])
  const handleAdopt = () => {
    router.push('/buyforest');
  };

  return (
    <div className="container mx-auto p-6 bg-green-50">
      {/* Page Header */}
      <header className="mb-6">
        <h1 className="text-4xl font-bold flex items-center text-green-800">
          <Tree className="mr-2" />
          Forest Reserve Monitoring
        </h1>
        <p className="text-lg text-green-700">
          This page displays real-time health stats of selected forest reserves and allows users to "adopt" portions for virtual monitoring.
        </p>
      </header>

      {/* Interactive Map Section */}
      <section className="mb-12 bg-green-200 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-green-800">Explore Forest Reserves on the Map</h2>
        {/* Your map content */}
      </section>

      {/* Real-Time Stats Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-green-300 p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold text-lg mb-3 text-green-800">Air Quality</h3>
          <p className="text-xl text-green-900">Current AQI: 45 (Good)</p>
        </div>
        <div className="bg-blue-200 p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold text-lg mb-3 text-blue-800">Humidity</h3>
          <p className="text-xl text-blue-900">Humidity: 65%</p>
        </div>
        <div className="bg-yellow-200 p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold text-lg mb-3 text-yellow-800">Vegetation Health</h3>
          <p className="text-xl text-yellow-900">Healthy Vegetation: 85%</p>
        </div>
      </section>

      {/* Adoption Section */}
      <section className="bg-green-100 p-6 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-green-800">Adopt a Portion of the Forest Reserve</h2>
        <p className="mb-4 text-green-700">
          Choose a portion of the forest reserve to adopt and track its health. Your actions will contribute to its restoration and preservation.
        </p>
        <div className="mb-4">
          <label htmlFor="adopt-progress" className="block text-sm font-medium mb-2 text-green-800">
            Adopted Portion Health
          </label>
          <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>
        <button
          onClick={handleAdopt} // Add onClick handler for navigation
          className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-500 transition duration-300"
        >
          Adopt This Portion
        </button>
      </section>

      {/* Gamification & Rewards Section */}
      <section className="bg-green-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-green-800">Earn Rewards for Protecting the Forest</h2>
        <p className="mb-4 text-green-700">
          Complete eco-friendly challenges, adopt more forest portions, and share your progress to earn rewards.
        </p>
        <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-400 transition duration-300">
          View Challenges
        </button>
      </section>
    </div>
  );
};

