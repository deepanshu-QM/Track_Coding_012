
/*  Return total number of items per category and overall total.
Input = {
    fruits: ["apple", "banana"],
    veggies: ["carrot", "pea", "beans"],
    grains: ["rice", "wheat"]
}
Output : { fruits: 2, veggies: 3, grains: 2, total: 7 }  */

const Input = {
    fruits: ["apple", "banana"],
    veggies: ["carrot", "pea", "beans"],
    grains: ["rice", "wheat"]
}

const output = {};
for(let key in Input){
    let count = 0;
    for(let i=0;i<Input[key].length;i++){
        count++;
    }
    output[key] = count;
}
console.log(output)