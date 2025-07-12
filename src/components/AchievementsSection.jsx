"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import { motion } from "framer-motion"
import { Trophy, Medal, Award, Star, Zap } from "lucide-react"

function Podium3D() {
  const group = useRef(null)

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group ref={group}>
      {/* First Place */}
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[1, 2, 1]} />
          <meshStandardMaterial color="#ffd700" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>

      {/* Second Place */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
        <mesh position={[-2, 0, 0]}>
          <boxGeometry args={[1, 1.5, 1]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>

      {/* Third Place */}
      <Float speed={1.8} rotationIntensity={0.1} floatIntensity={0.25}>
        <mesh position={[2, -0.25, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#cd7f32" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>
    </group>
  )
}

function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 2, 8], fov: 60 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[0, 5, 0]} color="#ffd700" intensity={0.5} />

      <Podium3D />
    </Canvas>
  )
}

export default function AchievementsSection() {
  const achievements = [
    {
      position: 1,
      title: "TechFest Hackathon Winner",
      event: "National Level Competition",
      description: "First place in AI/ML category for innovative drone delivery solution with autonomous navigation",
      date: "March 2024",
      icon: Trophy,
      color: "from-yellow-400 to-yellow-600",
      points: "1000 pts",
    },
    {
      position: 2,
      title: "CEED Support Program",
      event: "Innovation Grant Recipient",
      description: "Selected for entrepreneurship development program with funding support for tech startup",
      date: "January 2024",
      icon: Award,
      color: "from-gray-300 to-gray-500",
      points: "800 pts",
    },
    {
      position: 3,
      title: "Academic Excellence",
      event: "Top Performer",
      description: "Maintained 9.2+ CGPA with distinction in core Computer Science subjects",
      date: "Ongoing",
      icon: Medal,
      color: "from-orange-400 to-orange-600",
      points: "750 pts",
    },
    {
      position: 4,
      title: "Open Source Contributor",
      event: "GitHub Recognition",
      description: "Active contributor to multiple open-source projects with 100+ commits and community impact",
      date: "2023-2024",
      icon: Star,
      color: "from-blue-400 to-blue-600",
      points: "600 pts",
    },
  ]

  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* 3D Podium Background */}
      <div className="absolute inset-0 opacity-20">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-100vh", opacity: [0, 1, 0] }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
              ease: "linear",
            }}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
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
            <span className="text-yellow-500">PODIUM</span> <span className="text-white">CEREMONY</span>
          </h2>
          <p className="text-xl text-gray-300">Championship Results & Racing Achievements</p>
        </motion.div>

        {/* Podium Visual */}
        <div className="flex justify-center items-end mb-16 space-x-8">
          {[2, 1, 3].map((position) => {
            const achievement = achievements.find((a) => a.position === position)
            if (!achievement) return null

            const heights = { 1: "h-40", 2: "h-32", 3: "h-24" }
            const delays = { 1: 0.5, 2: 0.3, 3: 0.7 }

            return (
              <motion.div
                key={position}
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: delays[position] }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`bg-gradient-to-t ${achievement.color} ${heights[position]} w-32 rounded-t-lg flex flex-col items-center justify-end pb-6 relative cursor-pointer`}
              >
                <div className="text-white font-bold text-3xl mb-2">{position}</div>
                <achievement.icon className="text-white" size={32} />

                {position === 1 && (
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute -top-12 text-6xl"
                  >
                    👑
                  </motion.div>
                )}

                {/* Fireworks for first place */}
                {position === 1 && (
                  <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 1 }}
                        animate={{ scale: [0, 1, 0], opacity: [1, 1, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.2,
                        }}
                        className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                        style={{
                          transform: `rotate(${i * 45}deg) translateY(-20px)`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Achievement Cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 border border-yellow-500/30 relative overflow-hidden group"
            >
              {/* Racing stripe */}
              <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${achievement.color}`} />

              {/* Holographic effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center space-x-6 relative z-10">
                {/* Achievement Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className={`p-6 rounded-full bg-gradient-to-r ${achievement.color} text-white relative`}
                >
                  <achievement.icon size={32} />

                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${achievement.color} blur-lg opacity-50 animate-pulse`}
                  />
                </motion.div>

                {/* Achievement Details */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {achievement.title}
                    </h3>
                    <div className="flex items-center space-x-3">
                      <span className="text-yellow-400 font-bold">{achievement.points}</span>
                      <span className="text-gray-400 text-sm">{achievement.date}</span>
                    </div>
                  </div>

                  <p className="text-blue-400 font-semibold mb-3 text-lg">{achievement.event}</p>
                  <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                </div>

                {/* Position Badge */}
                <div className="text-right">
                  <motion.div whileHover={{ scale: 1.1 }} className="text-6xl font-bold text-gray-600 opacity-50">
                    #{achievement.position}
                  </motion.div>
                </div>
              </div>

              {/* Speed lines on hover */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 3 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -100, opacity: 0 }}
                    whileHover={{ x: 400, opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="absolute h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
                    style={{ top: `${30 + i * 20}%` }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Championship Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-yellow-600 to-red-600 rounded-2xl p-8 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20" />

            {/* Trophy animation */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="absolute top-4 right-4 text-4xl"
            >
              🏆
            </motion.div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 flex items-center justify-center space-x-3">
                <Zap className="text-yellow-300" size={32} />
                <span>CHAMPIONSHIP STATUS</span>
                <Zap className="text-yellow-300" size={32} />
              </h3>

              <p className="text-xl mb-8 leading-relaxed">
                Currently leading the innovation championship with consistent podium finishes and breakthrough technical
                achievements across multiple racing categories.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                  <div className="text-4xl font-bold mb-2">4</div>
                  <div className="text-sm opacity-90">Podium Finishes</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                  <div className="text-4xl font-bold mb-2">2</div>
                  <div className="text-sm opacity-90">Championships</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <div className="text-sm opacity-90">Success Rate</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                  <div className="text-4xl font-bold mb-2">∞</div>
                  <div className="text-sm opacity-90">Potential</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
