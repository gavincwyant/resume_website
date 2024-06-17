"use client"

import Image from "next/image";
import Contact from "./contact_button";
import Header from "./header";
import Body from "./homepage_body";
import Blurb from "./blurb";
import { useEffect, useState } from "react";
import netlifyAuth from "./OAuth/netlifyIdentity";

export default function Home() {
  let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)
  let [user, setUser] = useState(null)

    let login = () => {
        netlifyAuth.authenticate(((user : any) => {
            setLoggedIn(!user)
            setUser(user)
            
        }))
    }

    useEffect(() => {
        netlifyAuth.initialize(((user: any) => {
            setLoggedIn(!!user)
        }))
        }, [loggedIn])

  return (
    <main className="scroll-smooth">

      
      {loggedIn ? (
              <div>
                  You are logged in!
              </div>
          ) : (
              <button onClick={() => login()}>
                  Log in here.
              </button>
          )}
    
      <div className="sticky top-0 z-50">
        <Header/>
        
      </div>
        <Body/>
        <Blurb/>
    </main>
  );
}
