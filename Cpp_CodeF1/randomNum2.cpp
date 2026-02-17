
#include <iostream>
#include <random>

using namespace std;

int main() {
    random_device rd;          // Seed source
    mt19937 gen(rd());         // Random engine
    uniform_int_distribution<int> dist(0, 1000000000);

    int numb_random = dist(gen);

    cout << "Generated Number: " << numb_random << endl;

    return 0;
}
