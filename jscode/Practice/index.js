

//Clean Code : UserLoginValidator 
function userLoginValidator(username,password){
    try{
        if(!username || typeof username !== "string"){
            throw new Error("Your username is Wrong : use string Type ")
        }
        if(typeof password !== "string"){
            throw new Error("Your password is Wrong : use string Type")
        }
        if(password.length <= 6){
            throw new Error("Your password must be more than 6 character ")
        }
        if(username.toLowerCase() !== "john snow"){
            throw new Error("Invalid username")
        }

        console.log("Login sucessfully")
    }catch(error){
        console.log("Error : ", error.message)
    }
}

userLoginValidator("Gabriell Daisey", "uytgvjgvbbmhg")