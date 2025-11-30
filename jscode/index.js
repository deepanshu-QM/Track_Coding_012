


/* Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).  */
var createCounter = function(n) {
    var count = 0;
    return function counter() {
        return n + count++;
    }
    return counter;
};
const counter = createCounter(10);
console.log(counter(), counter(), counter())




 var createCounterZ = function(n){
    countz = 0;
    return function counters(){
        return n + countz++;
    };
    return counters;
 };
 const counters = createCounterZ(-2);
 console.log(counters(), counters(), counters());