"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Float } from "@react-three/drei"
import { motion } from "framer-motion"

function F1Car() {
  const meshRef = useRef(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={[2, 1, 4]}>
        <boxGeometry args={[1, 0.3, 2]} />
        <meshStandardMaterial color="#ff0000" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Wheels */}
      <mesh position={[-0.8, -0.3, 0.8]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[0.8, -0.3, 0.8]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[-0.8, -0.3, -0.8]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[0.8, -0.3, -0.8]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
    </Float>
  )
}

function RacingTrack() {
  return (
    <group>
      {/* Track surface */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>

      {/* Racing lines */}
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.9, -20 + i * 4]}>
          <planeGeometry args={[1, 0.2]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      ))}
    </group>
  )
}

function Scene3D() {
  return (
    <Canvas camera={{ position: [5, 3, 5], fov: 60 }} style={{ height: "100vh", width: "100%" }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#ff0000" intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#0066ff" intensity={0.5} />

        <F1Car />
        <RacingTrack />

        <Environment preset="night" />
        <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} />
      </Suspense>
    </Canvas>
  )
}

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-black">
      {/* 3D Scene Background */}
      <div className="absolute inset-0">
        <Scene3D />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 7 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 7.5 }}
              className="text-4xl md:text-7xl font-bold mb-6"
            >
              <span className="text-red-500">Hi, I'm</span> <span className="text-white">Abhishek Yadav</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 8 }}
              className="text-xl md:text-3xl mb-8 text-blue-400"
            >
              Student Engineer | Speed-Driven Technologist
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 8.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 0, 0, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full font-bold text-lg shadow-lg border-2 border-red-500"
              >
                🏁 START RACE
              </motion.button>

              <motion.button
                onClick={scrollToAbout}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 102, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-all"
              >
                📊 VIEW TELEMETRY
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Racing HUD Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 9 }}
        className="absolute top-20 left-4 text-white font-mono text-sm"
      >
        <div className="bg-black/70 p-4 rounded border border-red-500">
          <div className="text-red-500 mb-2">DRIVER STATUS</div>
          <div>SPEED: 300 km/h</div>
          <div>GEAR: 7th</div>
          <div>RPM: 18,000</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 9.5 }}
        className="absolute top-20 right-4 text-white font-mono text-sm"
      >
        <div className="bg-black/70 p-4 rounded border border-blue-500">
          <div className="text-blue-500 mb-2">SYSTEM STATUS</div>
          <div>ENGINE: OPTIMAL</div>
          <div>TYRES: FRESH</div>
          <div>FUEL: 100%</div>
        </div>
      </motion.div>

      {/* Speed Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: "100vw", opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.1,
              ease: "linear",
            }}
            className="absolute h-0.5 w-20 bg-gradient-to-r from-transparent via-red-500 to-transparent"
            style={{ top: `${10 + i * 4}%` }}
          />
        ))}
      </div>
    </section>
  )
}
