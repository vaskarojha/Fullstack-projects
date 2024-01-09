import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import cookieParser from "cookie-parser";
import 'dotenv/config'
import { fileURLToPath } from 'url';
import testRoute from "./routers/test.route.js";
import userRoute from "./routers/user.route.js";
import postRouter from './routers/post.route.js'
import path from 'path'

//middlewares
const app = express()
app.use(cors({credentials:true, origin:'http://localhost:3000'}))
app.use(express.json())
app.use(cookieParser())


// routes
app.use('/test', testRoute)
app.use('/user', userRoute)
app.use('/post', postRouter)

//static files (images upload location)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(__dirname +'/uploads'))
const DB_URL = process.env.DB_URL

app.get('/test', (req,res)=>{
    res.json("App running......")
})

// Database connection
async function dbConnect(){
    try{
         const conn = await mongoose.connect(DB_URL)
         if(conn){
            console.log('Connected to db server...')
         }
    }catch(err){
        console.log("Error in connecting DB : ", err)
    }
}
dbConnect()

// listening to port 4000
app.listen(4000, ()=>console.log("Server running at port 4000."))
