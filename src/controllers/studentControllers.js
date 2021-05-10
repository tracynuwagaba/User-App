const Student = require("../models/studentModel");

exports.createNewStudent = (req, res) => {
    Student.create({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country
    }, (err, newStudent) => {
        if (err) {
            return res.status(500).json({ message: err });
        } else {
            return res.status(200).json({ message: "new student created", newStudent});
        }
    });
};

//  fetch all students
exports.fetchStudents = (req, res) => {
    Student.find({}, (err, students) => {
        if (err) {
            return res.status(500).json({ message: err });
        } else {
            return res.status(200).json({ message: students });
        }
    });
};

// fetch single student
exports.fetchStudent = (req, res) => {
    Student.findById(req.params.id, (err, student) => {
        if (err) {
            return res.status(500).json({ message: err });
        } else if (!student) {
            return res.status(404).json({ message: "student not found" });
        } else {
            return res.status(200).json({ student });
        }
    });
};

// update student
exports.updateStudent = (req, res) => {
    Student.findById(req.params.id, {
        name: req.body.name,
        email: req.body.email,
        country: req.body.country
    }, (err, student) => {
        if (err) {
            return res.status(500).json({ message: err });
        } else if (!student) {
            return res.status(404).json({ message: "student not found "});
        } else {
            student.save((err, updatedStudent) => {
                if (err) {
                    return res.status(500).json({ message: err });
                } else {
                    return res.status(200).json({ message: "student updated successfully" });
                }
            });
        }
    });
};

// delete student
exports.deleteStudent = (req, res) => {
    Student.findByIdAndDelete(req.params.id, (err, student) => {
        if (err) {
            return res.status(500).json({ message: err });
        } else if (!student) {
            return res.status(404).json({ message: "student not found" });
        } else {
            return res.status(200).json({ message: "student deleted successfully" });
        }
    });
};