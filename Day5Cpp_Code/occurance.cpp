
//Occurance By search:
#include<iostream>
using namespace std;

int main(){
    int N;
    cin>>N;

    int arr[N];
    //Input Elements : 
    for(int i=0;i<N;i++){
        cin>>arr[i];
    }
    cout<<endl;
    //Display elements :
    for(int i=0;i<N;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;

    int count = 0,element;
    cin>>element;
    for(int i=0;i<N;i++){
        if(arr[i] ==  element){
            count++;
        }
    }
    cout<<"Element : "<<element<<"\n"<<"count : "<<count<<endl;
    return 0;
}

/* 

1 2 3 4 5 5 5 6 7 7  8 8 

*/