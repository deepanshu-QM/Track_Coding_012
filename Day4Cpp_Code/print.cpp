

/*   Let n = 7 and m = 3

  ***
  ***
  ***
  ***
  ***
  ***
  ***

*/
#include<iostream>
using namespace std;

int main(){
    int n,m;
    cout<<"Enter n and m : "<<endl;
    cin>>n>>m;

    for(int i=1;i<=n;i++){
        for(int j=1;j<=m;j++){
            cout<<"*";
        }cout<<endl;
    }
    return 0;
}

/* 
For Square : 
*****
*****
*****
*****
*****

n = 5
*/


#include<iostream>
using namespace std;

int main(){
    int n,m;
    cout<<"Enter n and m : "<<endl;
    cin>>n>>m;

    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            cout<<"*";
        }cout<<endl;
    }
    return 0;
}



