'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Droplet, Car, Lightbulb, Utensils, Wind, 
  Home, Monitor, Leaf, 
  AlertCircle, ChevronDown, ArrowRight 
} from 'lucide-react';

type Category = {
  icon: React.ComponentType<any>;
  fields: {
    id: string;
    label: string;
    carbonPerUnit: number;
    waterPerUnit: number;
  }[];
};

const categories: Record<string, Category> = {
  transport: {
    icon: Car,
    fields: [
      { id: 'carKm', label: 'Car Distance (km/day)', carbonPerUnit: 0.2, waterPerUnit: 0 },
      { id: 'publicTransport', label: 'Public Transport (trips/day)', carbonPerUnit: 0.05, waterPerUnit: 0 },
    ]
  },
  household: {
    icon: Home,
    fields: [
      { id: 'showerTime', label: 'Shower Duration (minutes/day)', carbonPerUnit: 0.1, waterPerUnit: 9.5 },
      { id: 'washingLoads', label: 'Laundry Loads (per week)', carbonPerUnit: 0.6, waterPerUnit: 50 },
      { id: 'dishwasherLoads', label: 'Dishwasher Loads (per week)', carbonPerUnit: 0.5, waterPerUnit: 15 },
    ]
  },
  energy: {
    icon: Lightbulb,
    fields: [
      { id: 'acHours', label: 'AC Usage (hours/day)', carbonPerUnit: 0.4, waterPerUnit: 0 },
      { id: 'tvHours', label: 'TV Usage (hours/day)', carbonPerUnit: 0.1, waterPerUnit: 0 },
      { id: 'computerHours', label: 'Monitor Usage (hours/day)', carbonPerUnit: 0.1, waterPerUnit: 0 },
    ]
  },
  food: {
    icon: Utensils,
    fields: [
      { id: 'meatMeals', label: 'Meat-based Meals (per day)', carbonPerUnit: 3.3, waterPerUnit: 4000 },
      { id: 'vegetarianMeals', label: 'Vegetarian Meals (per day)', carbonPerUnit: 0.5, waterPerUnit: 1000 },
    ]
  }
};

export default function CarbonWaterTracker() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [formData, setFormData] = useState<{ [key: string]: number }>({});
  const [impact, setImpact] = useState({ carbon: 0, water: 0 });
  const [showTips, setShowTips] = useState(false);

  const calculateImpact = () => {
    let totalCarbon = 0;
    let totalWater = 0;

    Object.entries(categories).forEach(([category, { fields }]) => {
      fields.forEach(({ id, carbonPerUnit, waterPerUnit }) => {
        const value = Number(formData[id] || 0);
        totalCarbon += value * carbonPerUnit;
        totalWater += value * waterPerUnit;
      });
    });

    setImpact({ 
      carbon: totalCarbon, 
      water: totalWater 
    });
  };

  useEffect(() => {
    calculateImpact();
  }, [formData]);

  const handleInputChange = (id: string, value: string) => {
    setFormData(prev => ({ 
      ...prev, 
      [id]: value === '' ? 0 : Number(value)  // Ensure the value is always a number
    }));
  };
  

  const getImpactLevel = () => {
    const total = impact.carbon;
    if (total < 10) return { color: 'text-green-500', message: 'Low Impact' };
    if (total < 20) return { color: 'text-yellow-500', message: 'Moderate Impact' };
    return { color: 'text-red-500', message: 'High Impact' };
  };

return (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="min-h-screen bg-gradient-to-br from-blue-500 to-green-500"
  >
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl mx-auto p-6 space-y-8"
    >
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="bg-gradient-to-r from-green-600 to-blue-500 rounded-xl p-8 text-black shadow-xl"
      >
        <motion.h1 
          className="text-4xl font-bold mb-4 flex items-center"
          initial={{ x: -20 }}
          animate={{ x: 0 }}
        >
          <Droplet className="mr-3 h-8 w-8" />
          Environmental Impact Calculator
        </motion.h1>
        <p className="text-lg opacity-90">Track your daily carbon footprint and water consumption</p>
      </motion.div>

      {/* Main content remains unchanged */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-xl shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Droplet className="text-green-600 h-6 w-6 mr-2" />
              <h2 className="text-xl font-semibold text-black">Water Usage</h2>
            </div>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-3xl font-bold text-green-700"
            >
              {impact.water.toFixed(1)}L
            </motion.span>
          </div>
          <motion.div 
            className="mt-4 h-2 bg-green-200 rounded-full overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
          >
            <motion.div 
              className="h-full bg-green-500"
              initial={{ width: '0%' }}
              animate={{ width: `${Math.min((impact.water / 1000) * 100, 100)}%` }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Wind className="text-blue-600 h-6 w-6 mr-2" />
              <h2 className="text-xl font-semibold text-black">Carbon Footprint</h2>
            </div>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-3xl font-bold text-blue-700"
            >
              {impact.carbon.toFixed(1)}kg
            </motion.span>
          </div>
          <motion.div 
            className="mt-4 h-2 bg-blue-200 rounded-full overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
          >
            <motion.div 
              className="h-full bg-blue-500"
              initial={{ width: '0%' }}
              animate={{ width: `${Math.min((impact.carbon / 30) * 100, 100)}%` }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Other sections remain unchanged */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-green-400 rounded-xl shadow-lg p-6"
      >
        <h2 className="text-2xl font-semibold mb-6 text-black">Track Your Usage</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {Object.entries(categories).map(([id, { icon: Icon }]) => (
            <motion.button
              key={id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCategory(activeCategory === id ? null : id)}
              className={`p-4 rounded-lg transition-all ${
                activeCategory === id 
                  ? 'bg-green-500 text-blue-600 shadow-lg' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <Icon className="w-6 h-6 mx-auto mb-2 text-black" />
              <p className="text-sm font-medium capitalize text-black">{id}</p>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeCategory && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                {categories[activeCategory].fields.map(({ id, label }) => (
                  <motion.div
                    key={id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium text-blue-600">{label}</label>
                    <input
                      type="number"
                      value={formData[id] || ''}
                      onChange={(e) => handleInputChange(id, e.target.value)}
                      className=" text-green-600 w-full p-2 border rounded-md"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mt-8"
      >
        <h3 className={`text-3xl font-bold ${getImpactLevel().color}`}>{getImpactLevel().message}</h3>
      </motion.div>
    </motion.div>
  </motion.div>
);
}
