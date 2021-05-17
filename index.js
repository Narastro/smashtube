'use strict';
import express from "express";
import logger from "morgan";
const app = express();

const PORT = 4000;

const handleListening = ()=>console.log(`Listening on:http://localhost:${PORT}`);

const betweenHome = (req,res,next) => {
    console.log('ha');
    next();
}

const handleHome = (req,res)=>res.send("Hello");

const handleProfile = (req,res)=> res.send("Hi");

app.use(betweenHome);
app.get("/",handleHome);
app.get("/profile",handleProfile);
app.listen(PORT,handleListening);

