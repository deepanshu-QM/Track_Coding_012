
//Modern Approch / Async approch  --> 
import fs from  "fs/promises";
try{
    const data = await fs.readFile("Notes.txt","utf-8");
    console.log(`Data : ${data}`)
}catch(error){
    console.log(`Message : ${error.messsage}`)
}



//Simple Approch  (Not for Server side Logic) -> 
fs .readFile("Notes.txt", "utf-8",(err, data) => {
    console.log(`data : ${data}`)
})

