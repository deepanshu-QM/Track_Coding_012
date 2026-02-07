
//Find Second largest and Second smallest Element in an array : 
/* Optmial Solution : */

#include<iostream>
#include<vector>
#include<climits>
using namespace std;

int SecondLargestElm(vector<int>a , int n){
    int LargestElm = a[0];
    int Slargest = -1;
    for(int i=0;i<n;i++){
        if(a[i]> LargestElm){
            Slargest = LargestElm;
            LargestElm = a[i];
        }
        else if(a[i] < LargestElm && a[i] > Slargest){
            Slargest = a[i];
        }
    }
    return Slargest;
}
int SecondSmallestElm(vector<int>a, int n){
    int smallest = a[0];
    int Ssmallest = INT_MAX;
    for(int i=0;i<n;i++){
        if(a[i] < smallest){
            Ssmallest = smallest;
            smallest = a[i];
        }
        else if(a[i] != smallest && a[i] < Ssmallest ){
            Ssmallest = a[i];
        }
    }
    return Ssmallest;
}

int main(){
    vector<int>a = {23,56,11,12,90,56,9,4,92,99};
    int n = a.size();
    cout<<"Second Largest Element : "<<SecondLargestElm(a,n)<<endl;
    cout<<"Second Smallest Element : "<<SecondSmallestElm(a,n)<<endl;

    return 0;

}