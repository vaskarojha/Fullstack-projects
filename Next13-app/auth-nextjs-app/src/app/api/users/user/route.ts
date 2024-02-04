import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel.js"
import { connect } from "@/dbConfig/dbConfig";
import { getNamedMiddlewareRegex } from "next/dist/shared/lib/router/utils/route-regex";

connect()

export async function GET(request:NextRequest){
    try {
        const userId = await getDataFromToken(request)
        const user = await User.findOne({_id:userId}).select("-password")
        return NextResponse.json({
            message:"user found",
            data:user
        })
    } catch (error:any) {
        return NextResponse.json({error: error.message})
    }
}
