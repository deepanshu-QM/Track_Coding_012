
#include<iostream>
using namespace std;

void patternPrints(int n){
    for(int i=0;i<=n;i++){
        for(int j=0; j<=n;j++){
            cout<<"*";
        }
        cout<<endl;
    }
}

int main(){
    int n;
    cout<<"Enter the Number n : "<<endl;
    cin>>n;
    patternPrints(n);

    return 0;
}