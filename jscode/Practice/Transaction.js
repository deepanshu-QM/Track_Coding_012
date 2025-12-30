
//Transaction Logic 

TotalAmount = 989000
function bankingTransaction(TotalAmount,Deposite,withDrawal){
    try{
        if([TotalAmount,Deposite,withDrawal].every(value => typeof value !== "number")){
            throw Error("Invalid Typed : All the Entered Values Should be Number ")
        }
        if(Deposite<0 || withDrawal <0){
            throw Error("Invalid Typed : Negative values are not allowed")
        }
        if(withDrawal >= TotalAmount){
            throw Error("InSufficent Balance")
        }
        TotalAmount += Deposite;
        TotalAmount -= withDrawal;
        console.log(`Total Balance : ${TotalAmount} \n  Withdrawal amount : ${withDrawal} \n Deposite amount : ${Deposite}`)
    }
    catch(error){
        console.error(error.message)
    }

    finally{
        console.log("Transaction Completed ")
    }
}

bankingTransaction(TotalAmount,0,67000)