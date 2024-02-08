import { NavbarItem } from "./NavbarItem"
import MobileMenu from "@/components/MobileMenu"
import {BsChevronDown} from 'react-icons/bs'
import { useState } from "react"
export const Navbar =()=>{
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return(
        <nav className="w-full fixed z-40">
            <div className="px-4 md:px:16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90">
                <img src="images/logo.png" alt="logo" className="h-4 lg::h7"/>
                <div className="flex-row ml-8 gap-7 hidden lg:flex">
                <NavbarItem label = "Home"/>
                <NavbarItem label = "Series"/>
                <NavbarItem label = "Films"/>
                <NavbarItem label = "New & Popular"/>
                <NavbarItem label = "My list"/>
                <NavbarItem label = "Browse by language"/>
                </div>
                <div className="lg:hidden flex flex-row itmes-center gap-2 ml-8 cursor:pointer">
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown className="text-white transition "/>
                    <MobileMenu/>
                </div>
            </div>
        </nav>
    )
}