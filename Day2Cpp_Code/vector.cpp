
//vector operations : 
#include<iostream>
#include<vector>
using namespace std;

int main(){
    vector<int> vec = {21,22,23,24,25,26};

    //Size Operation 1 : 
    cout<<"Size : "<<vec.size()<<endl;

    //Push_back operation 2 :      This Function will push the element at the end of the array
    vec.push_back(100);
    vec.push_back(200);
    vec.push_back(201);
    vec.push_back(202);
    vec.push_back(203);

    // loop Each operation 3 :
    for(int value : vec){
        cout<<value<<endl;
    }

    cout<<"size : "<<vec.size()<<endl;

    //Pop_back operation 4 :    This function will delete last element of the array
    vec.pop_back();

    // Excessing values operation 5 :

    cout<<vec.front()<<endl;  //This will Print 0 index value
    cout<<vec.back()<<endl; //This will Print last index value

    cout<<vec.at(2)<<endl; //Excessing value at index 2

}