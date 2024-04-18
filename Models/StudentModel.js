const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    }
})

const students = mongoose.model('students',studentSchema);

module.exports = students