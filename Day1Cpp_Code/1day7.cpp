
/* Question 1 : Square Pattern Printing :  
123
456
789
*/

#include<iostream>
using namespace std;

int PatterPrint(int n, int num){
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            cout<<num;
            num++;
        }
        cout<<endl;
    }
}
int main(){
    int n = 3;
    int num = 1;
    PatterPrint(n,num);

    return 0;
}