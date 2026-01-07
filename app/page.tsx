import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { projects } from '../src/data/projects'
import ProjectCard from '../src/components/ProjectCard'

export default function Home(){
  const featured = projects.filter(p=>p.featured)
  return (
    <div className="space-y-12">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">Andriy Plakosh</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">High-school engineering student focused on robotics, aerospace, and practical systems engineering. I build reliable systems for competitions and research.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/projects" className="px-4 py-2 bg-accent text-white rounded">View Projects</Link>
            <Link href="/contact" className="px-4 py-2 border rounded">Contact</Link>
          </div>
        </div>
        <div className="w-full h-72 md:h-96 relative rounded-lg overflow-hidden shadow">
          <Image src={'/images/hero.jpg'} alt="Hero photo" fill style={{objectFit:'cover'}}/>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <Link href="/projects" className="text-sm text-slate-500 hover:text-slate-700">See all</Link>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(p=> <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>
    </div>
  )
}
