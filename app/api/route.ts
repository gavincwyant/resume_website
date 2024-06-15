import { NextResponse, NextRequest } from "next/server"
import { NextApiRequest, NextApiResponse } from "next"
import FormData from "form-data"
import Mailgun from "mailgun.js"

const API_KEY = process.env.NEXT_PUBLIC_MAILGUN_API_KEY || ''
const DOMAIN = process.env.NEXT_PUBLIC_MAILGUN_DOMAIN || ''

export async function POST(request: Request){
    const mailgun = new Mailgun(FormData)
    const requestBody = await request.json()
    console.log(requestBody)
    const client = mailgun.client({username: 'api', key: API_KEY})
    const {firstName, lastName, email, message} = requestBody
    console.log('firstname:', firstName, 'lastname:', lastName)
    const messageData = {
        from: "gavincwyant@gmail.com",
        to: 'gavincwyant@gmail.com',
        subject: 'New Contact Form',
        text: `Hello,

        message: ${message}
        
        from:
        ${firstName} ${lastName}
        
        contact:
        ${email}`
        
    }

    try{
        const emailRes = await client.messages.create(DOMAIN, messageData)
        console.log(emailRes)
    }catch(err:any){
        console.log('Error sending email', err)
    }
    return (
        NextResponse.json({submitted: true})
    )
    
}