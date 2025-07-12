"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Send, Phone, Mail, MapPin, Github, Linkedin, Twitter, Radio, Zap } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isConnected, setIsConnected] = useState(true)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate radio transmission
    setTimeout(() => {
      setIsSubmitting(false)
      alert("📻 Transmission received! Message sent successfully! 🏁")
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Radio Wave Effects */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: [0, 4, 0], opacity: [1, 0.5, 0] }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.8,
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-blue-500 rounded-full"
            style={{ width: "100px", height: "100px" }}
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
            <span className="text-blue-500">RADIO</span> <span className="text-white">CHANNEL</span>
          </h2>
          <p className="text-xl text-gray-300">Open Communication Line - Ready to Receive Transmission</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Radio Control Panel */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-blue-500/30 relative overflow-hidden">
                {/* Control Panel Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold flex items-center space-x-3">
                    <Radio className="text-blue-500" size={28} />
                    <span>PIT RADIO</span>
                  </h3>

                  <div className="flex items-center space-x-2">
                    <motion.div
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className={`w-3 h-3 rounded-full ${isConnected ? "bg-green-500" : "bg-red-500"}`}
                    />
                    <span className="text-sm text-gray-400">{isConnected ? "CONNECTED" : "OFFLINE"}</span>
                  </div>
                </div>

                {/* Radio Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                        <span>📡</span>
                        <span>Call Sign (Name)</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-blue-500/30 bg-black/50 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-500"
                        placeholder="Your call sign"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                        <span>📻</span>
                        <span>Frequency (Email)</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-blue-500/30 bg-black/50 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-500"
                        placeholder="your.frequency@radio.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                      <span>🎯</span>
                      <span>Transmission Code</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-blue-500/30 bg-black/50 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-500"
                      placeholder="Message classification"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                      <span>💬</span>
                      <span>Message Content</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-blue-500/30 bg-black/50 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none placeholder-gray-500"
                      placeholder="Your message transmission..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-red-600 text-white py-4 px-6 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>TRANSMITTING...</span>
                        <Radio size={20} />
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>SEND TRANSMISSION</span>
                        <Zap size={20} />
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Radio Static Effect */}
                {isSubmitting && <div className="absolute inset-0 bg-blue-500/10 animate-pulse pointer-events-none" />}
              </div>
            </motion.div>

            {/* Communication Hub */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Direct Channels */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3">
                  <span>📡</span>
                  <span>Direct Communication Channels</span>
                </h3>

                <div className="space-y-4">
                  <motion.div
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-red-500/30 group"
                  >
                    <div className="p-3 bg-red-500/20 rounded-full group-hover:bg-red-500/40 transition-colors">
                      <Mail className="text-red-400" size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-white">Primary Channel</p>
                      <p className="text-gray-300">abhishek.yadav@example.com</p>
                    </div>
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="ml-auto text-red-400"
                    >
                      📶
                    </motion.div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-green-500/30 group"
                  >
                    <div className="p-3 bg-green-500/20 rounded-full group-hover:bg-green-500/40 transition-colors">
                      <Phone className="text-green-400" size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-white">Emergency Line</p>
                      <p className="text-gray-300">+91 XXXXX XXXXX</p>
                    </div>
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      className="ml-auto text-green-400"
                    >
                      📞
                    </motion.div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-yellow-500/30 group"
                  >
                    <div className="p-3 bg-yellow-500/20 rounded-full group-hover:bg-yellow-500/40 transition-colors">
                      <MapPin className="text-yellow-400" size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-white">Base Location</p>
                      <p className="text-gray-300">Your City, India</p>
                    </div>
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                      className="ml-auto text-yellow-400"
                    >
                      📍
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Social Racing Network */}
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center space-x-2">
                  <span>🌐</span>
                  <span>Social Racing Network</span>
                </h4>

                <div className="flex space-x-4">
                  {[
                    { icon: Github, color: "hover:bg-gray-700", href: "#", name: "GitHub" },
                    { icon: Linkedin, color: "hover:bg-blue-600", href: "#", name: "LinkedIn" },
                    { icon: Twitter, color: "hover:bg-blue-400", href: "#", name: "Twitter" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2, rotate: 10, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-4 bg-gray-800 rounded-full text-gray-300 ${social.color} hover:text-white transition-all relative group`}
                    >
                      <social.icon size={28} />

                      {/* Spark effect on hover */}
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full blur-lg"
                      />

                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        {social.name}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Racing Quote */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-r from-red-600 to-blue-600 rounded-xl p-6 text-white relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/20" />

                {/* Racing flag animation */}
                <motion.div
                  animate={{ x: [0, 10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute top-4 right-4 text-3xl"
                >
                  🏁
                </motion.div>

                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-3 flex items-center space-x-2">
                    <Zap className="text-yellow-300" size={24} />
                    <span>Ready to Race?</span>
                  </h4>
                  <p className="italic text-lg leading-relaxed mb-4">
                    "The best way to predict the future is to create it. Let's build something amazing together and push
                    the boundaries of what's possible!"
                  </p>
                  <p className="text-right font-bold text-yellow-300">- Abhishek Yadav, #01 Driver</p>
                </div>
              </motion.div>

              {/* Response Time Guarantee */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-4 text-center"
              >
                <h5 className="font-bold mb-2">⚡ Lightning Fast Response</h5>
                <p className="text-sm">Guaranteed response within 24 hours - Racing speed communication!</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
