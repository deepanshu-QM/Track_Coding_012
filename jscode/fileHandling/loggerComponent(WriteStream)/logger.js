

import fs from "fs";
import path from "path";

let LogsStream;
let canWrite = true;

function createLogStream(){
    //Logger format it 
    const date = new date().toISOString().split(0,10);
    const LogFilePath = path.join(`Logs`, `${date}.log`)

    //logger --> stream (stream allocates internal Buffer 64kb )
    return fs.createWriteStream(LogFilePath, {
        flags : "a",
        highWaterMark : 64*1024
    });
}
export function initlogger(){
    const LogsStream = createLogStream();

    LogsStream.on(`drain`,()=> {
        console.log(`Buffer is Drained , Resume Logs`);
        canWrite = true;
    });
}

//Rotate the log

setInterval(() => {
    const today = new Date().toISOString().split(0,10)
    //If logs are not Today
    if(!LogsStream.path.includes(today)){
        //close the logs 
        LogsStream.end(() => {
            //start new Logs (File Open)
            LogsStream = createLogStream();
            canWrite = true;
        });
    }
},60*1000)

export function log(message){
    if(!canWrite) return
    const format = `[${new Date().toISOString()}] ${message} \n`;
    canWrite = LogsStream.write(format)
    if(!canWrite) console.log(`Buffer is Full`)     
}

export function shutdownlogger(){
    LogsStream.end(() => {
        console.log(`Logs Complete`)
    })
}

/* Flow Of the Program  
app send message ----> logger -----> logger format it(add Time stamps , format message) ---->  logger Give to stream(It act Like pipline b\w app and disk , queue) ----->Stream put it into buffer(temporary memory where logs are stored)  -----> Disk write from buffer slowly*/