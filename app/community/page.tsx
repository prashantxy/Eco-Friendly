'use client'

import { Users, AlertTriangle, Leaf, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import { Select } from "../components/ui/select"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Community() {
 return (
  <div className="min-h-screen bg-gradient-to-b from-sky-200 to-sky-400 p-8">
    <motion.h1 
      className="text-5xl font-bold mb-12 text-center text-green-800"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Users className="inline mr-3 mb-2" /> Community Collaboration
    </motion.h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <motion.div {...fadeIn}>
        <Card className="bg-green-500 text-black hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-white">
              <Leaf className="mr-2 text-green-600" /> Local Authorities
            </CardTitle>
            <CardDescription className="text-white">Connect with forest reserve authorities</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>Forest Department Helpline: 1-800-FOREST</li>
              <li>Email: foresthelp@example.com</li>
              <li>Visit: www.localforestauthority.com</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-green-600 hover:bg-green-700">Contact Now</Button>
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
        <Card className="bg-green-500 text-black hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-white">
              <Users className="mr-2 text-blue-600" /> Eco-Volunteer Programs
            </CardTitle>
            <CardDescription className="text-white">Join local conservation efforts</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>Weekend Forest Cleanup</li>
              <li>Tree Planting Initiative</li>
              <li>Wildlife Habitat Restoration</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Sign Up</Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>

    <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
      <Card className="mb-12 bg-green-500 text-black hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl text-white">
            <AlertTriangle className="mr-2 text-yellow-600" /> Report Harmful Activities
          </CardTitle>
          <CardDescription className="text-white">Help us protect our ecosystem</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Name</Label>
                <Input id="name" placeholder="Your name" className="bg-white/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input id="email" type="email" placeholder="Your email" className="bg-white/50" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="activity-type" className="text-black">Type of Activity</Label>
              <Select
                options={[
                  { value: "illegal-logging", label: "Illegal Logging" },
                  { value: "poaching", label: "Poaching" },
                  { value: "waste-dumping", label: "Waste Dumping" },
                  { value: "other", label: "Other" },
                ]}
                placeholder="Select activity type"
                className="bg-white/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description" className="text-white">Description</Label>
              <Textarea id="description" placeholder="Describe the harmful activity you observed" className="bg-white/50" />
            </div>
            <Button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-700">
              <Send className="mr-2" /> Submit Report
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>

    <motion.p 
      className="text-center text-white text-lg font-semibold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      Together, we can make a difference in preserving our local ecosystems.
    </motion.p>
  </div>
)
}

