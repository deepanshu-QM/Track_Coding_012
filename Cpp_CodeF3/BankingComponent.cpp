
//Simple Component : 

#include<iostream>
#include<string>
using namespace std;

class Banking {

    private:
    string AccountHolderName;
    int accountNo;
    float __pin;
    string Branch;
    float CurrentAmount;
    float DepositAmount;
    float WithDrawalAmount;

    public:
    //contructor
    Banking(string AccountHolderName,int accountNo,float pin,string Branch,float currentAmount){
        this->AccountHolderName = AccountHolderName;
        this->accountNo = accountNo;
        this->__pin = pin;
        this->Branch = Branch;
        this->CurrentAmount = currentAmount;
    }

    void Deposit(float DepositAmount){
        if(DepositAmount <= 0){
            cout<<"Amount Should be Greater than zero \n";
            return;
        }
        CurrentAmount += DepositAmount;
    }

    void WithDrawal(float WithDrawalAmount){
        if(WithDrawalAmount <=0){
            cout<<"Amount Should be Greater then Zero \n";
            return;
        }
        if(WithDrawalAmount > CurrentAmount){
            cout<<"Insufficent Balance \n";
            return;
        }
        CurrentAmount -= WithDrawalAmount;
    }
    

     void Display(){
        cout<<"Name : "<<AccountHolderName<<"\n"<<"Account Number : "<<accountNo<<"\n"<<"Branch : "<<Branch<<"\n"<<"Total Amount : "<<CurrentAmount<<endl;
        cout<<"Depsit Amount : "<<DepositAmount<<endl;
        cout<<"WithDrawal Amount : "<<WithDrawalAmount<<endl;
     }

};

int main(){

    string accountHolderName;
    cout<<"Enter  Name : "<<endl;
    cin>>accountHolderName;

    int accountNo;
    cout<<"Enter Account Number : "<<endl;
    cin>>accountNo;

    float pin;
    cout<<"Enter PIN : "<<endl;
    cin>>pin;

    string Branch = "SBI Trinagar New Delhi";
    float CurrentAmount = 4567899;

    //Object1 :
    Banking b1(accountHolderName,accountNo,pin,Branch,CurrentAmount);

    float DepositAmount;
    cout<<"Enter Deposit  (Type 0 if No ): "<<endl;
    cin>>DepositAmount;
    b1.Deposit(DepositAmount);

    float WithDrawalAmount;
    cout<<"Enter WithDrawal Amount (Type O if No): "<<endl;
    cin>>WithDrawalAmount;
    b1.WithDrawal(WithDrawalAmount);

    b1.Display();

    return 0;
}

