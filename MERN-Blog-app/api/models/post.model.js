import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        unique:true,
        require:true
    },
    summary:{
        type:String,
        unique:true,
        require:true
    },
    content:{
        type:String,
        unique:true,
        require:true
    },
    cover:{
        type:String,
    }
}, {timestamps:true})

export default mongoose.model('Post', postSchema)