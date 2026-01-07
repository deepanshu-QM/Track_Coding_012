
//Modern Approch --> 
import fs from  "fs/promises";
try{
    const data = await fs.readFile("simple.txt","utf-8");
    console.log(`Data : ${data}`)
}catch(error){
    console.log(`Message : ${error.messsage}`)
}



//Simple Approch  -> 
fs .readFile("simple.txt", "utf-8",(err, data) => {
    console.log(`data : ${data}`)
})