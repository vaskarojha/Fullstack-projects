import { NavbarItem } from "./NavbarItem"
import MobileMenu from "@/components/MobileMenu"
import AccountMenu from "@/components/AccountMenu"
import {BsChevronDown, BsSearch, BsBell} from 'react-icons/bs'
import { useCallback, useEffect, useState } from "react"

const TOP_OFFSET = 66;

export const Navbar =()=>{
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(false);
    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY>= TOP_OFFSET){
                setShowBackground(true)
            }
            else{
                setShowBackground(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const toggleMobileMenu = useCallback(()=>{
        setShowMobileMenu((current)=>!current)
    },[])

    const toggleAccountMenu = useCallback(()=>{
        setShowAccountMenu((current)=>!current)
    },[])

    return(
        <nav className="w-full fixed z-40">
            <div className={`px-4 md:px:16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90 ${showBackground ?`bg-zinc-900 bg-opacity-90`:``}`}>
                <img src="images/logo.png" alt="logo" className="h-4 lg::h7"/>
                <div className="flex-row ml-8 gap-7 hidden lg:flex">
                <NavbarItem label = "Home"/>
                <NavbarItem label = "Series"/>
                <NavbarItem label = "Films"/>
                <NavbarItem label = "New & Popular"/>
                <NavbarItem label = "My list"/>
                <NavbarItem label = "Browse by language"/>
                </div>
                <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row itmes-center gap-2 ml-8 cursor:pointer">
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown className={`text-white transition ${showMobileMenu? `rotate-180`:`rotate-0`}`}/>
                    <MobileMenu visibe={showMobileMenu}/>
                </div>
                <div className="flex flex-row ml-auto gap-7 itmes-center">
                    <div className="text-gray-200 hover:text-gray-200 cursor-pointer">
                        <BsSearch/>
                    </div>
                    <div className="text-gray-200 hover:text-gray-200 cursor-pointer">
                        <BsBell/>
                    </div>
                    <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <img src="/images/default-blue.png" alt="" />
                        </div>
                        <BsChevronDown className={`text-white transition ${showAccountMenu? `rotate-180`:`rotate-0`}`}/>
                        <AccountMenu visibe/>
                    </div>
                </div>
            </div>
        </nav>
    )
}