import React from "react"
interface NavbarItemProps{
    label:String
}

export const NavbarItem:React.FC<NavbarItemProps> =({label})=>{
    return (
        <div className="text-white curosr-pointer hover:text-gray-300 transition">
            {label}
        </div>
    )
}