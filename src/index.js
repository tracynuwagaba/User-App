const express = require('express');
const app = express();
const studentRoutes = require('./routes/studentRoutes');

// PORT
require('dotenv').config();
const port = process.env.PORT || 4000;

// Setup database
const db = require('./database/setup');
db();

// middleware
app.use(express.json());

// routes
app.use(studentRoutes);
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome!' });
});

// listening to port
app.listen(port, () => {
    console.log(`app running on port ${port}`);
});