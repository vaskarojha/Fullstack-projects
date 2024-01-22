import dbConnect from "@/libs/mongodb";
import Item from "@/models/item";
import { NextResponse } from "next/server";

export async function POST(request){
    const {title, description} = await request.json();
    console.log(title)
    await dbConnect();
    await Item.create({title, description})
    return NextResponse.json({message:"Item inserted"}, {status:201})
}

export async function GET(){
    await dbConnect();
    const items = await Item.find()
    return NextResponse.json({items})
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id')
    await Item.findByIdAndDelete(id)
    return NextResponse.json({message: "Item deleted!!"})
}