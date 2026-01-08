
// Production-Level Logger for small apps 


import fs from "fs";
import path from "path";

 //logDir is variable pointing to File
const logDir = "logs"  

//Checking Does File exists or not , if not make a file , The operation Is sync because only one time it will see not per Request!
if(!fs.existsSync(logDir)){             
    fs.mkdirSync(logDir);
}

export function logs(message){
    //assign date & time to variable date --> and convert the format into string and split from "T" and Give me date not time
    const date = new Date.toISOString().split("T")[0];   
    //path.join -> safely create file paths that works on all operating systems (not like this -> "logs" + date + ".log")
    const logFile = path.join(logDir ,`${date}.log`);
    const logMessage = `[${new date().toISOString()}] ${message}\n`;
    fs.appendFile(logFile,logDir, err => {
        if(err) console.log(`Message : ${err.message}`)
    });
}
