
//Find Minimum of the array :

#include<iostream>
using namespace std;



int main(){
    int N;
    cin>>N;

    int arr[N];
    //Input
    for(int i=0;i<N;i++){
        cin>>arr[i];
    }
    cout<<endl;

    //Display
    cout<<"Elements are : "<<endl;
    for(int i=0;i<N;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;

    int minElm = arr[0];
    for(int i=0;i<N;i++){
       if(arr[i]< minElm){
        minElm = arr[i];
       }
    }
    cout<<"max : "<<minElm<<endl;

    return 0;

}