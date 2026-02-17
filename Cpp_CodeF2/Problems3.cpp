
//Simple Logic : 

#include<iostream>
#include<string>
using namespace std;

class Student{
    private:

    string name;
    int age;
    int rollNo;
    bool Enrolled;
    float cgpa;
    float fee;

    public:
    //contructor
    Student(string name,int age,int rollNo,bool Enrolled, float cgpa){
        this->name = name;
        this->age = age;
        this->rollNo = rollNo;
        this->Enrolled = Enrolled;
        this->cgpa = cgpa;

        if(cgpa > 8.0){
            fee = 9000;
        }else{
            fee = 12000;
        }
    };



    void DisplayResult(){
        cout<<"Name Of the Student : "<<name<<"\n"<<"Age : "<<age<<"\n"<<"Roll No : "<<rollNo<<"\n"<<"Enrolled : "<<Enrolled<<" \n"<<"Cgpa : "<<cgpa<<"\n"<<"Fee : "<<fee<<endl;
    }
};

 int main(){
        Student st1("Pritam Sharma",17,34,true,7.8);

        st1.DisplayResult();

        return 0;
    }