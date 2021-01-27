const mongoose = require('mongoose');

// Create Schema
const userSchema = mongoose.Schema({
  first_name:{
    type: String,
    required: true
  },
  last_name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  created_date: {
    type: Date,
    default: Date.now
  },
});

const User = mongoose.model('User', userSchema);

module.exports.User = User;