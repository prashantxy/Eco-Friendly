'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { motion } from 'framer-motion'

const AnimatedHero = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x87CEEB)

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer()

    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)

    
    const treeGeometry = new THREE.ConeGeometry(1, 2, 32)
    const treeMaterial = new THREE.MeshPhongMaterial({ color: 0x228B22 }) 

    const trees: THREE.Mesh[] = []

    for (let i = 0; i < 100; i++) {
      const tree = new THREE.Mesh(treeGeometry, treeMaterial)
      tree.position.set(
        Math.random() * 40 - 20,
        0,
        Math.random() * 40 - 20
      )
      tree.scale.setScalar(Math.random() * 0.5 + 0.5)
      scene.add(tree)
      trees.push(tree)
    }

    const sunGeometry = new THREE.SphereGeometry(4, 32, 32) 
    const sunMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xFFFF00,
      transparent: true,
    })
    const sun = new THREE.Mesh(sunGeometry, sunMaterial)
    sun.position.set(10, 15, -10) 

    const glowGeometry = new THREE.SphereGeometry(4.2, 32, 32)
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xFFFF00,
      transparent: true,
      opacity: 0.3
    })
    const sunGlow = new THREE.Mesh(glowGeometry, glowMaterial)
    sun.add(sunGlow)
    scene.add(sun)

    
    const ambientLight = new THREE.AmbientLight(0x404040)
    scene.add(ambientLight)

 
    const sunLight = new THREE.DirectionalLight(0xFFFFFF, 1)
    sunLight.position.copy(sun.position)
    scene.add(sunLight)

    camera.position.z = 15
    camera.position.y = 5

    const animate = () => {
      requestAnimationFrame(animate)
      scene.rotation.y += 0.005
      
      trees.forEach(tree => {
        tree.rotation.y += 0.01
        tree.position.y = Math.sin(Date.now() * 0.001 + tree.position.x) * 0.1
      })

      const pulseIntensity = Math.sin(Date.now() * 0.001) * 0.2 + 0.5
      glowMaterial.opacity = pulseIntensity
      
      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <motion.div 
      ref={mountRef}
      className="h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="absolute inset-0 flex items-center justify-center text-white z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h1 className="text-6xl font-bold text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Welcome to
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="text-yellow-300"
          >
            EcoSystem Monitor
          </motion.span>
        </h1>
      </motion.div>
    </motion.div>
  )
}

export default AnimatedHero