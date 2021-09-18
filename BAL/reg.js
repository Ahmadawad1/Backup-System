//#region Setup Modules
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var dalMethods = require('../DAL/reg');
//#endregion
//#region Session Middleware
var sessions = require('express-session');
var session;
app.use(sessions({
  secret: "secret",
  saveUninitialized:true,
  cookie: { maxAge:  1000 * 60 * 60 * 24},
  resave: false
}));
//#endregion
//#region CORS Middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
    res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE,PUT") ;
    next();
  });
  //#endregion
//#region Post Requests  
app.post("/register",function (req, res)
{   
  dalMethods.InsertUser(req.body.name,req.body.email,req.body.password,function(result){
 res.send(JSON.stringify(result));
  });
 
});
app.post("/login",function (req, res)
{    

dalMethods.AuthenticateUser(req.body.email,req.body.password,function(result){
  //session=req.session;
  //session.email=req.body.email;
 res.send(JSON.stringify(result));
});
});
app.listen(8080);
//#endregion
