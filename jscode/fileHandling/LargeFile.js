
// since fs.createReadStream() is async internally 

import fs from "fs";

const stream = fs.createReadStream("Notes.txt","utf-8");
stream.on("data", chunks => {
    console.log(chunks)
})

stream.on("error", error => {
    console.log("Message : ", error.message)
})

stream.on("End",()=> {
    console.log("Finished")
})