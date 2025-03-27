import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ChemTech - Innovative Chemical Solutions",
  description:
    "Pioneering sustainable chemical solutions with cutting-edge technology and research to shape the future of industry.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'