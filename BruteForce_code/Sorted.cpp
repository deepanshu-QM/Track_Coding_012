
//Check array Is sorted or Not : 

#include<iostream>
#include<vector>
using namespace std;

int Sorted(vector<int>a, int n){
    for(int i=1;i<n;i++){
        if(a[i] >= a[i-1]){

        }else{
            return false;
        }
    }
    return true;
}

int main(){
    vector<int>a = {1,9,7,2,3,6,7};
    int n = a.size();
    if(Sorted(a,n)){
        cout<<"Sorted"<<endl;
    }else{
        cout<<"Not Sorted "<<endl;
    }

    return 0;
}