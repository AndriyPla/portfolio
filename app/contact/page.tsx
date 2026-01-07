"use client"
import React, { useState } from 'react'

export default function Contact(){
  const [state, setState] = useState({status:'idle', message:''})

  async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const useOptionB = (form.dataset.option === 'b')

    setState({status:'loading', message:''})

    try{
      if(useOptionB){
        // Post to our Next API route (Option B)
        const res = await fetch('/api/contact', {method:'POST', body: JSON.stringify(Object.fromEntries(data as any)), headers: {'Content-Type':'application/json'}})
  if(res.ok) setState({status:'success', message:'Message sent (Option B).'})
  else setState({status:'error', message:'Failed to send via server route.'})
      }else{
        // Option A: Formspree (replace ACTION_URL in the form element)
        // We use a programmatic POST so we can show a nicer UI
        const action = form.action
        const res = await fetch(action, {method:'POST', body: data})
        if(res.ok) setState({status:'success', message:'Message sent (Option A).'})
        else setState({status:'error', message:'Failed to send to form endpoint.'})
      }
    }catch(err:any){
      setState({status:'error', message: err.message || 'Unknown error'})
    }
  }

  return (
    <div className="max-w-xl">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="text-slate-600 dark:text-slate-300 mt-2">You can contact me using either Option A (Formspree or similar) or Option B (server email via Next.js API).</p>

      <div className="mt-6">
        <form onSubmit={handleSubmit} action="https://formspree.io/f/your-form-id" method="POST" data-option="a" className="space-y-4">
          <div>
            <label className="block text-sm">Name</label>
            <input name="name" required className="mt-1 w-full rounded border px-3 py-2 bg-white dark:bg-slate-800" />
          </div>
          <div>
            <label className="block text-sm">Email</label>
            <input name="email" type="email" required className="mt-1 w-full rounded border px-3 py-2 bg-white dark:bg-slate-800" />
          </div>
          <div>
            <label className="block text-sm">Subject</label>
            <input name="subject" className="mt-1 w-full rounded border px-3 py-2 bg-white dark:bg-slate-800" />
          </div>
          <div>
            <label className="block text-sm">Message</label>
            <textarea name="message" rows={5} required className="mt-1 w-full rounded border px-3 py-2 bg-white dark:bg-slate-800" />
          </div>

          <div className="flex items-center gap-3">
            <button type="submit" className="px-4 py-2 bg-accent text-white rounded">Send message</button>
            <button type="button" onClick={()=>{
              // Switch form action to Option B (server)
              const form = document.querySelector('form')
              if(form) form.setAttribute('data-option','b')
            }} className="px-3 py-2 border rounded">Use server (Option B)</button>
            <div className="text-sm text-slate-500">Option A (Formspree): set the form action to your Formspree URL. Option B: click the button to switch to server send.</div>
          </div>
        </form>

        <div className="mt-4">
          {state.status === 'loading' && <div>Sending…</div>}
          {state.status === 'success' && <div className="text-green-600">{state.message}</div>}
          {state.status === 'error' && <div className="text-red-600">{state.message}</div>}
        </div>
      </div>

      <div className="mt-8 text-sm text-slate-600 dark:text-slate-400">
        <h4 className="font-semibold">Setup instructions</h4>
        <p className="mt-2">Option A (recommended): Create a Formspree form and replace the form action URL in the form tag. This requires no server code.</p>
        <p className="mt-2">Option B: Use the server endpoint <code>/api/contact</code> (see README). This requires environment variables for SMTP (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, TO_EMAIL).</p>
      </div>
    </div>
  )
}
