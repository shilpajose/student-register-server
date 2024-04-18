const students = require('../Models/StudentModel')

// student Registration
exports.studentRegistration = async (req, res) => {
    const { fullname, address, mobile, email, gender,dob,course } = req.body

    try {
        const existingStudent = await students.findOne({ email })
        if (existingStudent) {
            res.status(406).json('This student already registered!!!')
        } else {
            const newStudent = new students({
                fullname, address, mobile, email, gender,dob,course
            })
            await newStudent.save()
            res.status(200).json(newStudent)
        }
    }
    catch (err) {
        res.status(401).json(err)
    }
}
// // get all students
exports.getAllStudents = async (req, res) => {
    try {
        const allStudents = await students.find()
        res.status(200).json(allStudents)
    }
    catch (err) {
        res.status(401).json(err)
    }
}
