const express= require('express')
const studentController = require('../Controllers/studentController')

const router = new express.Router()

// admin student-registration
router.post('/student-registration',studentController.studentRegistration)

// get all student data
router.get('/all-students',studentController.getAllStudents)

module.exports= router