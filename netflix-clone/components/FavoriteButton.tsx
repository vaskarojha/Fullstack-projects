import axios from "axios";
import React from "react";
import { useCallback, useMemo } from "react";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";
import { utimes } from "fs";

interface FavoritesButtonProps{
    movieId :string;
}

const FavoritesButton:React.FC<FavoritesButtonProps>=({movieId})=>{
    const {mutate:mutateFavoirtes} = useFavorites();
    const{data:currentUser, mutate} = useCurrentUser()

    const isFavorite = useMemo(()=>{
        const list = currentUser?.favoriteIds || [];
        return list.includes(movieId);
    }, [currentUser, movieId])

    const toggleFavorites = useCallback(async()=>{
        let response;
        if(isFavorite){
            response = await axios.delete('/api/favorite', {data:{movieId}})
        } else{
            response= await axios.post('/api/favorite', {movieId})
        }
        const updatedFavoirteIds = response?.data?.favoriteIds;

        mutate({
            ...currentUser,
            favoriteIds:updatedFavoirteIds
        });
    }, [movieId, isFavorite, currentUser, mutate, mutateFavoirtes])

    const Icon = isFavorite? AiOutlineCheck:AiOutlinePlus
    return (
        <div 
        onClick={toggleFavorites}
        className="cursor-pointer group/item w-6  h-6 g:w-10 lg:h-10 border-white order-2 rounded-full flex justify-center items-center transition hover:border-netural-300">
            <Icon className="text-white size={25}"/>
        </div>
    )
}

export default FavoritesButton;