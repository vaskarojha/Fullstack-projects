import mongoose from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        
        connection.on("Connected", ()=>{
            console.log('MongoDb connected!!')
        })

        connection.on('error', ()=>{
            console.log('MongoDb connection fail!!')
        })
    } catch(err){
        console.log("Error on db connection!!")
    }
}