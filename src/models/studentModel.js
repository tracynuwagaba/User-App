const mongoose = require('mongoose');

// Create student schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    },
    country: {
        type: String,
        required: true
    }
});

mongoose.set('useCreateIndex', true);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;