const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    username:{
        type: String,
        // required: [true],
        // unique:true
        },
    email:{
        type: String,
        // required: [true],
        // unique:true
        },
    password:{
        type: String,
        required: [true]
        },
    age:String,
    Fname:{
        type: String,
        // required: [true]
        },
    Lname:{
        type: String,
        // required: [true]
        },
    confirmpassword:{
        type: String,
        // required: [true]
        },
    dob:{
        type: String,
        // required: [true]
        },
    contact:{
        type: String,
        // required: [true],
        // unique:true
        },
    gender:String
})

module.exports = mongoose.model("users", usersSchema);