"use client"

import { motion } from "framer-motion"
import { Menu, X, Volume2, VolumeX } from "lucide-react"
import { useState } from "react"

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
  soundEnabled: boolean
  setSoundEnabled: (value: boolean) => void
}

export default function Header({ darkMode, setDarkMode, soundEnabled, setSoundEnabled }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Garage", href: "#home", icon: "🏠" },
    { name: "Driver", href: "#about", icon: "👨‍💻" },
    { name: "Track", href: "#projects", icon: "🏁" },
    { name: "Tech Bay", href: "#skills", icon: "⚙️" },
    { name: "Podium", href: "#achievements", icon: "🏆" },
    { name: "Radio", href: "#contact", icon: "📻" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay: 4.5 }}
      className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-red-500/30"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05, rotate: 2 }} className="text-2xl font-bold">
            <span className="text-red-500">AY</span>
            <span className="text-white">.</span>
            <span className="text-blue-500">RACING</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 5 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex items-center space-x-2 text-white hover:text-red-500 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-white/10"
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </motion.a>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Sound Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 rounded-full bg-gray-800 text-white hover:bg-red-600 transition-colors"
            >
              {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </motion.button>

            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-800 text-white hover:bg-blue-600 transition-colors"
            >
              {darkMode ? "🌙" : "☀️"}
            </motion.button>

            {/* Mobile Menu */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-white hover:text-red-500">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-gray-700"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-3 py-3 text-white hover:text-red-500 transition-colors"
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </a>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
