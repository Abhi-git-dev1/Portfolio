"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [showName, setShowName] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 1.5
      })
    }, 80)

    // Show name animation after 2 seconds
    const nameTimer = setTimeout(() => {
      setShowName(true)
    }, 2000)

    return () => {
      clearInterval(timer)
      clearTimeout(nameTimer)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Racing track background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-1 top-1/3 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-1 top-1/2 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-1 top-2/3 animate-pulse" />
      </div>

      {/* Racing Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="loading-grid w-full h-full" />
      </div>

      <div className="text-center z-10 relative">
        {/* Initial F1 Car Animation */}
        <motion.div
          initial={{ x: -300, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="text-8xl mb-8 relative"
        >
          🏎️
          {/* Exhaust flames */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.3, repeat: Number.POSITIVE_INFINITY }}
            className="absolute -left-16 top-1/2 transform -translate-y-1/2 text-4xl"
          >
            🔥
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.4, repeat: Number.POSITIVE_INFINITY, delay: 0.1 }}
            className="absolute -left-12 top-1/2 transform -translate-y-1/2 text-3xl"
          >
            💨
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          <span className="text-red-500">STARTING</span> <span className="text-blue-500">ENGINES</span>
        </motion.h1>

        {/* Name Animation with F1 Car */}
        {showName && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8 relative"
          >
            {/* Racing Name Banner */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 h-2 rounded-full mb-4 relative overflow-hidden"
            >
              <motion.div
                animate={{ x: [-50, 400] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-20"
              />
            </motion.div>

            {/* Driver Name with F1 Car */}
            <div className="flex items-center justify-center space-x-4 mb-4">
              <motion.div
                initial={{ x: -100, rotate: -10 }}
                animate={{ x: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                className="text-6xl"
              >
                🏎️
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                  <span className="text-red-500">ABHISHEK</span> <span className="text-blue-500">YADAV</span>
                </h2>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="h-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-full"
                />
              </motion.div>

              <motion.div
                initial={{ x: 100, rotate: 10 }}
                animate={{ x: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                className="text-6xl"
              >
                🏁
              </motion.div>
            </div>

            {/* Driver Number */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="inline-block bg-gradient-to-r from-yellow-400 to-red-500 text-black font-bold text-2xl px-6 py-2 rounded-full mb-4"
            >
              #01 DRIVER
            </motion.div>
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="text-white text-xl mb-8"
        >
          Initializing 3D Racing Experience...
        </motion.p>

        {/* Enhanced Progress Bar */}
        <div className="w-80 mx-auto">
          <div className="flex justify-between text-white text-sm mb-2">
            <span>Loading Assets</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden border-2 border-red-500/30">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-full relative"
            >
              {/* Racing car on progress bar */}
              <motion.div
                animate={{ x: [-30, 20] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl"
              >
                🏎️
              </motion.div>

              <motion.div
                animate={{ x: [-20, 100] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </motion.div>
          </div>
        </div>

        {/* Racing Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4 }}
          className="mt-8 grid grid-cols-3 gap-8 text-white"
        >
          <motion.div whileHover={{ scale: 1.1 }} className="text-center">
            <div className="text-2xl font-bold text-red-500">3D</div>
            <div className="text-sm">Models</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="text-center">
            <div className="text-2xl font-bold text-yellow-500">∞</div>
            <div className="text-sm">Animations</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="text-center">
            <div className="text-2xl font-bold text-blue-500">300</div>
            <div className="text-sm">km/h</div>
          </motion.div>
        </motion.div>

        {/* Checkered Flag Animation */}
        <motion.div
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 4.5, duration: 1 }}
          className="absolute top-10 right-10 text-6xl"
        >
          🏁
        </motion.div>

        {/* Trophy Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 1 }}
          className="absolute bottom-10 left-10 text-5xl"
        >
          🏆
        </motion.div>
      </div>

      {/* Speed Lines Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: "100vw", opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
              ease: "linear",
            }}
            className="absolute h-1 w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent"
            style={{ top: `${10 + i * 5}%` }}
          />
        ))}
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", x: Math.random() * window.innerWidth, opacity: 0 }}
            animate={{ y: "-100vh", opacity: [0, 1, 0] }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
              ease: "linear",
            }}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
          />
        ))}
      </div>
    </motion.div>
  )
}
