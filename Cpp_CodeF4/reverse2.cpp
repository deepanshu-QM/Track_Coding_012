
#include<iostream>
using namespace std;

int main(){
    int n;
    cout<<"Enter n : "<<endl;
    cin>>n;

    while(n != 0){
        cout<<n % 10;     // 123  % 10 =  3     ---> 12 % 10 = 2 (32)  --> 1 % 10 = 1 (321)
        n = n /10;         // 123/10 = 12        ---> 12/10 =  1     
    }
    return 0;
}