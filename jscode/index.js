
//Write a function createHelloWorld.It should Return a new Function that always Return "Hello World "

function createHelloWorld(){
    return function fn(...args){
        return "Hello World";
    }
};

console.log(createHelloWorld()());




//Rest Argument

function fn(...args){
    const sum = args[0] + args[1] + args[2] + args[3] + args[4];
    return sum;
}
console.log(fn(2,3,4,5,9));



function fun(){
    function fv(a,b){
        const sum = a + b;
        return sum;
    }
    return fv;
}

const fv = fun();
console.log(fv(23,45))


var createHelloWorld = function(){
    return function f(...args){
        return "Hello World"
    }
 };

 const f = createHelloWorld();
 console.log(f({},null, 42))