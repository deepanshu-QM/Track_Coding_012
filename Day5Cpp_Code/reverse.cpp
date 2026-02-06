
//Print array in Reverse Order

#include<iostream>
using namespace std;

int main(){
    int N;
    cin>>N; 

    int arr[N];
    for(int i=0;i<N;i++){
        cin>>arr[i];
    }
    cout<<endl;

    //Displaying the array;
    cout<<"Array elements are : "<<endl;
    for(int i=0;i<N;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;

    //In Reverse Order;
    cout<<"Reverse Order : "<<endl;
    for(int i=N-1;i>=0;i--){
        cout<<arr[i]<<" ";
    }
    cout<<endl;


    return 0;
}