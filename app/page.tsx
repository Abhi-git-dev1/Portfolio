"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Header from "@/components/Header"
import LoadingScreen from "@/components/LoadingScreen"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ProjectsSection from "@/components/ProjectsSection"
import SkillsSection from "@/components/SkillsSection"
import AchievementsSection from "@/components/AchievementsSection"
import ContactSection from "@/components/ContactSection"
import AudioManager from "@/components/AudioManager"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? "dark" : ""}`}>
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

      {!isLoading && (
        <>
          <AudioManager soundEnabled={soundEnabled} />
          <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            soundEnabled={soundEnabled}
            setSoundEnabled={setSoundEnabled}
          />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <AchievementsSection />
          <ContactSection />
        </>
      )}
    </div>
  )
}
