
import express from "express";
import log from "./logger.js";

const app = express();

app.get("/login", (req,res) => {
    log(`Login attempt from IP : ${req.ip}`)
    res.send(`Logged`)
});
app.use( (err, req, res,next) => {
    log(`Error : $ ${err.message}`)
    res.status(500).send("Something Wents Wrong")
});

//