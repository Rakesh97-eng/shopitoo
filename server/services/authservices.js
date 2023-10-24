import { Usermodel } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt  from "jsonwebtoken";

export const Registerservice = async (req, callback) => {
  let userdetails = req.body;
  const saltRounds = 10;
  const password = userdetails.password;
  let hashedpassword = await bcrypt
    .genSalt(saltRounds)
    .then((salt) => bcrypt.hash(password, salt));
  let data = {
    username: userdetails.name,
    useremail: userdetails.email,
    userpassword: hashedpassword,
  };
  let adduser = await new Usermodel(data);
  adduser.save().then((data) => callback(data));
};


export const Loginservice = async (req, callback) => {
  let userdetails = req.body;
  let validEmail = await Usermodel.findOne({useremail:userdetails.email});

  try{
    let comparepassword = await bcrypt.compare(userdetails.password,validEmail.userpassword);
    if(comparepassword){
      var token = jwt.sign({ _id:userdetails.email}, 'LOGINSECRET');
       res.cookie('authcookie',token,{maxAge:900000,httpOnly:true})
      console.log("token",token);
    }
    else{
      callback("Password incorrect")
    }
  }
  catch(err){
    
    callback(err.message)
  }
};
