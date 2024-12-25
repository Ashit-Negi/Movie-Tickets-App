const mongoose = require('mongoose')

// making schema

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true

  },
  isAdmin:{
    type: Boolean,
    default: false
  }
} , {timestamps:true})
module.exports = mongoose.model('users' , userSchema)