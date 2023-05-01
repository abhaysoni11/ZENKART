const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const http = require("http");
const server = http.createServer(app);

mongoose.connect("mongodb://127.0.0.1:27017/Zenkart").then(()=>{
    console.log("Database Connected:::::::::");
}).catch((err)=>{
    console.log("Error in Database Connection ::::::::::::>",err);
})

const userModels = require("./userModel");

app.post("/signUp",async(req,res)=>{
    const userData = {
        name : req.body.Name,
        email : req.body.Email,
        password : req.body.Password
    }
    try{
        const isAlreadyRegistered = await userModels.findOne({email:req.body.Email});
        if(!isAlreadyRegistered){
            const datas = new userModels(userData);
            await datas.save();
            res.status(200).json("Data Inserted");
        }else{
            res.send(null);
        }
    }catch(e)
    {
        console.log("Error to save Data :::::: ",e);
    }
})

app.get("/login",async(req,res)=>{
    try{
        const {Email,Password} = req.query;
        const isValidUser = await userModels.findOne({email : Email});
        if(isValidUser)
        {
            if(Password === isValidUser.password){
                res.send({name : isValidUser.name,email : isValidUser.email});
            }else{
                
                res.send(null);
            }
        }else{
           
            res.send(null);
        }
    }catch(e)
    {
        console.log("Error to get Data");
    }
})

app.get("/getName",async(req,res)=>{
    try{
        const {email} = req.query;
        console.log("Client Api Call for Name",email);
        const isValidUser = await userModels.findOne({email : Email});
        if(isValidUser)
        {
            if(Password === isValidUser.password){
                res.send({name : isValidUser.name});
            }else{
                
                res.send(null);
            }
        }else{
           
            res.send(null);
        }
    }catch(e)
    {
        console.log("Error to get Data");
    }
})

server.listen(8080,()=>{
    console.log("Server is Running on : 8080");
})