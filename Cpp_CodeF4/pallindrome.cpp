
//Pallindrome(Digit)

#include<iostream>
using namespace std;

int main(){
    int n,answ;
    cout<<"Enter n : "<<endl;
    cin>>n;

    answ = 0;
    int temp = n;         //Temporary         
    while(n !=0){
        answ = (answ * 10 ) +  n % 10;   //    (0 * 10)+ 2332 % 10  =  0 + 2 = 2  --> (2 * 10) + 233 % 10 --> 20+3 = 23
        n = n/10;                       //    2332/10 = 233  --->   233 /10 --> 23 
    }   

    if(answ == temp){
        cout<<"The Number is pallindrome "<<endl;
    }else{
        cout<<"The Number is NoT Pallindrome "<<endl;
    }
    return 0;
}