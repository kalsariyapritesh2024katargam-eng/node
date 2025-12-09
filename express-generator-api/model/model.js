const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : String,
    surname : String
})

module.exports = mongoose.model('test' , userSchema);