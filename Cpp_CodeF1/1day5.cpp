
/*   Question 1 : Square Pattern Printing : n = 4  
1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4   

 or 

***** 
***** 
***** 
*****                       */

#include<iostream>
using namespace std;

int squarePattern(int n){
    for(int i=1;i<=n;i++){  //Outer Loop
        for(int j=1;j<=n;j++){  //inner Loop
            cout<<j;           // "*"
        }
        cout<<endl;
    }
}
int main(){
    int n;
    cout<<"Enter n : "<<endl;
    cin>>n;

    squarePattern(n);
    return 0;
}