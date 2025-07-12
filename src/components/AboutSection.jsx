"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Calendar, Heart, Zap, Shield, Target } from "lucide-react"

export default function AboutSection() {
  const stats = [
    { label: "Projects", value: "15+", icon: "🚀" },
    { label: "Technologies", value: "12+", icon: "⚙️" },
    { label: "Experience", value: "2+ Years", icon: "📈" },
    { label: "Coffee Cups", value: "∞", icon: "☕" },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
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
            <span className="text-red-500">DRIVER</span> <span className="text-white">PROFILE</span>
          </h2>
          <p className="text-xl text-gray-300">Racing Through the Digital Highway</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Driver Card */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-red-500/30 relative overflow-hidden">
                {/* Holographic effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-blue-500/10 animate-pulse" />

                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500 to-blue-500 p-1"
                    >
                      <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-4xl">
                        👨‍💻
                      </div>
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-2">ABHISHEK YADAV</h3>
                    <div className="flex items-center justify-center space-x-2 text-red-500 font-bold">
                      <Zap size={16} />
                      <span>#01 DRIVER</span>
                      <Zap size={16} />
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3 p-3 bg-black/30 rounded-lg">
                      <MapPin className="text-red-500" size={20} />
                      <span>Your College Name, India</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-black/30 rounded-lg">
                      <Calendar className="text-blue-500" size={20} />
                      <span>Computer Science Engineering</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-black/30 rounded-lg">
                      <Heart className="text-yellow-500" size={20} />
                      <span>Drones, Automation, Innovation</span>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4">
                    {[
                      { icon: Github, color: "hover:bg-gray-700", href: "#" },
                      { icon: Linkedin, color: "hover:bg-blue-600", href: "#" },
                      { icon: Mail, color: "hover:bg-red-600", href: "#" },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 bg-gray-700 rounded-full text-white ${social.color} transition-all`}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Racing Stats & Info */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-red-500/30 text-center"
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-red-500">{stat.value}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-gradient-to-r from-red-500/20 to-transparent p-6 rounded-xl border-l-4 border-red-500"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <Shield className="text-red-500" size={24} />
                    <h4 className="text-xl font-bold">Education Sector</h4>
                  </div>
                  <p className="text-gray-300">
                    Currently pursuing Computer Science Engineering with focus on emerging technologies, maintaining
                    strong academic performance while exploring practical applications.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-gradient-to-r from-blue-500/20 to-transparent p-6 rounded-xl border-l-4 border-blue-500"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <Zap className="text-blue-500" size={24} />
                    <h4 className="text-xl font-bold">Passion Projects</h4>
                  </div>
                  <p className="text-gray-300">
                    Deeply interested in drone technology, automation systems, and IoT solutions. Always working on
                    projects that combine hardware and software innovation.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-gradient-to-r from-yellow-500/20 to-transparent p-6 rounded-xl border-l-4 border-yellow-500"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <Target className="text-yellow-500" size={24} />
                    <h4 className="text-xl font-bold">Career Goals</h4>
                  </div>
                  <p className="text-gray-300">
                    Aspiring to become a full-stack developer and tech innovator, contributing to cutting-edge projects
                    in AI, robotics, and sustainable technology.
                  </p>
                </motion.div>
              </div>

              {/* Racing Philosophy */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-red-600 to-blue-600 rounded-xl p-6 text-white relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-3 flex items-center">🏆 Racing Philosophy</h4>
                  <p className="italic text-lg">
                    "In technology, like in Formula 1, it's not just about speed—it's about precision, strategy, and the
                    relentless pursuit of perfection."
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
