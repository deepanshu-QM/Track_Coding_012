
/* Question Input = {
    math: [2, 3, 4],
    physics: [1, 5],
    chemistry: [2, 2, 2]
}    
Output : { math: 24, physics: 5, chemistry: 8 }  */


const Input  = {
     math: [2, 3, 4],
     physics: [1, 5],
     chemistry: [2, 2, 2]
}

const output = {};

//First Loop over the Object
for(let key in Input){
    let  mul = 1;

    //Second Loop Between values 
    for(let i=0;i<Input[key].length;i++){
        mul *= Input[key][i];
    }
    output[key] = mul;
}

console.log(output)
