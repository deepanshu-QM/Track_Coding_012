
#include<iostream>
#include<cstdlib>
#include<ctime>
using namespace std;

int main(){
    srand(time(0));
    int num = rand();
    cout<<num;
    return 0;
}

/* If you wants to Prints Between 0 to 100 Then Logic : 
       srand(time(0))
       int num = rand() % 100 + 1  [ % range + start ]
       */