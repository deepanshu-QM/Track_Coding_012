
//Promise :

function Task(){
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            console.log("Steady State ....");
        },2000);
    });
}

Task().then((message)=> {
    console.log(message);
});


//2)

function orderFood(){
    return new Promise((resolve,reject) => {
        let foodAvail = true;
        if(foodAvail){
            resolve("Your Menu ");
        }else{
            reject("food is not available ");
        }
    });
}

orderFood()
      .then((message) => {
    console.log(message);
   
})
      .catch((error)=> {
        console.log(error.message)
      })
      .finally(() => {
        console.log("Program Run SucessFully..")
      })