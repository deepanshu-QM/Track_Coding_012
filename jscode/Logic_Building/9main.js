
//1)Await 
function TodoTask(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Your task : Run for 10km straight");
        },2000);
    })
};

async function Display(){
    const msg = await TodoTask();
    console.log(msg);
}

Display();