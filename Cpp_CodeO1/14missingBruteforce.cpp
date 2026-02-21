// Finding missing Element in an array (Using Brute Force)

#include<iostream>
using namespace std;

int main(){
    int n = 5, flag;
    int arr[] = {1, 2, 3, 5}; 
    int size = 4;               

    for(int i = 1; i <= n; i++){
        flag = 0;
        for(int j = 0; j < size; j++){  
            if(arr[j] == i){
                flag = 1;
                break;
            }
        }
        if(flag == 0){
            cout << "Missing Element is: " << i << endl;  
            return i;
        }
    }
    return 0;
}
