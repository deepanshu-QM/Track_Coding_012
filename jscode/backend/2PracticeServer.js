
const express = require("express");
const app = express();
const port = 3000;

//Using MiddleWare 
app.use(express.json())
//data 
let  Employees = [{
    Empl_name : "John Snow",
          Age : 23,
        Salary :[{
            salaryReceived : true,
        },{
            salaryReceived : false,
        },{
            salaryReceived : true,
        },{
            salaryReceived : true
        }]
}]

/* Since Here I used big names of variables , It's important to used small Names for Good Practice */

app.get("/", (req, res) => {
    let  emplySalary = Employees[0].Salary;
    let   noOfSalaries = emplySalary.length;
    let   noOfTimesSalariesReceived = 0;
    for(let i=0;i<emplySalary.length;i++){
        if(emplySalary[i].salaryReceived){
            noOfTimesSalariesReceived += 1;
        }
    }

    let  noOfTimesSalaryNotReceived = noOfSalaries - noOfTimesSalariesReceived;

    res.json({
        noOfSalaries,
        noOfTimesSalariesReceived,
        noOfTimesSalaryNotReceived
    })
});

app.put("/p", (req,res) => {
    let    { salaryReceived } = req.body;

    if(typeof salaryReceived !== "boolean"){
        return res.status(400).json({
            error : "Salary must be Received in the  form of True & false "
        })
    }
    Employees[0].Salary.push({
        salaryReceived
    });
    res.json({
        message : "Salary Record added Sucessfully",
        updatedData : Employees[0].Salary
    });
})

app.delete("/d", (req, res) => {
    if(FnoOfTimesSalaryNotReceived()){
        let newSalary = [];
        for(i=0;i<Employees[0].Salary.length;i++){
            if(Employees[0].Salary[i].salaryReceived){
                newSalary.push({
                    salaryReceived : true
                })
            }
        }
        Employees[0].Salary = newSalary;
        res.json({
            Msg : "Unpaid  Salaries Removed SuccessFully "
        });
    }else{
        res.status(411).json({
            msg : "No paid Salary Found."
        });
    }
    //Buisness Logic
    function FnoOfTimesSalaryNotReceived(){
        let atnoOfTimesSalaryNotReceived = false;
        for (let i=0;i<Employees[0].Salary.length;i++){
            if(!Employees[0].Salary[i].salaryReceived){
                atnoOfTimesSalaryNotReceived = true;
            }
        }
        return atnoOfTimesSalaryNotReceived;
    }
})

app.listen(port ,() => {
    console.log(`Server Listen @ ${port}`)
});