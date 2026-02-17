
//Component 1 : 
#include<iostream>
#include<random>
using namespace std;

void CreateAccount(int accountNO[], string name, string Question, int pin[], int index){
    if(Question == "yes" || Question == "YES" || Question == "Yes"){

        random_device rd;
        mt19937 gen(rd());

        uniform_int_distribution<> accDist(100000000, 999999999);
        accountNO[index] = accDist(gen);

        uniform_int_distribution<> pinDist(1000, 9999);
        pin[index] = pinDist(gen);

        cout << "\nAccount Created Successfully\n";
        cout << "Account Holder Name : " << name << endl;
        cout << "Account Number     : " << accountNO[index] << endl;
        cout << "PIN                : " << pin[index] << endl;

    } else {
        cout << "Thank you for using our services\n";
    }
}

int main(){
    string name;
    cout << "Enter Name: ";
    cin >> name;

    string Question;
    cout << "Do you want to open a new Bank Account? (yes/no): ";
    cin >> Question;

    int accountNO[10];
    int pin[10];
    int index = 0;   // first account

    CreateAccount(accountNO, name, Question, pin, index);

    return 0;
}
