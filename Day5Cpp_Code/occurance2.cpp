
//Occurance Of the Element 
#include<iostream>
using namespace std;

int main(){
    int N;
    cin>>N;

    int list[N];
    for(int i=0;i<N;i++){
        cin>>list[i];
    }
    cout<<endl;

    //display :
    cout<<"Element are : "<<endl;
    for(int i=0;i<N;i++){
        cout<<list[i]<<" ";
    }
    cout<<endl;

    for(int i=0;i<N;i++){
        if(list[i]== -1) continue;

        int count = 1;
        for(int j=i+1;j<N;j++){
            if(list[i] == list[j]){
                count++;
                list[j] = -1;  //Element is Counted 
            }
        }
        cout<<list[i]<<" : "<<count<<endl;
    }
    return 0;
}