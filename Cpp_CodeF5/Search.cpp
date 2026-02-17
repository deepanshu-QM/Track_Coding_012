
//Search Element in an Array:
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

    int searchElm;
    cin>>searchElm;

    bool found = false;
    for(int i=0;i<N;i++){
        if(arr[i] == searchElm){
            found = true;
            break;
        }
    }
    if(found){
        cout<<"found"<<endl;
    }else{
        cout<<"Not Found"<<endl;
    }

    return 0;

}