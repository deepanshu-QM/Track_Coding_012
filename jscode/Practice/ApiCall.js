
//API call

async function getuserdata(){
    try{
        const response = await fetch("https://randomuser.me/api/");
        if(!response.ok){
            throw new Error();
        }
        const data = response.json()
        console.log(`Data : ${data}`)
    }catch(error){
        console.Error(`Message : ${error.message}`)
    }
}

getuserdata();