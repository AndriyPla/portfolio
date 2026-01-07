import React from 'react'
import './globals.css'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

export const metadata = {
  title: 'Andriy Plakosh — Engineering Portfolio',
  description: 'High school engineering & robotics portfolio',
}

export default function RootLayout({ children }:{children:React.ReactNode}){
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
