

/* Js api */

//1)
his_name = "RosewoodDevilKing";
console.log(his_name.length)

//2)
his_duty = "Carpenter at 412 Mountain Street";

function findIndex(his_duty, target){
console.log(`Index : ${his_duty.indexOf(target)}`)
}
findIndex(his_duty, "Mountain")


//3)
function findLastIndex(his_duty,target){
    console.log(`Last Index : ${his_duty.lastIndexOf(target)}`)
}
findLastIndex(his_duty)

//4)

let values = ["Deepak","Keneddy","Rama","John Snow"]
values.push("Sniff","pulkit","Rob","Ned","Starks")
console.log(values)

for(let i of  values){
    console.log(i.toUpperCase())
}

//5)
let arr = ["C++","c","Ruby","javascript","DeepLearning","Java"]
let deleted = arr.pop()
console.log(deleted)

//6)

let day = "NewJersey Is way ahead of the Current Iterations ";
console.log(`Slice : ${day.slice(5, 9)}`)

//7)
let names = ["Transactions","Filters","Union","Frontal","Wechat","Snoop Dogy"]

function Display(str){
    console.log(str)
}
names.forEach(Display)

//8

class studentsReportCard{
    constructor(NameOfStudent,std,cgpa,attentance,isPassed){
        this.NameOfStudent = NameOfStudent;
        this.std = std;
        this.cgpa = cgpa;
        this.attentance = attentance;
        this.isPassed = isPassed;
    }
    reportDisplay(){
        console.log(`Name Of Student : ${this.NameOfStudent} \n CLass : ${this.std} \n cgpa : ${this.cgpa} \n Attendance : ${this.attentance} \n  Result passed ? : ${this.isPassed}`)
    }
}

let report1 = new studentsReportCard("Monica","Btech",6.90,"85.8%", "Yes")
report1.reportDisplay()