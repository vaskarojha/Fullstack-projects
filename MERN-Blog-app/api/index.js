import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import Jwt from "jsonwebtoken"
import cookieParser from "cookie-parser";
import multer from "multer";
import fs from "fs"
import path from 'path'
import Post from './models/post.model.js'
import 'dotenv/config'
import { fileURLToPath } from 'url';
import testRoute from "./routers/test.route.js";
import userRoute from "./routers/user.route.js";

const __filename = fileURLToPath(import.meta.url);

const app = express()
app.use(cors({credentials:true, origin:'http://localhost:3000'}))
app.use(express.json())
app.use(cookieParser())

app.use('/test', testRoute)
app.use('/user', userRoute)

const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(__dirname +'/uploads'))


const upload = multer({ dest: 'uploads/' })
// const DB_NAME = process.env.DB_NAME
const DB_URL = process.env.DB_URL

app.get('/test', (req,res)=>{
    res.json("App running......")
})




app.post('/post', upload.single('files') ,async (req, res)=>{
    const fileWithExt = req.file.originalname
    const {path} = req.file
    const fileAndExt = fileWithExt.split('.')
    const fileExt = fileAndExt[fileAndExt.length-1]
    const newPath = path+'.'+fileExt
    fs.renameSync(path,newPath)

    const {token} = req.cookies 
    const data =  Jwt.verify(token, process.env.JWT_SECRET)
    console.log('jwt===>', data)
    const userId = data.id
    const {title, summary, content} = req.body

    const createdPost = await Post.create({
        title,
        summary,
        content,
        cover:newPath,
        author:userId
    })
    res.json({"success":true,
                createdPost})

})

app.get('/post',async  (req,res)=>{

    const posts = await (Post.find()
    .populate('author', ['username']))
    .sort({createdAt: -1})
    .limit(20)
    res.json(posts)
    
})

app.get('/post/:id', async (req, res)=>{
    const id = req.params.id
    const post = await Post.findById(id)
    res.json({post})
})

app.put('/post',upload.single('file'), async(req,res)=>{
    let newPath= ''
    if(req.file){
        const fileWithExt = req.file.originalname
        const {path} = req.file
        const fileAndExt = fileWithExt.split('.')
        const fileExt = fileAndExt[fileAndExt.length-1]
        const newPath = path+'.'+fileExt
        fs.renameSync(path,newPath)    
    }
    const {token}=  req.cookies;
    const data =  Jwt.verify(token, process.env.JWT_SECRET)
    console.log('jwt===>', data)
    const userId = data.id
    const {id, title, summary, content} = req.body


    const postDoc = await Post.findById(id);
    
    if(JSON.stringify(postDoc.author) !== JSON.stringify(userId)){
        res.json({"message":"invalid user id..",
                userId,
            'author':postDoc.author})
    }

    await postDoc.updateOne({
        title,
        summary,
        content,
        cover:newPath?newPath:postDoc.cover
    })
    res.json({'message':'ok'})
    // const createdPost = await Post.create({
    //     title,
    //     summary,
    //     content,
    //     cover:newPath,
    //     author:userId
    // })
    // res.json({"success":true,
    //             createdPost})
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
