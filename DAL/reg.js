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
function InsertUser(name,email,password,callback)
{

  var newUser = new User({
      name: name,
      email: email,
     password: password,
     phone:'Not Specified',
     location : 'Not Specified',
     image : 'user.png'
   });
  User.findOne({email: email},function(error,result){
    if(error) callback('Database Error');
    else if(result != null)  callback('Email was already used by someone');
else
{ 
   newUser.save(function(err, User){ });
   callback('Success');
}
   });
  
}
function AuthenticateUser(email,password,callback)
{ 
User.findOne({email: email},function(error,result){
  if(error) callback('Database Error');
  else if(result == null)  callback('Invalid Email');
  else if(result.password != password) callback('Incorrect Password');
  else callback(result._id); 
 });

}
//#endregion

module.exports = {AuthenticateUser,InsertUser};
