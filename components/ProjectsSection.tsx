"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import { motion } from "framer-motion"
import { Github, ExternalLink, Play } from "lucide-react"
import type * as THREE from "three"

function ProjectTile({
  position,
  project,
  index,
}: { position: [number, number, number]; project: any; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime + index) * 0.1
    }
  })

  return (
    <Float speed={1 + index * 0.2} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[2, 1.2, 0.1]} />
        <meshStandardMaterial color={project.color} metalness={0.8} roughness={0.2} transparent opacity={0.9} />
      </mesh>
    </Float>
  )
}

function Projects3D() {
  const projects = [
    { color: "#ff0000", position: [-3, 1, 0] as [number, number, number] },
    { color: "#00ff00", position: [0, 0, 0] as [number, number, number] },
    { color: "#0066ff", position: [3, 1, 0] as [number, number, number] },
    { color: "#ffff00", position: [-1.5, -1, 1] as [number, number, number] },
    { color: "#ff00ff", position: [1.5, -1, 1] as [number, number, number] },
  ]

  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#ff0000" intensity={0.3} />

      {projects.map((project, index) => (
        <ProjectTile key={index} position={project.position} project={project} index={index} />
      ))}
    </Canvas>
  )
}

export default function ProjectsSection() {
  const projects = [
    {
      title: "Autonomous Drone System",
      description: "AI-powered drone with computer vision for autonomous navigation and obstacle avoidance.",
      tech: ["Python", "OpenCV", "TensorFlow", "Arduino", "ROS"],
      github: "#",
      demo: "#",
      icon: "🚁",
      color: "from-red-500 to-red-700",
    },
    {
      title: "Smart Campus IoT Network",
      description: "Comprehensive IoT ecosystem for campus automation with real-time monitoring and control.",
      tech: ["React", "Node.js", "MongoDB", "Arduino", "MQTT"],
      github: "#",
      demo: "#",
      icon: "🏫",
      color: "from-green-500 to-green-700",
    },
    {
      title: "AI Code Assistant",
      description: "Intelligent code completion tool with natural language processing and bug detection.",
      tech: ["Python", "Flask", "NLP", "VS Code API", "GPT"],
      github: "#",
      demo: "#",
      icon: "🤖",
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Racing Analytics Platform",
      description: "Real-time F1 data visualization with predictive analytics and performance insights.",
      tech: ["React", "D3.js", "Python", "FastAPI", "WebSocket"],
      github: "#",
      demo: "#",
      icon: "📊",
      color: "from-yellow-500 to-yellow-700",
    },
    {
      title: "Blockchain Voting System",
      description: "Secure, transparent voting platform using smart contracts and decentralized identity.",
      tech: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      github: "#",
      demo: "#",
      icon: "🗳️",
      color: "from-purple-500 to-purple-700",
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Suspense fallback={null}>
          <Projects3D />
        </Suspense>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-red-500">TECH</span> <span className="text-white">TRACK</span>
          </h2>
          <p className="text-xl text-gray-300">High-Performance Projects Built for Speed</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{
                y: -20,
                rotateY: 5,
                boxShadow: "0 30px 60px rgba(255, 0, 0, 0.3)",
                scale: 1.02,
              }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-red-500/30 relative overflow-hidden group"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Holographic overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Speed lines on hover */}
              <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -100, opacity: 0 }}
                    whileHover={{ x: 300, opacity: [0, 1, 0] }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="absolute h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
                    style={{ top: `${20 + i * 15}%` }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                {/* Project Icon & Actions */}
                <div className="flex items-center justify-between mb-4">
                  <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="text-4xl">
                    {project.icon}
                  </motion.div>
                  <div className="flex space-x-2">
                    <motion.a
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      href={project.github}
                      className="p-2 bg-gray-700 rounded-full hover:bg-red-600 transition-colors"
                    >
                      <Github size={16} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      href={project.demo}
                      className="p-2 bg-gray-700 rounded-full hover:bg-blue-600 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-400 transition-colors">{project.title}</h3>

                {/* Description */}
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-black/50 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Launch Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 bg-gradient-to-r ${project.color} rounded-lg font-bold flex items-center justify-center space-x-2 hover:shadow-lg transition-all`}
                >
                  <Play size={16} />
                  <span>LAUNCH PROJECT</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Racing Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl p-8 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">🏁 PROJECT PERFORMANCE</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">5</div>
                  <div className="text-sm opacity-90">Active Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm opacity-90">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm opacity-90">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">∞</div>
                  <div className="text-sm opacity-90">Innovation</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
