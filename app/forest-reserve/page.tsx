'use client'
import { TreesIcon as Tree } from 'lucide-react'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false })
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false })
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false })

export default function ForestReserve() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 flex items-center text-green-700">
        <Tree className="mr-2" />
        Forest Reserve Monitoring
      </h1>

      <p className="text-lg mb-6">
        This page will display real-time health stats of selected forest reserves and allow users to "adopt" portions for virtual monitoring.
      </p>

      {/* Interactive Map Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Explore Forest Reserves on the Map</h2>
        <div className="relative h-80 bg-gray-200 rounded-lg">
          <MapContainer
            center={[51.505, -0.09]} // Default center
            zoom={5} // Default zoom level
            className="h-full w-full rounded-lg shadow-lg"
          >
            {/* Tile layer */}
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="© OpenStreetMap contributors"
            />

            {/* Sample markers for forest reserves */}
            <Marker position={[51.505, -0.09]}>
              <Popup>
                <strong>Amazon Rainforest</strong>
                <p>Healthy Vegetation: 92%</p>
                <p>Carbon Storage: 35 tons/ha</p>
              </Popup>
            </Marker>
            <Marker position={[48.8566, 2.3522]}>
              <Popup>
                <strong>European Reserve</strong>
                <p>Healthy Vegetation: 78%</p>
                <p>Carbon Storage: 20 tons/ha</p>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      {/* Real-Time Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-green-100 p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold text-lg mb-3">Air Quality</h3>
          <p className="text-xl">Current AQI: 45 (Good)</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold text-lg mb-3">Humidity</h3>
          <p className="text-xl">Humidity: 65%</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold text-lg mb-3">Vegetation Health</h3>
          <p className="text-xl">Healthy Vegetation: 85%</p>
        </div>
      </div>

      {/* Adoption Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4">Adopt a Portion of the Forest Reserve</h2>
        <p className="mb-4">Choose a portion of the forest reserve to adopt and track its health. Your actions will contribute to its restoration and preservation.</p>
        
        {/* Adoption progress bar */}
        <div className="mb-4">
          <label htmlFor="adopt-progress" className="block text-sm font-medium mb-2">Adopted Portion Health</label>
          <progress id="adopt-progress" value="60" max="100" className="w-full h-6 bg-gray-200 rounded-full">
            60%
          </progress>
        </div>

        <button className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-500 transition duration-300">
          Adopt This Portion
        </button>
      </div>

      {/* Gamification & Rewards Section */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Earn Rewards for Protecting the Forest</h2>
        <p className="mb-4">Complete eco-friendly challenges, adopt more forest portions, and share your progress to earn rewards.</p>
        <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-400 transition duration-300">
          View Challenges
        </button>
      </div>
    </div>
  )
}
