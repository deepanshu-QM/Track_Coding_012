

async function getUserByEmail(Email){
    try{
        const user = await  User.findOne({Email});
        if(!user){
            throw new Error(`User is not Found `)
        }

        console.log(`User : ${user}`)
    }catch(error){
        console.Error(`Message : ${error.message}`)
    }
}

getUserByEmail("JohnSnow34@gmail.com")