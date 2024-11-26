const express = require("express")
const { createStudent } = require("../controllers/student")
const { upload } = require("../uploads/upload")
const router = express.Router()

router.post("/create", upload.single('image'),createStudent);

module.exports = router