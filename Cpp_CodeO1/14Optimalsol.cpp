
//Optimal Approch :  (space complexity = o(1)) and Time compexity = o(N)

#include<iostream>
using namespace std;

int main(){
    int n = 5;
    int arr[] = {1,2,3,5};
    int sum1 = (n*(n+1))/2;

    int sum2 =0;
    for(int i=0;i<n-1;i++){
        sum2 += arr[i];
    }

    cout<<"Missing Number : "<<sum1 - sum2<<endl;
    return 0;
}