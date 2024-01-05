import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import User from './models/user.model.js'
 import 'dotenv/config'

const app = express()
app.use(cors())
app.use(express.json())

// const DB_NAME = process.env.DB_NAME
const DB_URL = process.env.DB_URL

app.get('/test', (req,res)=>{
    res.json("App running......")
})

app.post('/register',async (req, res)=>{
    const {username, password} = req.body
    if(!username){
        print('asdasdasdf')
    }
    console.log(username)
    if(!(username && password)){
        res.status(401).json({"message": "Enter username and password"})
    }
    
    try{
        const userExists = await User.findOne({username})
        if(userExists){
            res.status(401).json({"message":"Username already exist, create new one."})
        }
    } catch(err){
        console.log(err.message)
    }
    const createUser = await User.create({username, password})
    console.log(createUser)
    if(createUser){
        res.status(200).json({createUser})
    }


    // res.json({requestData:{username, password}})
})



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

app.listen(4000, ()=>console.log("Server running at port 4000."))
