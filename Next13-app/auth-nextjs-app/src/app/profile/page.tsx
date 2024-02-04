"use client"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function ProfilePage(){
    const router = useRouter()
    const [data, setData] = useState('')
    const logout=async ()=>{
        try {
            await axios.get('/api/users/logout')
            router.push('/')
        } catch (error: any) {
            console.log("Error on logout out")
        }
    }

    const getUserDetail = async()=>{
        const response = await axios.get('/api/users/user')
        console.log(response.data)
        setData(response.data.data._id)
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py2">
            <h1>Profile</h1>
            <hr />
            <p>User Profile Page</p>
            <h1>{data=== ""? 'Nothing' :<Link href={`/profile/${data}`}>{data}</Link>}</h1>
            <button onClick={getUserDetail} className="p-2 bg-blue-300 rounded border-2 border-red-200">Get User Data</button>
            <button onClick={logout} className="p-2 bg-blue-300 rounded border-2 border-red-200">Logout</button>
        </div>
    )
}