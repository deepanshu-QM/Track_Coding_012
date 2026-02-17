
/* Question : 
1
12
123
1234
12345
*/
#include<iostream>
using namespace std;

int pattern(int n){
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
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