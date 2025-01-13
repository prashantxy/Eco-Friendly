'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { TreesIcon as Tree, Droplet, Bike, Map, Users, Heart, Bot, X, Send, User } from 'lucide-react'
import { useState, useRef } from 'react'
import AnimatedHero from './components/AnimatedHero'
import Footer from './components/Footer'

// Types
interface Message {
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
}

interface FeatureCardProps {
  href?: string
  icon?: React.ReactNode
  title: string
  description: string
  bgColor: string
}

const FloatingEcoChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content: "Hello! I'm your EcoVerse guide. Ask me anything about environmental topics, sustainability, or how you can help protect our planet!",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, {
      type: 'user',
      content: input,
      timestamp: new Date()
    }]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: "I'm a demo bot. In a real app, I would provide detailed information about environmental topics!",
        timestamp: new Date()
      }]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 text-black p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-200 flex items-center gap-2"
        >
          <Bot className="w-6 h-6" />
          <span className="font-medium">Ask EcoAI</span>
        </button>
      ) : (
        <div className="bg-blue-600 rounded-lg shadow-xl w-96 h-[600px] flex flex-col">
          <div className="bg-green-600 p-4 rounded-t-lg flex justify-between items-center">
            <h2 className="text-black text-lg font-semibold flex items-center gap-2">
              <Bot className="w-6 h-6" />
              EcoVerse Assistant
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-green-100"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-2 mb-4 ${
                  message.type === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                {message.type === 'bot' ? (
                  <Bot className="w-6 h-6 text-green-600 mt-1" />
                ) : (
                  <User className="w-6 h-6 text-blue-600 mt-1" />
                )}
                <div
                  className={`p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-black'
                      : 'bg-blue-600 shadow-sm'
                  }`}
                >
                  <p>{message.content}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2">
                <Bot className="w-6 h-6 text-green-600" />
                <div className="bg-blue-600 p-3 rounded-lg shadow-sm">
                  <p>Thinking...</p>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about environmental topics..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-green-600 text-black p-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                <Send className="w-6 h-6" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({ href, icon, title, description, bgColor }) => {
  const content = (
    <motion.div 
      className={`p-6 ${bgColor} rounded-lg shadow-md hover:shadow-lg transition-shadow`}
      variants={{
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1 }
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && (
        <motion.div 
          className="mb-4"
          initial={{ rotate: 0 }}
        >
          {icon}
        </motion.div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </motion.div>
  )

  return href ? <Link href={href}>{content}</Link> : content
}

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null)

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div>
      <AnimatedHero />
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex justify-center items-center">
          <button
            onClick={scrollToContent}
            className="bg-black text-green-600 px-6 py-3 rounded-full font-bold text-lg hover:bg-green-100 transition-colors duration-300"
          >
            Explore
          </button>
        </div>
      </motion.div>

      <div ref={contentRef} className="min-h-screen bg-blue-300 py-16">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            Discover Our Features
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            <FeatureCard
              href="/forest-reserve"
              icon={<Tree className="w-8 h-8" />}
              title="Forest Reserve Monitoring"
              description="Monitor real-time health stats of selected forest reserves."
              bgColor="bg-green-600"
            />
            <FeatureCard
              href="/carbon-water-tracker"
              icon={<Droplet className="w-8 h-8" />}
              title="Carbon & Water Tracker"
              description="Track your personal carbon footprint and water consumption."
              bgColor="bg-blue-600"
            />
            <FeatureCard
              href="/challenges"
              icon={<Bike className="w-8 h-8" />}
              title="Ecosystem Challenges"
              description="Participate in weekly eco-friendly challenges."
              bgColor="bg-purple-600"
            />
            <FeatureCard
              href="/ecosystem-map"
              icon={<Map className="w-8 h-8" />}
              title="Ecosystem Health Visualization"
              description="Explore interactive maps of ecosystem health."
              bgColor="bg-red-600"
            />
            <FeatureCard
              href="/community"
              icon={<Users className="w-8 h-8" />}
              title="Community Collaboration"
              description="Connect with local authorities and eco-volunteer programs."
              bgColor="bg-indigo-600"
            />
            <FeatureCard
              title="Carbon Offset Contributions"
              description="Contribute to reforestation or water restoration projects."
              bgColor="bg-yellow-600"
              icon={<Heart className="w-8 h-8" />}
            />
          </motion.div>
        </motion.div>
      </div>
      
      <FloatingEcoChat />
      <Footer />
    </div>
  )
}
