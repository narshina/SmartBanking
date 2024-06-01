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
            type:String
        },
        usertype:{
            type:String,
            required:true
            
        },
        status:{
            type:String,
            default:"pending"
        }
        

    }
)
let user=mongoose.model('user',userschema)

export default user