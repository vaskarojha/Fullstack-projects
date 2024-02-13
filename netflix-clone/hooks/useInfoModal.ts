import {create} from 'zustand'

export interface ModalStoreInterface{
    movieId:string;
    osOpen:boolean;
    openModa:(movieId:string)=> void;
    closeModa:()=>void ;
}

const useINfoModal = create<ModalStoreInterface>((set)=>({
    movieId:undefined,
    isOpen:false,
    openModal:(movieId:string)=>set({isOpen:true, movieId}),
    closeModal:()=>set({isOpen:false, movieId:undefined}),
}))

export default useINfoModal