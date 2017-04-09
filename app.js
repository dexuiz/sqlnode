var express = require("express");
var bodyParser= require("body-parser");
var mysql =  require("mysql");
var app =express();

app.set("view enigine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname +"/public"));

var connection = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"secret",
  database:"users",
});

connection.connect(function(err){
  if(err){
    console.log("error took place",err);
  }
});


app.get("/",function(req,res){
  res.render("mainpage.login");
});

app.get("/register",function(req,res){
  res.render("register");
});

app.get("/login",function(req,res){
  res.render("login");
});

app.get("/zxcvf",function(req,res){
  res.render("admin");
});

app.post("/register",function(req,res){
  connection.query("insert into users ?",req.body,function(error,results){
    if(error){
      console.log("error took place while insertion");
    }else {
      console.log(results)
    }
  })
})



app.listen(process.env.PORT||3000,function(){
  console.log("server is running on port number 3000");
});
