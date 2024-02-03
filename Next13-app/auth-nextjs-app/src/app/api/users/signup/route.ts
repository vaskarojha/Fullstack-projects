import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModel.js"
import {NextRequest, NextResponse} from "next/server";
import bcryptjs from "bcryptjs";

connect()

type userInfo={
    username:string,
    email:string,
    password:string
}

export async function POST(request:NextRequest){
    try{
        const reqBody = await request.json()
        const{username, email, password}:userInfo= reqBody
        console.log(reqBody)

        // check existing user
        const user = await User.findOne({email})
        if(user){
            return NextResponse.json({error:"User already exists"}, { status: 400});
            }
        //hash password
        const salt = await bcryptjs.genSalt(10)
        const encryptPassword = await bcryptjs.hash(password, salt)
        
        const newUser = new User({
            username,
            email,
            password:encryptPassword
        })
        console.log("new user======>", newUser)
        const createdUser = await newUser.save()
        console.log(createdUser)
        
        return NextResponse.json({message:"User created.", success:true, createdUser}, {status:200})

    }catch(error:any){
        return NextResponse.json({error:error.message},{status:500})
    }
}

