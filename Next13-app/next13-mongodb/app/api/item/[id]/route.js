import dbConnect from "@/libs/mongodb";
import Item from "@/models/item";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const {id} = params;
    const {newTitle:title , newDescription:description} =await request.json();
    console.log(title, description)
    await dbConnect();
    await Item.findByIdAndUpdate(id, {title, description})
    return NextResponse.json({message:"Item  Updated!!"})
}

export async function GET(request, {params}){
    const {id} = params;
    await dbConnect();
    const item  = await Item.findById(id)
    return NextResponse.json({item}, {status: 200})
}