
//Question 2 : Give a person a age ,Find if they should get driving License or Not 

#include<iostream>
using namespace std;
int main(){
    int age;
    cout<<"Enter Age : "<<endl;
    cin>>age;

    try{
        if(age <=0){
            throw "Age cannot be Negative or Zero";
        }else if(age < 18){
            cout<<"You are not elligible for driving License";
        }else{
            cout<<"You are elligible for driving License";
        }
    }catch(const char*message){
        cout<<"Error : "<<message;
    }
} 