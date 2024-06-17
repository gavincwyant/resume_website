"use client"

import netlifyAuth from './netlifyIdentity'
import { useEffect, useState } from 'react'



const AuthPage = () => {

    let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)
    let [user, setUser] = useState(null)

    let login = (user:any) => {
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

    return(    
    <div>
    {loggedIn ? (
        <div>
            You are logged in!
        </div>
    ) : (
        <button onClick={() => login(user)}>
            Log in here.
        </button>
    )}
    </div>
    )

}

export default AuthPage