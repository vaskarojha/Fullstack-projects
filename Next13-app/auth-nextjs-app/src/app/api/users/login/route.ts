import { NextRequest, NextResponse } from "next/server";
import {connect} from "@/dbConfig/dbConfig"
import bcryptjs from "bcryptjs"
import User from "@/models/userModel"
import jwt from "jsonwebtoken"

connect()
type userInfo ={
    email:string,
    password:string
}
export async function POST(request:NextRequest){
    try {
        const reqBody =await request.json()
        const {email,password} :userInfo= reqBody;
        console.log(reqBody)
        
        const user = await User.findOne({email})
        //check user
        if(!user){
            return NextResponse.json({error: "User donot exist"}, {status:400})
        }
        //check password
        const correctPassword = await bcryptjs.compare(password, user.password)
        if(!correctPassword){
            return NextResponse.json({error:"Password incorrect"}, {status: 400})
        }
        //create token data
        const tokenData = {
            id:user._id,
            username: user.username,
            email: user.email
        }

        //token creation
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
            expiresIn: "1d"
        })

        const response = NextResponse.json({
            message: "logged In",
            success:true
        })
        response.cookies.set("token", token,{
            httpOnly:true
        })
        return response;

    } catch (error:any) {
        console.log(error.message)
        return NextResponse.json({"message":"Error to login"}, {status: 500})
    }
}



