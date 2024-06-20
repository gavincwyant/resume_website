"use client"

import Router from "next/router"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import netlifyAuth from "./OAuth/netlifyIdentity";
import { stringify } from "querystring";
import { useAppContext } from "./context";

const Header = () => {
    let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)
    let [user, setUser] = useState(netlifyAuth.user)

    let login = () => {
        netlifyAuth.authenticate(((user : any) => {
            setLoggedIn(true)
            setUser(user)
            setName(getName(user))
            
        }))
        
        
    }

    let signOut = () => {
      netlifyAuth.signout((user : any) => {
        setLoggedIn(false)
        setUser(null)
        setName(null)
      })
      
    }

    const getName = (user : any) => {
        if (user != null){
            return JSON.stringify(user?.user_metadata?.full_name).replaceAll("\"", "")
        }
    }

   

    useEffect(() => {
        netlifyAuth.initialize(((user: any) => {
            setLoggedIn(!!user)
            setUser(user)
            setName(getName(user))
        }))
        }, [loggedIn])



    const router = useRouter();
    const { name , setName } = useAppContext()
    return (
    
        <div className="flex flex-col w-full h-24  md:pr-10 fixed text-white md:flex-row">
            
            <div className="bg-blue-400 md:bg-transparent md:p-2 bg-opacity-40 rounded-md justify-start flex text-nowrap flex-row h-10 md:h-24">   
            {loggedIn ? (
              <div className="flex flex-row mx-4 md:flex-none md:flex-col mt-2">
                <div >
                  Welcome, {name}!
                </div>
                <button onClick={() => signOut()}   className="bg-blue-600 border border-black rounded-full p-1 pb-2 px-3 text-xs absolute right-0 top-0 md:relative mt-2 mr-1 md:mt-3">
                  sign out
                </button>
              </div>
              
                ) : (
                    <div className="">
                    <button onClick={() => login()}  className="bg-blue-600 md:p-4 md:mt-3 p-1 pb-2 px-3 border border-black text-xs rounded-full absolute right-0 top-0 md:relative mt-2 mr-1">
                        Log in/Sign Up
                    </button>
                    </div>
                )}
                </div>
           



            <div className="flex flex-row w-full justify-end md:grow-0 mt-3 md:mt-0">
            


                <div onClick={() => router.push("/")} className=" grow text-center block self-center cursor-pointer relative m-auto md:text-xl w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                    Home
                </div>
                <div onClick={() => router.push("/projects")} className=" grow text-center block self-center cursor-pointer relative m-auto md:text-xl w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                    Projects
                </div>
                <div onClick={() => router.push("/about_me")}className=" grow text-center block self-center cursor-pointer relative m-auto md:text-xl w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">  
                    About Me
                </div>
                <div onClick={() => router.push("/contact")} className=" grow text-center block self-center cursor-pointer relative m-auto md:text-xl w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                    Contact
                </div>
            </div>
                
        </div>

    )
}

export default Header