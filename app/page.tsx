"use client"

import Image from "next/image";
import Contact from "./contact_button";
import Header from "./header";
import Body from "./homepage_body";
import Blurb from "./blurb";



export default function Home() {


  return (

    <main className="scroll-smooth">
      <div className="sticky top-0 z-50">
        <Header/>
        
      </div>
        <Body/>
        <Blurb/>
    </main>

  );
}
