#include <iostream>
using namespace std;

// Function to input marks
void InputMarks(int n, float studentsMarks[]) {
    cout << "Enter student marks: " << endl;
    for (int i = 0; i < n; i++) {
        cin >> studentsMarks[i];
    }

    // Displaying marks
    cout << "\nMarks obtained by student:" << endl;
    for (int i = 0; i < n; i++) {
        cout << studentsMarks[i] << endl;
    }
}

// Function to calculate total marks
float TotalMarks(int n, float studentsMarks[]) {
    float sum = 0;
    for (int i = 0; i < n; i++) {
        sum += studentsMarks[i];
    }
    cout << "Total marks: " << sum << endl;
    return sum;
}

// Function to calculate percentage
float Percentage(int n, float totalMarks) {
    float percent = (totalMarks / (n * 100)) * 100; // Assuming each subject is out of 100
    cout << "Percentage: " << percent << "%" << endl;
    return percent;
}

// Function to display grades for each subject
void DisplayingGrades(int n, float studentsMarks[]) {
    for (int i = 0; i < n; i++) {
        if (studentsMarks[i] >= 90 && studentsMarks[i] <= 100) {
            cout << "Marks " << studentsMarks[i] << " : A++" << endl;
        } else if (studentsMarks[i] >= 80) {
            cout << "Marks " << studentsMarks[i] << " : A" << endl;
        } else if (studentsMarks[i] >= 70) {
            cout << "Marks " << studentsMarks[i] << " : B++" << endl;
        } else if (studentsMarks[i] >= 60) {
            cout << "Marks " << studentsMarks[i] << " : B" << endl;
        } else if (studentsMarks[i] >= 50) {
            cout << "Marks " << studentsMarks[i] << " : C" << endl;
        } else {
            cout << "Marks " << studentsMarks[i] << " : F" << endl;
        }
    }
}

int main() {
    int n = 5; // Number of subjects
    cout << "Enter number of subjects: ";
    cin >> n;

    float studentsMarks[n]; // Array to store marks

    InputMarks(n, studentsMarks);

    float sum = TotalMarks(n, studentsMarks);
    float percent = Percentage(n, sum);

    DisplayingGrades(n, studentsMarks);

    return 0;
}
