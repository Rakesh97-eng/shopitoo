import express from "express";
import mongoose from "mongoose";
import { routes } from "./routers/authroutes.js";
const app = express();
const port=9000;
app.use(express.json())
app.use('/auth',routes)

mongoose.connect('mongodb+srv://rakeshraj2097:Rakesh2097@reactdev.pct0kxk.mongodb.net/')

app.listen(port, () =>{
    console.log('==>Server running on',`${port}`);
})