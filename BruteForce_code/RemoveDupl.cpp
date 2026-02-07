
//Remove Duplicate from sorted array:   Using Set
#include<iostream>
#include<vector>
#include<set>
using namespace std;

int main(){
    vector<int>a = {21,22,22,22,23,24,24,24,25,25,26,26,27};
    int n = a.size();
    set<int>s;

    for(int i=0;i<n;i++){
        s.insert(a[i]);
    }
    //Display Element :
    for(int x : s){
        cout<<x<<endl;
    }
    return 0;

}