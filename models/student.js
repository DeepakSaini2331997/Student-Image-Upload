const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        phone:{
            type:Number,
            required:true
        },
        age:{
            type:Number
        },
        photo:{
            type:String
        }
    },{
        timestamps:true
    }
)
const student = mongoose.model("student",studentSchema)
module.exports = student