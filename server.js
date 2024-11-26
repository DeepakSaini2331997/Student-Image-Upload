const express = require("express")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const { mongooseConnect } = require("./db")
const router = require("./routes/student")

dotenv.config()
const app = express();

app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())
app.use("/api",router)

const port = process.env.PORT || 8001
const url = process.env.MONNGOOSEURL


mongooseConnect(url).then(()=>{
    console.log("Database Connect Successfully")
}).catch((error)=>{
    console.log("Databse not Connected",error)
})

// app.get("/",(req,res)=>{
//     res.send("hello run this")
// })


app.listen(port,()=>{
    console.log("Connect Succesfully on localhost:"+port)
})