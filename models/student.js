const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        phone:{
            type:Number,
            required:true,
            unique:true
        },
        age:{
            type:Number
        },
        image:{
            type:String
        }
    },{
        timestamps:true
    }
)
const student = mongoose.model("student",studentSchema)
module.exports = student