//#region Setup Modules
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var formidable = require('formidable');
const multer = require('multer');
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, '../UI/src/assets/PersonalImages')
  },
  filename: (req, file, cb) => {
var extension = '';
switch(file.mimetype){
  case 'image/png': extension = '.png';break;
  case 'image/jpg': extension = '.jpg';break;
  case 'image/jpeg': extension = '.jpeg';break;
}
var userID = req.header.id;
var imgPath = userID + extension;
dalMethods.ChangeImg(imgPath,userID);
    cb(null,imgPath)

  }
});
const upload = multer({ storage: storage })
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var dalMethods = require('../DAL/dashboard');
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
app.post("/getUserInfo",function (req, res)
{   
  dalMethods.GetUserInfo(req.body.id,function(result){
 res.send(JSON.stringify(result));
  });
 
});
app.post("/uploadImage",upload.single('image'),function (req, res)
{   
 
});
app.post("/changePhone",function (req, res)
{   
  dalMethods.ChangePhone(req.body.newPhone,req.body.id,function(result){
 res.send(JSON.stringify(result));
  });
 
});
app.post("/removeImage",function (req, res)
{   
  dalMethods.RemoveImage(req.body.id,function(result){
 res.send(JSON.stringify(result));
  });
 
});
app.listen(8081);
//#endregion
