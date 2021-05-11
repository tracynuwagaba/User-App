const express = require('express');
const app = express();

// PORT
// require('dotenv').config();
// const { PORT } = process.env;
const port = process.env.PORT || 4000;

// Setup database
const db = require('./database/setup');
db();

// Setup schema
// const User = require('./models/userModel');

// import routes
const studentRoutes = require('./routes/studentRoutes');

// middleware
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

// routes
app.use(studentRoutes);
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome!' });
});

// listening to port
app.listen(port, () => {
    console.log(`app running on port ${port}`);
});