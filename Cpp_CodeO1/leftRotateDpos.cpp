
/* Left Rotate By d position : 
Using Brute Force :                          
Three Step Process 
---> assign temp[]
---> Shifting 
---> Display 
*/

#include<iostream>
using namespace std;
int main(){
    int n = 7, d = 3;
    int arr[n] = {21,22,23,24,25,26,27};

    d = d % n;
    //assiging elements from index = 0 to index = 2 to temp
    int temp[d];
    for(int i=0;i<d;i++){
        temp[i] = arr[i];
    }

    //Rest of Element from d to n (Shifting)
    for(int i=d;i<n;i++){                    // i=d = 3; 3<7
        arr[i-d] = arr[i];
    }


    //Shifting Temp elemenst to last 
    for(int i=n-d;i<n;i++){
        arr[i] = temp[i-(n-d)];              
    }

    //Display :
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    return 0;

}
