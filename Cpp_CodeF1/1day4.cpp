
//Find sum of numbers from 1 to n;

#include<iostream>
using namespace std;

int main(){
    int n,sum;
    cout<<"Enter n : "<<endl;
    cin>>n;

    sum =0;
    for(int i=1;i<n;i++){
        sum += i;
    }
    cout<<"sum : "<<sum<<endl;
    return 0;
}