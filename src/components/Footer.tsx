import Link from 'next/link'
import React from 'react'
import { Linkedin, Instagram, Facebook } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-6 mt-12">
      <div className="container-max flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">© {new Date().getFullYear()} Andriy Plakosh. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="LinkedIn" className="hover:text-accent"><Linkedin size={18} /></Link>
          <Link href="#" aria-label="Instagram" className="hover:text-accent"><Instagram size={18} /></Link>
          <Link href="#" aria-label="Facebook" className="hover:text-accent"><Facebook size={18} /></Link>
        </div>
      </div>
    </footer>
  )
}
