"use client"
import { HiOutlineTrash } from "react-icons/hi"
import {useRouter} from 'next/navigation'

export default function RemoveButton({id}){
    const router = useRouter();

    const removeItem = async()=>{
        const confirmed = confirm("Your item will be deleted permanantly!")
        console.log(confirmed)
        if(confirmed){
            const response =await fetch(`http://localhost:3000/api/item?id=${id}`,{
                method:"DELETE"
            });
            if(response.ok){
                router.refresh()
            }
        }
    }
    return <button onClick={removeItem} className="text-red-500"><HiOutlineTrash size={24}/></button>
}