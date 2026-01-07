import React from 'react'

export default function SkillMeter({level}:{level:number}){
  const dots = new Array(5).fill(0)
  return (
    <div className="flex gap-1" aria-hidden>
      {dots.map((_,i)=> (
        <span key={i} className={`w-3 h-3 rounded-full ${i < level ? 'bg-accent' : 'bg-slate-300 dark:bg-slate-700'}`} />
      ))}
    </div>
  )
}
