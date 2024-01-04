import express from "express";
import cors from 'cors'

const app = express()
app.use(cors)
app.use(express.json())

app.get('/test', (req,res)=>{
    res.json("App running......")
})

app.post('/register', (req, res)=>{
    const {username, password} = req.body
    res.json({requestData:{username, password}})
})

app.listen(4000, ()=>console.log("Server running at port 4000."))
