import React from 'react'
import { projects } from '../../src/data/projects'
import ProjectCard from '../../src/components/ProjectCard'

export default function Projects(){
  return (
    <div>
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-slate-600 dark:text-slate-300 mt-2">A selection of school, competition, and personal projects.</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </div>
  )
}
