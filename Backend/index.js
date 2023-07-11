//  import express from "express"
//  import cors from "cors"
//  import mongoose from "mongoose"
//  const app =express()
//  app.use(express.json())
//  app.use(express.urlencoded())
//  app.use(cors())

//  mongoose.connect("mongodb://localhost:27017/adeeshotelsignup",{useNewurlparser:true,useUnifiedTopology:true},()=>{
//      console.log("db connected")
//  })
// // new
// app.use(cors({
//     origin:["http:localhost:3000"],
//     method:['GET','POST'],
//     credentials:true,
// }))
// //  routes
// app.post("/login",(req,res)=>{
//     // res.send("my api login")
//     const {email,password}=req.body
//     User.findOne({email:email}, (err, user)=>{
//         if(user){

//             if(password===user.password){
//                 res.send({message:"login sucessful" , user:user})
//             }
//             else{
//                 res.send({message:"password didnt match"})
//             }
//         }else{
//             res.send({message:"user not registered"})
//         }
//     })


// })
// app.post("/signup",(req,res)=>{
//     // res.send("my api signup")
//     const { Fname,
//         Lname,
//         password,

//         email,
//         username,
//         gender,
//         contact}=req.body
//         User.findOne({email:email, username:username ,contact:contact},(err,user)=>{
//             if(user){
//                 res.send({message:"user already exist"})
//             }
//             else{
//                 const user =new User({
//                     Fname,
//                     Lname,
//                     password,

//                     email,
//                     username,
//                     gender,
//                     contact
//                 })
//                 user.save(err =>{
//                     if(err){
//                         res.send(err)
//                     }
//                     else{
//                         res.send({message:"sucessfully signed up"})
//                     }
//                 })
//             }

//         })

// })
// app.listen(9002,()=>{
//     console.log(" started AT PORT 9002")
// })
// const userSchema =new mongoose.Schema({
//     Fname:String,
//     Lname:String,
//     password:String,
//     confirmpassword:String,
//     email:String,
//     username:String,
//     gender:String,
//     contact:String,
// })
// const User = new mongoose.model("user",userSchema)
const express = require('express');
const cors = require('cors');

const Jwt = require("jsonwebtoken");
const jwtkey = 'e-comm'

require('./DB/config')
const app = express();
const User = require('./DB/User');
const res = require('express/lib/response');
// const Product = require('./DB/Product')
app.use(express.json());
app.use(cors());

app.post("/Sign", async (req, resp) => {
    // try {
    //     const password = req.body.password;
    //     const confirmpassword = req.body.confirmpassword;
    //     if (password === confirmpassword) {
    //         const user = new User({
    //             Fname: req.body.Fname,
    //             Lname: req.body.Lname,

    //             password: req.body.password,
    //             confirmpassword: req.body.confirmpassword,
    //             age: req.body.age,
    //             dob: req.body.dob,
    //             email: req.body.email,
    //             username: req.body.username,
    //             gender: req.body.gender,
    //             contact: req.body.contact
    //         })
    //         const users = await user.save()
    //         res.status(201).render(index)
    //     }
    //     else {
    //         alert("password not matching")
    //     }
    // }
    // catch (err) {
    //     res.status(400).send(err)
    // }
    // const password = req.body.password;
    //    const confirmpassword = req.body.confirmpassword;
    //     if (password === confirmpassword) {
    //         alert("wrong")
    //     }
    //     else{z
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    Jwt.sign({ result }, jwtkey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
            resp.send({ result: "something went wrong , please after sometime" })
        }
        resp.send({ result, auth: token })
    });
// }
});

app.post('/login', async (req, resp) => {
    console.log(req.body)
    if (req.body.password && (req.body.email || req.body.username)) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            Jwt.sign({ user }, jwtkey, { expiresIn: "2h" }, (err, token) => {
                if (err) {
                    resp.send({ result: "something went wrong , please after sometime" })
                }
                resp.send({ user, auth: token })
            })

        }
        else {
            resp.send({ result: "No User Found" })
        }
    }
    else {
        resp.send({ result: "No User Found" })
    }
});



app.listen(5000, () => {
    console.log("started")
});