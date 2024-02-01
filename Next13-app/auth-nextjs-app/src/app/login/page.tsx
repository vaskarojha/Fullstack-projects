"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import {axios} from "axios";

export default function LoginPage(){
    const [user, setUser]= React.useState({
        email:"",
        password: "",
    })

    const onSignup = async ()=>{

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center">Login</h1>
            <hr />
            <label htmlFor="email">Email</label>
            <input className="p-2 bg-blue-100" type="email" id="email" onChange={(e)=>{
                setUser({...user, email:e.target.value})
            }}/>
            <label htmlFor="password">Password</label>
            <input className="p-2 bg-blue-100" type="password" id="password" onChange={(e)=>{
                setUser({...user, password:e.target.value})
            }}/>
            <button onClick={onSignup} className="p-2 bg-green-300 my-3">Signup</button>
            
            <Link href="/signup">Register</Link>
        </div>
    )
}