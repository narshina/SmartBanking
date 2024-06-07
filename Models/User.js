import mongoose from "mongoose";

let userschema=new mongoose.Schema(
    {
        account:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        dob:{
            type:String,
            required:true
        },
        street:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        state:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        },
        acno:{
            type:String,
            default:'000000'
        },
        usertype:{
            type:String,
            required:true
            
        },
        status:{
            type:String,
            default:"pending"
        },
        amount:{
            type:Number,
            default:0
        }
        

    }
)
let user=mongoose.model('user',userschema)

export default user