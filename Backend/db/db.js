const mongoose = require("mongoose");

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log('Connected To DB'))
    .catch(err => console.log('Failed to connect to DB:', err));
    
}

module.exports = connectToDb;


