import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import Jwt from "jsonwebtoken"


export const registerUser = async (req, res)=>{
    try{
    const {username, password} = req.body
    if(!username){
        console.log('asdasdasdf')
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
}

export const loginUser = async (req,res)=>{
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
    
}

export const userProfile = async(req, res)=>{
    // console.log('======>', req.cookies)
    if(!req.cookies.token){
        throw res.json({"success":false, "message":"no token available"})
    }
    const {token} = req.cookies 
    const data = await Jwt.verify(token, process.env.JWT_SECRET)
    res.json(data)
    // console.log(data)
    }

export const userLogout =(req,res)=>{
    res.cookie('token', '').json({'success':true})
}