

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

