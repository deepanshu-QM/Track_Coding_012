

import fs from "fs/promises";

//Operation 1 : Reading
try{
    const data = await fs.readFile("Notes.txt","utf-8");
    console.log(`Data : ${data}`)
}catch(error){
    console.log(`Message :${error.message}`)
}

//Operation 2 : Writing

try{
    const data2 = await fs.writeFile("Notes.txt", "This text is Overwriting over the current Files content , so Avoid this approch");
    console.log(`Data : ${data2}`)
}catch(error){
    console.log(`Message : ${error.message}`)
}

//Operation 3 : Append 
try{
    const data3 = await fs.appendFile("Notes.txt", "\n This New Text will be added to current file content without Overwriting");
    console.log(`Data : ${data3}`)
}catch(error){
    console.log(`Message : ${error.message}`)
}

//Operation 4 : Delete file

try{
    const del = await fs.unlink("Notes.txt")
    console.log(`File : ${del}`)
}catch(error){
    console.log(`Message : ${error.message}`)
}