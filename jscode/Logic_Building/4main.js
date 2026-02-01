
/* Group students by grade
students = [
  { name: "Amit", grade: "A" },
  { name: "Bina", grade: "B" },
  { name: "Chirag", grade: "A" },
  { name: "Disha", grade: "C" }
]
output : { A: ["Amit", "Chirag"], B: ["Bina"], C: ["Disha"] }  */


const students = [
  { name: "Amit", grade: "A" },
  { name: "Bina", grade: "B" },
  { name: "Chirag", grade: "A" },
  { name: "Disha", grade: "C" }
]

const output = {};

for(let i=0;i<students.length;i++){
    const name = students[i].name;
    const grade = students[i].grade;
    if(!output[grade]){
        output[grade] =  [];
    }

    output[grade].push(name);
}
console.log(output)
