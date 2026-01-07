import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projects, getProjectBySlug } from '../../../src/data/projects'

export default function ProjectPage({params}:{params:{slug:string}}){
  const project = getProjectBySlug(params.slug)
  if(!project) return <div>Project not found</div>
  const idx = projects.findIndex(p=>p.slug===project.slug)
  const prev = projects[idx-1]
  const next = projects[idx+1]

  return (
    <article className="space-y-6">
      <div className="relative h-64 md:h-80 rounded overflow-hidden">
        <Image src={project.heroImage} alt={project.title} fill style={{objectFit:'cover'}}/>
      </div>
      <header>
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <div className="text-sm text-slate-500">{project.date} • {project.role}</div>
        <div className="mt-2">{project.tags.map((t:string)=> <span key={t} className="mr-2 text-sm text-slate-600 dark:text-slate-300">#{t}</span>)}</div>
      </header>

      <section>
        <h3 className="text-xl font-semibold">Overview</h3>
        <p className="mt-2 text-slate-700 dark:text-slate-300">{project.sections.overview}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold">Goals</h3>
        <p className="mt-2 text-slate-700 dark:text-slate-300">{project.sections.goals}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold">Build / Process</h3>
        <p className="mt-2 text-slate-700 dark:text-slate-300">{project.sections.process}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold">Results</h3>
        <p className="mt-2 text-slate-700 dark:text-slate-300">{project.sections.results}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold">What I'd Improve</h3>
        <p className="mt-2 text-slate-700 dark:text-slate-300">{project.sections.improve}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold">Gallery</h3>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[project.thumbnail, project.heroImage].map((src:string,i:number)=> (
            <div key={i} className="relative h-32 rounded overflow-hidden">
              <Image src={src} alt={`gallery-${i}`} fill style={{objectFit:'cover'}}/>
            </div>
          ))}
        </div>
      </section>

      <nav className="flex items-center justify-between">
        <div>{prev ? <Link href={`/projects/${prev.slug}`} className="text-sm">← {prev.title}</Link> : <span/>}</div>
        <div>{next ? <Link href={`/projects/${next.slug}`} className="text-sm">{next.title} →</Link> : <span/>}</div>
      </nav>
    </article>
  )
}
