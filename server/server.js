const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const blogModel = require("./models/UserModel")
const { application } = require("express")
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors())

app.post("/register",(req,res)=>{
    blogModel.create({...req.body})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

app.post("/login",(req,res)=>{
    const {email,password} = req.body
    blogModel.findOne({email,password})
    .then((user)=>{
        if(user){
            if(user.password === password){
           res.json("Ugurlu")
            }else{
                res.json("Duzgun parol yaz")
            }
        }else{
            res.json("Sagol")
        }
    })
})

app.listen(process.env.PORT,()=>{
    console.log(`Bu server ${process.env.PORT}-da isleyir!`)
})

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log('Daxil oldunda ureyim')
})