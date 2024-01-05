import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import bcrypt from 'bcryptjs'
import Jwt from "jsonwebtoken"
import cookieParser from "cookie-parser";

import User from './models/user.model.js'
import 'dotenv/config'

const app = express()
app.use(cors({credentials:true, origin:'http://localhost:3000'}))
app.use(express.json())
app.use(cookieParser())

// const DB_NAME = process.env.DB_NAME
const DB_URL = process.env.DB_URL

app.get('/test', (req,res)=>{
    res.json("App running......")
})

app.post('/register',async (req, res)=>{
    try{
    const {username, password} = req.body
    if(!username){
        print('asdasdasdf')
    }
    // console.log(username)
    if(!(username && password)){
        res.status(401).json({"message": "Enter username and password"})
    }
    const userExists = await User.findOne({username})
    if(userExists){
        throw res.status(401).json({"message":"Username already exist, create new one."})
    }
    const encryptPassword = await bcrypt.hash(password, 10)
    const createUser = await User.create({username,password: encryptPassword})
    // console.log(createUser)
    if(createUser){
        createUser.password=undefined
        res.status(200).json({createUser})
    }
    } catch(err){
        console.log(err.message)
    }
    // res.json({requestData:{username, password}})
})

app.post('/login', async (req,res)=>{
    try{
        const {username, password} = req.body
        if(!(username && password)){
            res.json({"message":"Required username and password"})
        }
        const findUser = await User.findOne({username})
        if(!findUser){
            res.json({"success":false, "message": "User donot exist, please register."}).status(404)
        }
        const truePassword = await bcrypt.compare(password, findUser.password)
        if(!truePassword){
            res.json({"success":false,"message":"Incorrect credentials"}).status(404)
        }
        const token = Jwt.sign({"id":findUser._id, "username":findUser.username}, process.env.JWT_SECRET)
        
        res.cookie('token',token)
            .status(200)
            .json({"success":true,
                    "message":"Logged in",
                    token,
                    user:findUser})
    }
    catch(err){
        console.log(err.message)
    }
    
})

app.post('/profile', async (req, res)=>{
    const {token} = req.cookies;
    Jwt.verify(token, process.env.JWT_SECRET, {}, (err, data)=>{
        if(err) throw err;
        res.json(data)
    }
)
})

app.post('/logout',async (req,res)=>{
    res.cookie('token', '').json({'success':true})
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
