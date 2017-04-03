var express = require("express");
var bodyParser= require("body-parser");
var mysql =  require("mysql");
var app =express();

app.set("view enigine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname +"/public"));

app.get("/",function(req,res){
  res.render("mainpage.login");
});

app.get("/register",function(req,res){
  res.render("register");
})

app.get("/login",function(req,res){
  res.render("login");
})

app.get("/zxcvf",function(req,res){
  res.render("admin");
})



app.listen(process.env.PORT||3000,function(){
  console.log("server is running on port number 3000");
});
