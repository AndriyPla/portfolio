import React from 'react'

export default function Tag({children}:{children:React.ReactNode}){
  return <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 mr-2">{children}</span>
}
