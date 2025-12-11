const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

  s1 : Number,
  s2 : Number,
  s3 : Number

})
module.exports = mongoose.model('apimarks' , userSchema);