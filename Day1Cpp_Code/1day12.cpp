
/* Floyd's Triangle
1
23
456
78910*/

#include<iostream>
using namespace std;

int pattern(int n,int numb){
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<numb;
            numb++;
        }
        cout<<endl;
    }
}
int main(){
    int n,numb;
    numb = 1;
    cout<<"Enter n : "<<endl;
    cin>>n;

    pattern(n,numb);
    return 0;
}