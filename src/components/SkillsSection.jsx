"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

function SkillGauge({ skill, index }) {
  const [animatedLevel, setAnimatedLevel] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(skill.level)
    }, index * 200)

    return () => clearTimeout(timer)
  }, [skill.level, index])

  const circumference = 2 * Math.PI * 45
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (animatedLevel / 100) * circumference

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.1, y: -10 }}
      className="relative group"
    >
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-red-500/30 relative overflow-hidden">
        {/* Holographic effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 text-center">
          {/* Skill Icon */}
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="text-4xl mb-4">
            {skill.icon}
          </motion.div>

          {/* Circular Progress */}
          <div className="relative w-24 h-24 mx-auto mb-4">
            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-gray-700"
              />
              {/* Progress circle */}
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                stroke="url(#gradient)"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
              {/* Gradient definition */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="50%" stopColor="#eab308" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Percentage in center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold text-white">{animatedLevel}%</span>
            </div>
          </div>

          {/* Skill Name */}
          <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>

          {/* Category */}
          <span className="text-sm text-gray-400">{skill.category}</span>

          {/* Speed indicator */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${animatedLevel}%` }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className="mt-3 h-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const skills = [
    // Frontend (Aerodynamics)
    { name: "React.js", level: 90, icon: "⚛️", category: "frontend" },
    { name: "JavaScript", level: 85, icon: "🟨", category: "frontend" },
    { name: "HTML/CSS", level: 95, icon: "🎨", category: "frontend" },
    { name: "Tailwind CSS", level: 90, icon: "💨", category: "frontend" },

    // Backend (Engine)
    { name: "Node.js", level: 85, icon: "🟢", category: "backend" },
    { name: "Python", level: 90, icon: "🐍", category: "backend" },
    { name: "C/C++", level: 85, icon: "⚡", category: "backend" },
    { name: "Java", level: 75, icon: "☕", category: "backend" },

    // Database (Telemetry)
    { name: "MongoDB", level: 85, icon: "🍃", category: "database" },
    { name: "PostgreSQL", level: 80, icon: "🐘", category: "database" },
    { name: "Redis", level: 75, icon: "🔴", category: "database" },
    { name: "SQL", level: 90, icon: "📊", category: "database" },

    // Tools (Pit Stop)
    { name: "Git", level: 90, icon: "📝", category: "tools" },
    { name: "Docker", level: 75, icon: "🐳", category: "tools" },
    { name: "AWS", level: 70, icon: "☁️", category: "tools" },
    { name: "Linux", level: 85, icon: "🐧", category: "tools" },
  ]

  const categories = [
    { key: "all", name: "All Systems", icon: "🏎️" },
    { key: "frontend", name: "Aerodynamics", icon: "🌪️" },
    { key: "backend", name: "Engine", icon: "🔧" },
    { key: "database", name: "Telemetry", icon: "📡" },
    { key: "tools", name: "Pit Stop", icon: "🛠️" },
  ]

  const filteredSkills = activeCategory === "all" ? skills : skills.filter((skill) => skill.category === activeCategory)

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.1,
            }}
            className="absolute w-1 h-1 bg-red-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
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
            <span className="text-red-500">TECH</span> <span className="text-white">GARAGE</span>
          </h2>
          <p className="text-xl text-gray-300">Engineering Bay - Performance Specifications</p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category) => (
            <motion.button
              key={category.key}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-3 rounded-full font-bold transition-all flex items-center space-x-2 ${
                activeCategory === category.key
                  ? "bg-gradient-to-r from-red-600 to-blue-600 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600"
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {filteredSkills.map((skill, index) => (
            <SkillGauge key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Performance Summary */}
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
              <h3 className="text-2xl font-bold mb-6">🏆 PERFORMANCE METRICS</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">16</div>
                  <div className="text-sm opacity-90">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">85%</div>
                  <div className="text-sm opacity-90">Avg Proficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">2+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">∞</div>
                  <div className="text-sm opacity-90">Learning Speed</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
