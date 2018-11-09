var express=require("express");
var app=express();
var db=require('./db')

var bodyParser=require("body-parser");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

var books=require('./routes/books')
var users=require('./routes/users')

app.get("/",(req,res)=>{
    res.send("Welcome to online library")
})

//private api

app.use("/api/books",books);
app.use("/api/users",users)

app.listen(3001,(req,res)=>{
    console.log("Online Library server started")
})