'use client'

import { useState } from "react"
import { useRouter } from "next/navigation";

export default function EditItem({id, title, description}){
    const [newTitle , setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    const router = useRouter();

    const handleSubmit =(e)=>{
        e.preventDefault()
        try{
            const response = fetch(`http://localhost:3000/api/item/${id}`, {
            method:"PUT",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify({newTitle, newDescription})
        });
        if(!response.ok){
                throw new Error("Error in updating item!!")
        }
        
        router.push('/')
        
        } catch(error){
            console.log(error)
        }
        
    }

    return <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <h3 className="mx-auto font-bold text-2xl">Edit item:</h3>
        <input
        onChange={(e)=>setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2" type="text" placeholder="Title" />
        <input
         onChange={(e)=>setNewDescription(e.target.value)}
         value={newDescription}
        className="border border-slate-500 px-8 py-2" type="textarea" placeholder="Description" />
        <button className="bg-green-800 py-3 text-white font-bold w-1/2 mx-auto" >Update Item</button>
    </form>
}