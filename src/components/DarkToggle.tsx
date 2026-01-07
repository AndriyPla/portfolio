"use client"
import React, { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function DarkToggle(){
  const [isDark, setIsDark] = useState(false)
  useEffect(()=>{
    setIsDark(document.documentElement.classList.contains('dark'))
  },[])

  const toggle = ()=>{
    const root = document.documentElement
    if(root.classList.contains('dark')){
      root.classList.remove('dark')
      localStorage.setItem('theme','light')
      setIsDark(false)
    }else{
      root.classList.add('dark')
      localStorage.setItem('theme','dark')
      setIsDark(true)
    }
  }

  return (
    <button aria-label="Toggle dark mode" onClick={toggle} className="ml-2 p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition">
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
