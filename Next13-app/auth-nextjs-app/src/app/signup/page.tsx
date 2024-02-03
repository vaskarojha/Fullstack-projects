"use client";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignupPage(){
    const router = useRouter()
    const [user, setUser]= React.useState({
        email:"",
        password: "",
        username: ""
    })
    const [buttonDisabled , setButtonDisabled] = React.useState(true)
    const [loading, setLoading] = React.useState(false)

    const onSignup = async ()=>{
        try {
            setLoading(true)
            const response = await axios.post('/api/users/signup',user)
            console.log("signup successfull", response.data)
            router.push('/login')
        } catch (error:any) {
            console.log("Signup Failed")
            toast.error(error.message)

        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        if(user.email.length >0, user.username.length>0, user.password.length>0){
            setButtonDisabled(false)
        }
    }, [user])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center">{loading?"Signing up now......": "Signup Now" }</h1>
            <hr />
            <label htmlFor="username">Username</label>
            <input className="p-2 bg-blue-100" type="text" id="username" onChange={(e)=>{
                setUser({...user, username:e.target.value})
            }}/>
            <label htmlFor="email">Email</label>
            <input className="p-2 bg-blue-100" type="email" id="email" onChange={(e)=>{
                setUser({...user, email:e.target.value})
            }}/>
            <label htmlFor="password">Password</label>
            <input className="p-2 bg-blue-100" type="password" id="password" onChange={(e)=>{
                setUser({...user, password:e.target.value})
            }}/>
            <button onClick={onSignup} className="p-2 bg-green-300 my-3">{buttonDisabled ? "Complete form": "SignUp Now"}</button>
            
            <Link href="/login">Login here</Link>
        </div>
    )
}