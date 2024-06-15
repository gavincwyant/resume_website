"use client"

import Header from "../header"
import Background from "../background_image"
import React, {useState, FormEvent} from 'react'

const Contact = () => {
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
        }
        
       

    }

    return (
        <div >
            <div className="sticky z-50"><Header/></div>
            <Background/>
            
            <div className="">
                <div className="flex flex-row justify-center space-x-4 py-8  absolute w-full h-3/4 mt-28">
                    <div>
                        <form onSubmit={onSubmit}>
                            <div className="flex flex-row justify-center text-center space-x-4 pb-8">
                                <div className="w-full">
                                    <input className="appearance-none w-full bg-gray-200 pl-2 rounded-sm focus:bg-white" 
                                        placeholder="first name"
                                        value={firstName}
                                        type="text"
                                        onChange={(e) => setFirstName(e.target.value)}
                                        />
                                </div>
                            </div>
                            <div className="flex flex-row justify-center text-center space-x-4 pb-8">
                                <div className="w-full">
                                    <input className="appearance-none w-full bg-gray-200 pl-2 rounded-sm focus:bg-white"
                                        placeholder="last name"
                                        value={lastName}
                                        type="text"
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row justify-center text-center space-x-4 pb-8">
                                <div className="w-full">
                                    <input className="appearance-none w-full bg-gray-200 pl-2 rounded-sm focus:bg-white" 
                                        placeholder="email"
                                        value={email}
                                        type="text"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row justify-center text-center space-x-4 pb-8">
                                <div className="w-full">
                                    <input className="appearance-none w-full bg-gray-200 pl-2 rounded-sm focus:bg-white"
                                        placeholder="message"
                                        value={message}
                                        type="text"
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>
                            </div> 

                            <button type="submit" className="bg-white rounded-sm text-gray-400">Submit</button>

                        </form>
                    </div>
                </div>
            </div>

        </div>

    )


}

export default Contact