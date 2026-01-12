
//Question 3 : Calculate MAX of two Number 

#include<iostream>
using namespace std;

int main(){
    int a,b;
    cout<<"Enter a and b : "<<endl;
    cin>>a>>b;

    if(a>b){
        cout<<"a is greater then b "<<endl;
    }else if(b>a){
        cout<<"b  is greater then a "<<endl;
    }else{
        cout<<"Invalid"<<endl;
    }
    return 0;
}