"use client"
import React, { useEffect, useState } from 'react'
import './globals.css'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

export const metadata = {
  title: 'Andriy Plakosh — Engineering Portfolio',
  description: 'High school engineering & robotics portfolio',
}

export default function RootLayout({ children }:{children:React.ReactNode}){
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  // Read theme from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') document.documentElement.classList.add('dark')
  }, [])

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow container-max py-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
