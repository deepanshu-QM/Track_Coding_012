

/* Type Of setInterval :

-> setInterval(code)
->setInterval(code, delay)
->setInterval(function)
->setInterval(function , delay)
->setInterval(function, delay ,parameter) or many param..            */


//1) This Will Print the Output Every 3 second (Dealy) Repeatly

setInterval(function(){
    console.log("This Program is Written in JavaScript ");
}, 3000);


//2) Adding ClearInterval to stop the Program (Event Loop)
const progm = setInterval(() => {
    console.log("This Program is Written in JS");
}, 3000);


setTimeout(() => {
    clearInterval(progm);
    console.log("Execution is Stopped");
},4000)


//3) Passing arugms

function add(a,b){
    let sum = a + b;
    console.log(sum);
}
setInterval(add,3000, 12,23);            //setInterval(function,delay_time, a,b) 


//4) 

function multiply(a,b){
    let mul = a *b;
    console.log(mul);
}
const id =  setInterval(multiply,2000,11,12)
setTimeout(() => {
    clearInterval(id);
},10000)