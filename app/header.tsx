"use client"

import Router from "next/router"
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter();
    return (
    
        <div className="flex flex-row  w-screen h-24 justify-end md:pr-10 fixed text-white">
            <div className="flex  w-1/2 justify center flex-nowrap grow md:grow-0">
                <div onClick={() => router.push("/")} className=" grow text-center block self-center cursor-pointer relative m-auto text-xl w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                    Home
                </div>
                <div onClick={() => router.push("/projects")} className=" grow text-center block self-center cursor-pointer relative m-auto text-xl w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                    Projects
                </div>
                <div onClick={() => router.push("/about_me")}className=" grow text-center block self-center cursor-pointer relative m-auto text-xl w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">  
                    About Me
                </div>
                <div onClick={() => router.push("/contact")} className=" grow text-center block self-center cursor-pointer relative m-auto text-xl w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                    Contact
                </div>
            </div>
                
        </div>

    )
}

export default Header