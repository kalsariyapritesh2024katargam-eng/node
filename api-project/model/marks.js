const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  Student_username : {type:mongoose.Schema.Types.ObjectId,
    ref:'apiuser',
    require:true
  },
  Student_name : {type:mongoose.Schema.Types.ObjectId,
    ref:'apistudent',
    require:true
  },
  s1 : Number,
  s2 : Number,
  s3 : Number

})
module.exports = mongoose.model('apimarks' , userSchema);