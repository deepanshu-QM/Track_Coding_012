
/* Filter numbers greater than 10
Input = {
    food: [5, 15, 20],
    travel: [8, 12, 3],
    bills: [25, 5, 15]
}
Output : { food: [15, 20], travel: [12], bills: [25, 15] }   */

const Input = {
    food: [5, 15, 20],
    travel: [8, 12, 3],
    bills: [25, 5, 15]
}

const output = {};

for(let key in Input){
    let temp = [];
    for(let i=0;i<Input[key].length;i++){
        if(Input[key][i] > 10){
            temp.push(Input[key][i]);
        }
    }
    output[key] = temp;
}
console.log(output)