"use client"

import Header from "../header"
import Background from "../background_image"
import React, {useState, FormEvent} from 'react'
import { Button, ButtonGroup } from "@nextui-org/button"
import{ useRouter } from "next/navigation"

const Contact = () => {
    const router = useRouter()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        
        try{
            const res = await fetch('/api', {
                method: "POST",
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    message
                }),
                headers:{
                    'content-type': 'application/json'
                },
            })
        }
        catch(err:any){
            console.log(err)
        }finally{
            alert("Thanks for reaching out! I'll get back to you as soon as possible.")
            router.push('/')
        }
        
       

    }

    return (
        <div >
            <div className="sticky z-40"><Header/></div>
            <Background/>
            
            <div>
                <div className="flex flex-col justify-center items-center py-8  absolute w-full h-2/3 mt-36">
                <div className="text-white text-4xl pb-4 font-bold">Send me an Email</div>
                    <div className="bg-blue-900 shadow-2xl shadow-blue-300 p-6 rounded-2xl w-1/3 min-w-[300px]">
                        
                        <form onSubmit={onSubmit}>
                            <div className="flex flex-row justify-center text-center space-x-4 pb-8">
                                <div className="w-full">
                                    <input className="p-3 appearance-none w-full bg-gray-200 pl-2 rounded-sm focus:bg-white" 
                                        placeholder="first name"
                                        value={firstName}
                                        type="text"
                                        onChange={(e) => setFirstName(e.target.value)}
                                        />
                                </div>
                            </div>
                            <div className="flex flex-row justify-center text-center space-x-4 pb-8">
                                <div className="w-full">
                                    <input className="p-3 appearance-none w-full bg-gray-200 pl-2 rounded-sm focus:bg-white"
                                        placeholder="last name"
                                        value={lastName}
                                        type="text"
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row justify-center text-center space-x-4 pb-8">
                                <div className="w-full">
                                    <input className="p-3 appearance-none w-full bg-gray-200 pl-2 rounded-sm focus:bg-white" 
                                        placeholder="email"
                                        value={email}
                                        type="text"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row justify-center text-center space-x-4 pb-8">
                                <div className="w-full">
                                    <textarea className="pb-36 pt-4 appearance-none w-full bg-gray-200 pl-2 rounded-sm focus:bg-white"
                                        placeholder="message"
                                        value={message}
                                        
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>
                            </div> 

                            <button className="w-full bg-gray-200 rounded-full py-2">Submit</button>

                        </form>
                    </div>
                </div>
            </div>

        </div>

    )


}

export default Contact