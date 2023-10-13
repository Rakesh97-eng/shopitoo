import express from "express";

export const routes = express.Router();

routes.post('/register',(req,res)=>{
    res.send("Working routes")
})
routes.post('/login',(req,res)=>{
    res.send("Working routes")
})
