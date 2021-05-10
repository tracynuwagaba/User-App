const express = require('express');
const router = express.Router();
// const Student = require('../models/studentModel');
const studentController = require('../controllers/studentControllers');

// POST request to /students to create a new student
router.post('/students', studentController.createNewStudent);

// GET request to /students to fetch all students
router.get('/students', studentController.fetchStudents);

// GET request to /students/:id to fetch a single student
router.get('/students/:id', studentController.fetchStudent);

// PUT request to /students/:id to update a single student
router.put('/students/:id', studentController.updateStudent);

// DELETE request to /students/:id to delete a student
router.delete('/students/:id', studentController.deleteStudent);

module.exports = router;