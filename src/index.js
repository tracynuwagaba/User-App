const express = require('express');
const app = express();

// PORT
// require('dotenv').config();
// const { PORT } = process.env;
const port = 4000;

// Setup database
const db = require('./database/setup');
db();

// Setup schema
// const User = require('./models/userModel');

// import routes
const studentRoutes = require('./routes/studentRoutes');

// middleware
app.use(express.json());

// routes
app.use(studentRoutes);

// listening to port
app.listen(port, () => {
    console.log(`app running on port ${port}`);
});