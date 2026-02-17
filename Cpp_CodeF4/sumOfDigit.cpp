
//Sum of the Digit 

#include<iostream>
using namespace std;

int main(){
    int n,sum;
    cout<<"Enter Digit n : "<<endl;
    cin>>n;

    sum = 0;
    while(n != 0){
        sum += n % 10;
        n = n /10;
    }
    cout<<sum<<endl;
    return 0;
}

/* 
345 
0 = 0 + 5 (345 % 10 )= 5
n = 345/10 = 34

sum = 5 + 4 (34 % 10) = 9
n = 34 /10 = 3

sum = 9 + 3 (3 % 10 ) = 12
n = 3/10 = 0

*/