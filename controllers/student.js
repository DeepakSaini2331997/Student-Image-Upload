const student = require("../models/student")

async function createStudent(req,res){
    try{
        const { name,email,phone,age } = req.body
        /* remove comment if store in local storage
        const fileName = req.file? req.file.path : null
        */
        const fileName = req.file? req.file.buffer.toString('base64') : null

        const newstudent = new student({
            name,
            email,
            phone,
            age,
            photo:fileName
        })
        //console.log(newstudent," all insert record++++++++++")
        await newstudent.save()
        res.status(201).json({msg:"Student record create successfully",student:newstudent})
    }catch(err){
        res.status(500).json({msg:`Error to create student record ${err}`})
    }
}

module.exports = {
    createStudent
}