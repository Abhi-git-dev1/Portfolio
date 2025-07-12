"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, 80)

    return () => clearInterval(timer)
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

      <div className="text-center z-10">
        {/* F1 Car Animation */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-8xl mb-8"
        >
          🏎️
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          <span className="text-red-500">STARTING</span> <span className="text-blue-500">ENGINES</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-white text-xl mb-8"
        >
          Initializing 3D Racing Experience...
        </motion.p>

        {/* Progress Bar */}
        <div className="w-80 mx-auto">
          <div className="flex justify-between text-white text-sm mb-2">
            <span>Loading Assets</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-full relative"
            >
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
          transition={{ delay: 2 }}
          className="mt-8 grid grid-cols-3 gap-8 text-white"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-red-500">3D</div>
            <div className="text-sm">Models</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-500">∞</div>
            <div className="text-sm">Animations</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-500">300</div>
            <div className="text-sm">km/h</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
