/*
Problem:
Take n numbers from the user and store them in a vector.
Using loops:
Count how many numbers are even
Count how many numbers are odd        */

#include<iostream>
#include<vector>
using namespace std;

int main(){
    int n;
    cout<<"Enter Elements Count : "<<endl;
    cin>>n;

    vector<int>vec;

    cout<<"Enter Elements : "<<endl;
    for(int i=0;i<n;i++){
        int value;
        cin>>value;
        vec.push_back(value);
    }


    //Odd or Even
    for(int x : vec){

        if(x % 2 == 0){
            cout<<"Number "<<x<<": Even "<<endl;
        }else{
            cout<<"Number "<<x<<": Odd "<<endl;
        }
    }
    return 0;
}