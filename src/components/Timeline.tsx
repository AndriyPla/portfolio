import React from 'react'

export default function Timeline({items}:{items:Array<any>}){
  return (
    <div className="space-y-6">
      {items.map((it,idx)=> (
        <div key={idx} className="border-l-2 border-slate-200 dark:border-slate-800 pl-4">
          <div className="text-sm text-slate-500 dark:text-slate-400">{it.range}</div>
          <div className="mt-1">
            <h4 className="font-semibold">{it.title} <span className="text-sm text-slate-500">— {it.role}</span></h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
              {it.bullets.map((b:string,i:number)=>(<li key={i}>{b}</li>))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
