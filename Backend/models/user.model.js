const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlenght: [3, "First name must be at least 3 characters"],
    },
  lastname: {
      type: String,
      minlenght: [3, "Last name must be at least 3 characters"],
    }


  },


  
email: {
      type: String,
      required: true,
      unique:true,
      minlenght: [5, "Email  must be at least 5 characters"],
    },

    password:{
        type:String,
        required:true,
        select:false,
    },

    socketId:{
        type:String,
    },
});
