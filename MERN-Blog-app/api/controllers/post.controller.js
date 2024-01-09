import fs from "fs"
import Jwt from "jsonwebtoken"
import Post from '../models/post.model.js'


export const createPost =  async (req, res)=>{
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

};

export const getPost =async  (req,res)=>{
    const posts = await (Post.find()
    .populate('author', ['username']))
    .sort({createdAt: -1})
    .limit(20)
    res.json(posts)
}

export const getPostById = async (req, res)=>{
    const id = req.params.id
    const post = await Post.findById(id)
    res.json({post})
}

export const updatePost = async(req,res)=>{
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
}

export const deletePost = async (req, res)=>{
    console.log('deletepost controller')
    const {id}= req.params
    await Post.findByIdAndDelete(id)
    res.json({"success":true, "message":"Post deleted!"})
}

