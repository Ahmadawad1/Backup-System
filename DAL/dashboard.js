//#region Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/safestorage');
var userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    location : String,
    image : String
 });
var User = mongoose.model("users", userSchema);
//#endregion

//#region DAL Methods

function GetUserInfo(id,callback)
{ 
User.findOne({_id: id},function(error,result){
  if(error) callback('Database Error');
  else callback(result); 
 });

}
function RemoveImage(id,callback)
{ 
User.updateOne({_id: id},{$set:{image:'user.png'}},function(error,result){
  if(error) callback('Database Error');
  else callback('Image was removed'); 
 });

}
function ChangeImg(imgPath,id){
  var condition = {_id : id};
  var newValues = {$set:{image : imgPath}};
  User.updateOne(condition,newValues,function(error,result){
    if(error) callback('Database Error');
    else callback('Image was updated');
  });
  
}
function ChangePhone(newPhone,id,callback){
  var condition = {_id : id};
  var newValues = {$set:{phone : newPhone}};
  User.updateOne(condition,newValues,function(error,result){
    if(error) callback('Database Error');
    else callback('Phone number was updated');
  });
  
}
//#endregion

module.exports = {GetUserInfo,ChangePhone,RemoveImage,ChangeImg};
