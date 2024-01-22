import dbConnect from "@/libs/mongodb";
import Item from "@/models/item";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const {id} = params;
    const {newTitle:title , newDescription:description} =await request.json();
    await dbConnect();
    await Item.findByIdAndUpdate(id, {title, description})
    return NextResponse.json({message:"Item  Updated!!"})
}