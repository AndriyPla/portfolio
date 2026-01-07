import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req: Request){
  try{
    const body = await req.json()

    const host = process.env.SMTP_HOST
    const port = Number(process.env.SMTP_PORT || 587)
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const to = process.env.TO_EMAIL

    if(!host || !user || !pass || !to) return NextResponse.json({error:'Missing SMTP environment variables'}, {status:500})

    const transporter = nodemailer.createTransport({
      host, port, secure: port===465, auth: {user, pass}
    })

    const info = await transporter.sendMail({
      from: user,
      to,
      subject: `Portfolio Contact: ${body.subject || 'No subject'}`,
      text: `From: ${body.name} <${body.email}>\n\n${body.message}`
    })

    return NextResponse.json({ok:true, info})
  }catch(err:any){
    return NextResponse.json({error: err.message || 'Unknown error'}, {status:500})
  }
}
