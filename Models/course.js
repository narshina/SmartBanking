import mongoose from "mongoose";

const courseschema= new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    course:{
        type:String
    },
    university:{
        type:String
    },
    year:{
        type:String
    }


})
const course=mongoose.model('course',courseschema)
export default course