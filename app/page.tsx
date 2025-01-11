'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { TreesIcon as Tree, Droplet, Bike, Map, Users, Heart } from 'lucide-react'
import AnimatedHero from './components/AnimatedHero'
import Footer from './components/Footer'
import { useRef } from 'react'

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
    className="bg-white text-green-600 px-6 py-3 rounded-full font-bold text-lg hover:bg-green-100 transition-colors duration-300"
  >
       Explore
     </button>
     </div>


      </motion.div>
      <div ref={contentRef} className="min-h-screen bg-white py-16">
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
              bgColor="bg-green-100"
            />
            <FeatureCard
              href="/carbon-water-tracker"
              icon={<Droplet className="w-8 h-8" />}
              title="Carbon & Water Tracker"
              description="Track your personal carbon footprint and water consumption."
              bgColor="bg-blue-100"
            />
            <FeatureCard
              href="/challenges"
              icon={<Bike className="w-8 h-8" />}
              title="Ecosystem Challenges"
              description="Participate in weekly eco-friendly challenges."
              bgColor="bg-purple-100"
            />
            <FeatureCard
              href="/ecosystem-map"
              icon={<Map className="w-8 h-8" />}
              title="Ecosystem Health Visualization"
              description="Explore interactive maps of ecosystem health."
              bgColor="bg-red-100"
            />
            <FeatureCard
              href="/community"
              icon={<Users className="w-8 h-8" />}
              title="Community Collaboration"
              description="Connect with local authorities and eco-volunteer programs."
              bgColor="bg-indigo-100"
            />
            <FeatureCard
              title="Carbon Offset Contributions"
              description="Contribute to reforestation or water restoration projects."
              bgColor="bg-yellow-100"
              icon={<Heart className="w-8 h-8" />}
            />
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

interface FeatureCardProps {
  href?: string
  icon?: React.ReactNode
  title: string
  description: string
  bgColor: string
}

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


