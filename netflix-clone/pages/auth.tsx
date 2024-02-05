import Input from "@/components/Input"
import { useCallback, useState } from "react"
const auth= ()=>{
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [variant, setVariant] = useState("login")

    const toggleVariant = useCallback(()=>{
        setVariant((currentVariant)=>currentVariant==='login' ?'register':'login')
    }, [])

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full  h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="logo" className="h-12" />
                </nav>
                <div className="flex justify-center ">
                    <div className="bg-black bg-opacit-70 px-16 py-16  self-center lg:w-2/5 lg:max-x-md rounded-md w-full">
                        <h2 className="text-white text-4xl my-8 font-semibold">{variant==='login'?"Login":"Sign up"}</h2>
                        <div className="flex flex-col gap-4">
                            {variant==="register" && 
                               <Input label= "Username" onChange={(e)=>( setName(e.target.value))} id= "name" type= "" value={name}/>
                            }
                            <Input label= "Email" onChange={(e)=>( setEmail(e.target.value))} id= "email" type= "email" value={email}/>
                         
                            <Input label= "Password" onChange={(e)=>( setName(e.target.value))} id= "Password" type= "password" value={password}/>
                        </div>
                        <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                        {variant === "login"? "Login":"Sign up"}
                        </button>
                        <p className="text-neutral-500 mt-12 ">
                            {variant === "login"? "Do not have an account?":"Already have and account?"}
                            <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">{variant=== "login"? "Signup here!":"Login in here!"}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default auth