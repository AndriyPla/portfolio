import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function ProjectCard({project}:{project:any}){
  return (
    <Link href={`/projects/${project.slug}`} className="group block rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <div className="relative h-48 bg-slate-100 dark:bg-slate-800">
        <Image src={project.thumbnail} alt={project.title} fill style={{objectFit:'cover'}} sizes="(max-width: 768px) 100vw, 33vw"/>
      </div>
      <div className="p-4 bg-white dark:bg-slate-900">
        <div className="flex items-baseline justify-between">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          <time className="text-sm text-slate-500 dark:text-slate-400">{project.date}</time>
        </div>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
      </div>
    </Link>
  )
}
