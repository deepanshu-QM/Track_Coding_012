/* Left Rotate By d position
Using OPTIMIZATION : 

arr[] = {1,2,3,4,5,6,7} d = 3
i)Reverse : arr[] = {3,2,1,7,6,5,4}      --> {1,2,3} =>{3,2,1}      &  {4,5,6,7} => {7,6,5,4}
ii) Revese : arr[] = {4,5,6,7,1,2,3}     --> {7,6,5,4}=>{4,5,6,7}   &  {1,2,3}
*/
#include <bits/stdc++.h>
using namespace std;

int main(){
    int n = 7, d = 3;
    int arr[n] = {1,2,3,4,5,6,7};

    reverse(arr, arr+d);
    reverse(arr+d , arr+n);
    reverse(arr, arr+n);

    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }

    return 0;
}