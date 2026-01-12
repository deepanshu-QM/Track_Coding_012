
/*   Question 1 : Square Pattern Printing :  Alphabets
ABCD
ABCD
ABCD
ABCD
*/
#include<iostream>
using namespace std;

int Alphabetpattern(int n){
    for(int i=1;i<=n;i++){
        char chr = 'A';              //ASCI => 65
        for(int j=1;j<=n;j++){
            cout<<chr;
            chr += 1;               //ASci => 65+1 , 66+1, 66+2
        }
        cout<<endl;
    }
}
int main(){
    int n;
    cout<<"Enter n : "<<endl;
    cin>>n;

    Alphabetpattern(n);
}