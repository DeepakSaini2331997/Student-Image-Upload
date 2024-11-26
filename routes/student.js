const express = require("express")
const { createStudent } = require("../controllers/student")
const router = express.Router()

router.post("/create", createStudent);

module.exports = router