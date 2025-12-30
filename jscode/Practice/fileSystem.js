

//Build A secure File Upload system


function uploadFile(fileName,fileSize){
    try{
        if(typeof fileName !== "string"){
            throw new Error(`Invalid Typed : file name should not a number `);
        }
        const allowedExtension = [".png",".jpg",".pdf"];
        const fileNewName = fileName.toLowerCase()
        if(!allowedExtension.some(ext => fileNewName.endsWith(ext))){
            throw new Error(`Invalid Typed : file name should end with .png, .jpg, .pdf`);
        }

        const MAX_SIZE = 5 * 1024 * 1024  // 1 MB = 1024 * 1024 bytes
        if(fileSize > MAX_SIZE){
            throw new Error("File Size exceeds 5MB limit")
        }

        console.log(`File is Uploaded SucessFully : ${fileName}`)
    }
    catch(error){
        console.error(error.message);
    }

    finally{
        console.log("File Process SucessFully")
    }
}
uploadFile("img.JPG", 12*1024*1024)