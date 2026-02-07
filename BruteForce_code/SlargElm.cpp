
//Find Second Largest Element in an array : Brute --> Better --> Optimization

/* BRUTE FORCE :  First pass = o(N) and Second pass = o(N) 
The Time complexity : o(N + N) => o(2N) */

#include<iostream>
using namespace std;

int main(){
    int arr[] = {21,1,3,4,67,89,8,7,12};
    int N = 9;
    int largestElm = arr[0];
    for(int i=0;i<N;i++){               
        if(arr[i] > largestElm)
        largestElm = arr[i];    
    }
    cout<<"largets Element : "<<largestElm<<endl;

    int secondLargestElm = -1;
    for(int i=0;i<N;i++){                                        
        if(arr[i] > secondLargestElm && arr[i] != largestElm)
        secondLargestElm = arr[i];
    }
    cout<<"Second Largest Elm : "<<secondLargestElm<<endl;
    return 0;
}
