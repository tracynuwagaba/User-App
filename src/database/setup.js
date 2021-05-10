const mongoose = require('mongoose');

// connection string
const MONGO_URI = "mongodb+srv://tracy:trp%402020@cluster0.bvkat.mongodb.net/test";

// Setup database
module.exports = () => {
    mongoose.connect(MONGO_URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
       useFindAndModify: false 
    }, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('database connected');
        }
    });
};