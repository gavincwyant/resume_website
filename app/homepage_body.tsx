"use client"

import Image from "next/image";
import background from "../public/website_background.jpg"
import Contact from "./contact_button";
import Header from "./header";
import { useRouter } from "next/navigation";

const Body = () => {
    const router = useRouter();
    return (
        <main className="flex h-screen flex-col items-center justify-between bg-blue-600 bg-gradient-to-r from-blue-400 relative">
            <Image alt="background" src={background} className="w-screen h-screen fixed" priority></Image>

            <div className=" h-1/2 w-1/2 absolute flex flex-col justify-end md:left-0">
                <div className="self-center text-5xl text-nowrap text-white font-bold font-sans border-b-2 border-white md:text-7xl">
                    Gavin Wyant
                </div>
            <div className="self-center text-white mt-3 text-nowrap">
                welcome to my resume website
            </div>
                <div className="self-center mt-4" onClick={() => router.push("/contact")}>
                    <Contact/>
                </div>
            </div>

            
        </main>

    )
}

export default Body