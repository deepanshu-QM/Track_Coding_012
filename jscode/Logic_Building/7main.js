
//Understanding CallBack

function sayHello(name,CallBack){
    console.log(`Hello ${name}`);
    CallBack();
}

function goodBye(){
    console.log("Good bye ");
}
sayHello("John", goodBye);      //We sended argument + function as Argument 

//2) 

function TaskTodelay(callback){

    const interval = setInterval(() => {
        console.log("Leave this Town ! ..");
    },2000);
    callback();
    return interval;
}

function messageToDelay(){
    console.log("Winter is Coming.");
}

const id = TaskTodelay(messageToDelay);

setTimeout(() => {
    clearInterval(id);
},10000)
