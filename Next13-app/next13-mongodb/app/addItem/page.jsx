"use client"
import { useState } from "react"
import {useRouter} from "next/navigation"


export default function AddItem(){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const router = useRouter()

    const handleSubmit =async(e)=>{
        e.preventDefault();
        if(!title, !description){
            alert("All field required!!")
        }
        try{
            const response = await fetch('http://localhost:3000/api/item',{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({title,description})
            });
            if(response.ok){
                router.push('/')
            }
            else{
                throw new Error("Fail to add item!!")
            }
        }catch(err){
            console.log('Error in adding item!!', err)
        }
    }
    return <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input value={title} onChange={e=>setTitle(e.target.value)} className="border border-slate-500 px-8 py-2" type="text" placeholder="Title" />
        <input value={description} onChange={e=>setDescription(e.target.value)} className="border border-slate-500 px-8 py-2" type="textarea" placeholder="Description" />
        <button className="bg-green-800 py-3 text-white font-bold w-1/2 mx-auto" >Add Topic</button>
    </form>
}