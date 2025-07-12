"use client"

import { useEffect, useRef } from "react"

interface AudioManagerProps {
  soundEnabled: boolean
}

export default function AudioManager({ soundEnabled }: AudioManagerProps) {
  const audioContextRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    if (soundEnabled && !audioContextRef.current) {
      // Initialize audio context for sound effects
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    }

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close()
        audioContextRef.current = null
      }
    }
  }, [soundEnabled])

  // Function to play engine sound (placeholder)
  const playEngineSound = () => {
    if (!soundEnabled || !audioContextRef.current) return

    const context = audioContextRef.current
    const oscillator = context.createOscillator()
    const gainNode = context.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(context.destination)

    oscillator.frequency.setValueAtTime(100, context.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(300, context.currentTime + 0.5)

    gainNode.gain.setValueAtTime(0.1, context.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.5)

    oscillator.start(context.currentTime)
    oscillator.stop(context.currentTime + 0.5)
  }

  // Add event listeners for sound effects
  useEffect(() => {
    if (!soundEnabled) return

    const handleClick = () => playEngineSound()

    // Add click sound to buttons
    const buttons = document.querySelectorAll("button")
    buttons.forEach((button) => {
      button.addEventListener("click", handleClick)
    })

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", handleClick)
      })
    }
  }, [soundEnabled])

  return null
}
