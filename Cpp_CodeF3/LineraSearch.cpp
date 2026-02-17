
#include<iostream>
using namespace std;

int LinearSearch(int N,int FindElement,int elements[]){
    for(int i=0;i<N;i++){
        if(elements[i] == FindElement)
        return i;
    }
    return -1;
}
int main(){
    int N,FindElement,i;

    cout<<"Enter N : "<<endl;
    cin>>N;

    int elements[N];
    cout<<"Enter Elements : "<<endl;
    for(int i=0;i<N;i++){
        cin>>elements[i];
    }

    cout<<"Enter Element To find : "<<endl;
    cin>>FindElement;

    //Display the Elements : 
    cout<<"Elements are :  \n "<<endl;
    for(int i=0;i<N;i++){
        cout<<elements[i]<<" ";
    }cout<<endl;

    int result = LinearSearch(N,FindElement,elements);
   
    if(result != -1){
        cout<<"index  : "<<result<<endl;
    }else{
        cout<<"Element is not in the list "<<endl;
    }
    return 0;

}