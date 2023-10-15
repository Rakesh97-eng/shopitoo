import express from "express";
import { Logincontroller, registercontroller } from "../controllers/authcontroller.js";

export const routes = express.Router();

routes.post('/register',(req,res)=>{
    registercontroller(req,res)
})
routes.post('/login',(req,res)=>{
    Logincontroller(req,res)
})
