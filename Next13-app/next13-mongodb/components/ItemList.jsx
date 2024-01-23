import RemoveButton from "./RemoveButton"
import Link from "next/link"
import {HiPencilAlt} from 'react-icons/hi'

const getItems = async()=>{
    try{
        const response = await fetch('http://localhost:3000/api/item',{
            cache:"no-store"
        });
        if(!response.ok){
            throw new Error("Error to fetch data!!")
        }
    return response.json()
    } catch(err){
        console.log("Error in fetching items: ", err)
    }
}

export default async function ItemList(){
    const {items} = await getItems();
    return (
        <>
            {items.map((item) =>(
                <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                <div>
                    <h2 className="font-bold text-2xl">{item.title}</h2>
                    <div>{item.description}</div>
                </div>

                <div className="flex gap-2">
                    <RemoveButton/>
                    <Link href = {`/editItem/${item._id}`}>
                        <HiPencilAlt size = {24}/>
                    </Link>
                </div>
            </div>
            ))}
        </>
    )
}