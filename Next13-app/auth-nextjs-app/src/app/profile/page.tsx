"use client"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ProfilePage(){
    const router = useRouter()
    const logout=async ()=>{
        try {
            await axios.get('/api/users/logout')
            router.push('/')
        } catch (error: any) {
            console.log("Error on logout out")
        }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py2">
            <h1>Profile</h1>
            <hr />
            <p>User Profile Page</p>
            <button onClick={logout} className="p-2 bg-blue-300 rounded border-2 border-red-200">Logout</button>
        </div>
    )
}