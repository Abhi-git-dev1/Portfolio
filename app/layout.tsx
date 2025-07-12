import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abhishek Yadav - F1 Portfolio",
  
  description:
    "Computer Science Student | Tech Enthusiast | Future Innovation Driver - Racing through the fast lane of technology",
  keywords: "portfolio, computer science, web developer, F1, racing, technology, innovation",
  authors: [{ name: "Abhishek Yadav" }],
  openGraph: {
    title: "Abhishek Yadav - F1 Portfolio",
    description: "Engineering in the Fast Lane of Innovation",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
