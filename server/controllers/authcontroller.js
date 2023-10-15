import { Loginservice, Registerservice } from "../services/authservices.js"

export const registercontroller = (req,res)=>{
   Registerservice(req,(response)=>{
      console.log(response);
    res.send(response)
   })
}

export const Logincontroller = (req,res)=>{
   Loginservice(req,(response)=>{
      console.log(response);
      res.cookie('authcookie',token,{maxAge:900000,httpOnly:true})
   //  res.send(response)
   })
}