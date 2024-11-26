const student = require("../models/student")

async function createStudent(req,res){
    try{
        console.log(req.body," body paramsss")
        const { name,email,phone,age } = req.body
        const newstudent = new student({
            name,
            email,
            phone,
            age
        })
        await newstudent.save()
        res.status(201).json({msg:"Student record create successfully",student:newstudent})
    }catch(err){
        res.status(500).json({msg:"Error to create student record"})
    }
}

module.exports = {
    createStudent
}