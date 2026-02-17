
//Reversing The Number :
#include<iostream>
using namespace std;

int main(){
    int answ = 0;
    int n;
    cout<<"Enter number n : "<<endl;
    cin>>n;

    while(n != 0){  //Condition
        answ = (answ * 10) + n % 10;
        n = n/10;
    }

    cout<<"Reverse No : "<<answ<<endl;
}