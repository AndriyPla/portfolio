import React from 'react'

export default function ResumePage(){
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Resume</h1>
      <div className="border rounded overflow-hidden shadow">
        <object data="/resume.pdf" type="application/pdf" width="100%" height="800"> 
          <p>Your browser does not support PDFs. <a href="/resume.pdf">Download the resume</a>.</p>
        </object>
      </div>
      <div className="mt-4">
        <a href="/resume.pdf" download className="px-4 py-2 bg-accent text-white rounded">Download Resume</a>
      </div>
    </div>
  )
}
