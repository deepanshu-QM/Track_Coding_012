/*
Problem:    1   
Take 10 integers from the user and store them in an array.
Using a loop:

Print all elements

Find the largest and smallest element  */

#include<iostream>
using namespace std;

//function 1 : Find Largest Number
int LargestElement(int arr[], int n){
    int max = arr[0];
    for(int i=0;i<n;i++){
        if(max < arr[i])
        max = arr[i];
    }
    return max;
}

//function 2 : Find Smallest Number
int smallestElement(int arr[],int n){
    int min = arr[0];
    for(int i=0;i<n;i++){
        if(min > arr[i])
        min = arr[i];
    }
    return min;
}
int main(){

    int n;
    cout<<"Enter Elements Count : "<<endl;
    cin>>n;

    int arr[n];
    cout<<"Enter Elements : "<<endl;
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }

    //Display Elements :

    cout<<"Elements are : \n"<<endl;
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" \n";
    }

    int LargestNumber = LargestElement(arr,n);
    int SmallestNumber = smallestElement(arr,n);

    cout<<"Largest Element : "<<LargestNumber<<"\n"<<"Smallest Element : "<<SmallestNumber<<endl;

    return 0;

}
