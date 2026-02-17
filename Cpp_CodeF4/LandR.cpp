
// Print Number From L to R   let L = 11 and R = 22

#include<iostream>
using namespace std;

int main(){
    int L,R;
    cout<<"Enter L and R : "<<endl;
    cin>>L>>R;

    int i = L;
    //Condition 
    while(i<=R){
        cout<<i<<endl;
        i++;
    }
    return 0;

}