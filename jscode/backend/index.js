
const express = require('express');
const { use } = require('react');
const app = express();

function authMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;
    try{
         if(username != "prettier@34kl" || password != "pass@6780hh"){
        res.status(400).json({  msg : "Incorrect Input"})
     }else {
        next();
    }
}catch(error){
    console.log(`Message : ${error.message}`)
}
}

function kidneyMiddleware(req, res, next){
    const KidneyID = parseInt(req.query.KidneyID)
    if(KidneyID != 1 &&  KidneyID != 2){
        res.status(400).json({msg : "Incorrect Input "})
    }else{
        next();
    }
}
app.get("/", authMiddleware, kidneyMiddleware, (req, res) => {
    res.send("Kidney Is Fine ! .");
})