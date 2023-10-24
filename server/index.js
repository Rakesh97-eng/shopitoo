import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { routes } from "./routers/authroutes.js";
import cors from "cors";

const app = express();
const port=9000;
app.use(express.json())
app.use(cors())
app.use('/auth',routes)
app.use(cookieParser());




mongoose.connect('mongodb+srv://rakeshraj2097:Rakesh2097@reactdev.pct0kxk.mongodb.net/')

app.listen(port, () =>{
    console.log('==>Server running on',`${port}`);
})