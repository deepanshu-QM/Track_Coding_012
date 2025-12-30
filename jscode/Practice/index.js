
//Clean Code : Building Mini Banking  Transaction System (Function)



let TotalAmount = 978567

function BankingTransaction(TotalAmount,Deposite,withDrawal){
    try{
        if(typeof TotalAmount !== 'number' || typeof Deposite !== 'number' || typeof withDrawal !== 'number'){
            throw Error("Invalid Typed : Use Number ")
        }
        if(Deposite < 0 || withDrawal <0){
            throw Error("Invalid Typed : Amount Should be valid ")
        }
        if(withDrawal >= TotalAmount){
            throw Error("Invalid Typed : withDrawal amount Exceeds")
        }
        TotalAmount += Deposite;
        TotalAmount -= withDrawal;
        console.log(`Total Amount : ${TotalAmount} \n Deposite Amount : ${Deposite} \n WithDrawal Amount : ${withDrawal}`)
    }
    catch(error){
        console.error(error.message)
    }

    finally {
        console.log("Transaction Complete ")
    }
}

BankingTransaction(TotalAmount,0,2399999)