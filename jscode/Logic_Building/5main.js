
/* Flatten object of arrays
Input = {
  morning: ["tea", "coffee"],
  evening: ["juice", "milkshake"],
  night: ["water"]
}
Return a single array of all drinks.
output : ["tea", "coffee", "juice", "milkshake", "water"]          */

const Input = {
    morning: ["tea", "coffee"],
    evening: ["juice", "milkshake"],
    night: ["water"]
}

const output = [];  //New Object

for(let key in Input){  //1 loop

    for(let i=0;i<Input[key].length;i++){
        output.push(Input[value][i]);
    }
}
console.log(output);

