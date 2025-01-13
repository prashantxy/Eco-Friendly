'use client'

import React, { useState } from 'react';


const IconTree = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3L4 15h3v6h10v-6h3L12 3zm-1 16v-4h2v4h-2z" />
  </svg>
);

const IconShield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
  </svg>
);

const IconUsers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const IconFlower = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6zm0 2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
  </svg>
);

const IconSun = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42" />
  </svg>
);

const IconDroplet = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
  </svg>
);

const IconWind = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 10h8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2M2 17h8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2" />
  </svg>
);

const IconAward = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const ForestGuardian = () => {
  const [selectedPlot, setSelectedPlot] = useState(null);
  const [showAdoptionForm, setShowAdoptionForm] = useState(false);
  const [plotSize, setPlotSize] = useState('small');
  
  const plotSizes = {
    small: { size: '100 sq m', price: '10', trees: '10-15' },
    medium: { size: '500 sq m', price: '40', trees: '50-60' },
    large: { size: '1000 sq m', price: '75', trees: '100-120' }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100 p-6">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Become a Forest Guardian
        </h1>
        <p className="text-lg text-green-700 mb-8">
          Adopt a piece of forest, nurture it, and watch it thrive under your care
        </p>
        
        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="w-8 h-8 text-green-600 mx-auto mb-2">
              <IconTree />
            </div>
            <div className="text-2xl font-bold text-green-800">1,234</div>
            <div className="text-sm text-green-600">Trees Planted</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="w-8 h-8 text-green-600 mx-auto mb-2">
              <IconUsers />
            </div>
            <div className="text-2xl font-bold text-green-800">892</div>
            <div className="text-sm text-green-600">Active Guardians</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="w-8 h-8 text-green-600 mx-auto mb-2">
              <IconShield />
            </div>
            <div className="text-2xl font-bold text-green-800">156</div>
            <div className="text-sm text-green-600">Protected Areas</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="w-8 h-8 text-green-600 mx-auto mb-2">
              <IconFlower />
            </div>
            <div className="text-2xl font-bold text-green-800">5,678</div>
            <div className="text-sm text-green-600">Native Plants</div>
          </div>
        </div>
      </div>

      {/* Plot Selection */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
          Choose Your Guardian Plot
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(plotSizes).map(([key, data]) => (
            <div 
              key={key}
              className={`bg-white p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105 
                ${plotSize === key ? 'ring-2 ring-green-500' : ''}`}
              onClick={() => setPlotSize(key)}
            >
              <h3 className="text-xl font-bold text-green-700 mb-4 capitalize">
                {key} Plot
              </h3>
              <ul className="space-y-3 text-green-600">
                <li className="flex items-center">
                  <div className="w-4 h-4 mr-2">
                    <IconShield />
                  </div>
                  {data.size} area
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 mr-2">
                    <IconTree />
                  </div>
                  {data.trees} trees
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 mr-2">
                    <IconAward />
                  </div>
                  ${data.price}/month
                </li>
              </ul>
              <button
                className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
                onClick={() => setShowAdoptionForm(true)}
              >
                Select Plot
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Plot Care Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
          Care For Your Plot
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="w-8 h-8 text-yellow-500 mx-auto mb-2">
              <IconSun />
            </div>
            <h4 className="font-bold text-green-700">Sunlight</h4>
            <p className="text-sm text-green-600">Monitor sunlight exposure</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="w-8 h-8 text-blue-500 mx-auto mb-2">
              <IconDroplet />
            </div>
            <h4 className="font-bold text-green-700">Water</h4>
            <p className="text-sm text-green-600">Track rainfall and irrigation</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="w-8 h-8 text-gray-500 mx-auto mb-2">
              <IconWind />
            </div>
            <h4 className="font-bold text-green-700">Air Quality</h4>
            <p className="text-sm text-green-600">Check air quality metrics</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="w-8 h-8 text-green-500 mx-auto mb-2">
              <IconTree />
            </div>
            <h4 className="font-bold text-green-700">Growth</h4>
            <p className="text-sm text-green-600">Monitor tree health</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForestGuardian;