"use client"
import Link from 'next/link'
import React from 'react'
import DarkToggle from './DarkToggle'

const NavLink = ({href, children}:{href:string, children:React.ReactNode}) => (
  <Link href={href} className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition">{children}</Link>
)

export default function Header(){
  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
      <div className="container-max flex items-center justify-between py-3">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-semibold text-lg">Andriy Plakosh</Link>
        </div>
        <nav className="flex items-center gap-1">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/resume">Resume</NavLink>
          <NavLink href="/experience">Experience</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <DarkToggle />
        </nav>
      </div>
    </header>
  )
}
