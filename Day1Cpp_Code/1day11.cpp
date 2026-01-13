
/* Question : 
1
21
321
4321*/

#include<iostream>
using namespace std;

int pattern(int n){
    for(int i=0;i<n;i++){
        for(int j=i+1;j>0;j--){
            cout<<j;
        }
        cout<<endl;
    }
}
int main(){
    int n;
    cout<<"Enter n : "<<endl;
    cin>>n;

    pattern(n);
    return 0;
}