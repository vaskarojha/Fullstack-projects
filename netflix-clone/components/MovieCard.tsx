import React from "react";
import { BsFillPlayFill} from "react-icons/bs";
import {BiChevronDown} from 'react-icons/bi'
import FavoritesButton from "./FavoriteButton";
import { useRouter } from "next/router";
import useINfoModal from "@/hooks/useInfoModal";


interface MovieCardProps{
    data:Record<string,any>,

}

const MovieCard:React.FC<MovieCardProps>=({data})=>{
    const router = useRouter()
    const {openModal} = useINfoModal()
    return (
        <div className="group bg-zinc-900 col-span relative h-[12vw]">
            <img className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hoveropacity-0 w-full h-12vw" src={data.thumbnailUrl} alt="Thumbnail" />     
            <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6wv] group-hover:-translate-x-[2wv] group-hover:-opacity-100]">
            
            <img className="curosr-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12w]" src={data.thumbnailUrl} alt="" />
                <div className="z-10 bg-zinc-100 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
                <div className="flex flex-row items-center gap-3">
                    <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:g-neutral-300" 

                    onClick={()=>(router.push(`/watch/${data?.id}`))}>
                        <BsFillPlayFill size={30}/>

                    </div>
                    <FavoritesButton movidId={data?.id}/>
                    <div 
                    onClick={()=>openModal(data?.id)}
                    className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
                        <BiChevronDown className="text-white" size={25}/>
                    </div>
                </div>
                <p className="text-green-400 font-semibold mt-4">
                    New <span className="text-white ">2024</span>
                </p>
                <div className="flex flex-row mt-4 gap-2 items-center">
                    <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
                </div>
                <div className="flex flex-row mt-4 gap-2 items-center">
                    <p className="text-white text-[10px] lg:text-sm">{data.genre}</p>
                </div>
            </div>
            </div>           
        </div>
    )
}

export default MovieCard