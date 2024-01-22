import RemoveButton from "./RemoveButton"
import Link from "next/link"
import {HiPencilAlt} from 'react-icons/hi'

export default function ItemList(){
    return (
        <>
            <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                <div>
                    <h2 className="font-bold text-2xl">Title</h2>
                    <div>Item body</div>
                </div>

                <div className="flex gap-2">
                    <RemoveButton/>
                    <Link href = {'/editItem/123'}>
                        <HiPencilAlt size = {24}/>
                    </Link>
                </div>
            </div>
        </>
    )
}