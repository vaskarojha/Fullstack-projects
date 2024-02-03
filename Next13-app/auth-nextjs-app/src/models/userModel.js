import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Provide username"],
        unique:true
    },
    email:{
        type:String,
        required:[true,"Provide email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Provide password"]
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    forgetPasswordToken:String,
    forgetPasswordTokenExpiry:Date,
    verifyTokenExpiry: Date
})

const User = mongoose.model.nextUsers || mongoose.model("nextUser", userSchema);

export default User;
