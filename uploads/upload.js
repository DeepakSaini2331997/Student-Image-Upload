const multer = require("multer")
/* remove commant, Store in local storage uplodas folder
const storage = multer.diskStorage({
    destination:((req,file,cb)=>{
        cb(null,"./uploads")
    }),
    filename:function(req,file,cb){
        //console.log(file," all rrrrrrrrrrrrr")
        const fileName = Date.now()+'-'+file.originalname
        cb(null,fileName)
    }
})
*/    
// store base64 in database
const storage = multer.memoryStorage()

const upload = multer({storage:storage})

module.exports = {
    upload
}