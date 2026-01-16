
//Library Managment System :
#include<iostream>
#include<string>
using namespace std;

class Book {

private:
    int bookId;
    string bookName;
    string author;
    bool isIssued;

public:
    // Constructor
    Book(int bookId, string bookName, string author) {
        this->bookId = bookId;
        this->bookName = bookName;
        this->author = author;
        this->isIssued = false;
    }

    int getBookId() {
        return bookId;
    }

    void displayBook() {
        cout << "Book ID    : " << bookId << endl;
        cout << "Book Name  : " << bookName << endl;
        cout << "Author     : " << author << endl;
        cout << "Status     : " << (isIssued ? "Issued" : "Available") << endl;
    }

    void issueBook() {
        if (isIssued) {
            cout << "Book is already issued!" << endl;
        } else {
            isIssued = true;
            cout << "Book issued successfully!" << endl;
        }
    }

    void returnBook() {
        if (!isIssued) {
            cout << "Book is already available!" << endl;
        } else {
            isIssued = false;
            cout << "Book returned successfully!" << endl;
        }
    }
};

int main() {

    Book* library[50];
    int count = 0;
    int choice;

    do {
        cout << "\n Library Management System \n";
        cout << "1. Add Book\n";
        cout << "2. Display All Books\n";
        cout << "3. Search Book\n";
        cout << "4. Issue Book\n";
        cout << "5. Return Book\n";
        cout << "6. Exit\n";
        cout << "Enter Choice : ";
        cin >> choice;

        if (choice == 1) {
            int id;
            string name, author;

            cout << "Enter Book ID : ";
            cin >> id;
            cin.ignore();

            cout << "Enter Book Name : ";
            getline(cin, name);

            cout << "Enter Author Name : ";
            getline(cin, author);

            library[count] = new Book(id, name, author);
            count++;

            cout << "Book added successfully!\n";
        }

        else if (choice == 2) {
            if (count == 0) {
                cout << "No books available!\n";
            } else {
                for (int i = 0; i < count; i++) {
                    library[i]->displayBook();
                }
            }
        }

        else if (choice == 3) {
            int id;
            cout << "Enter Book ID to search : ";
            cin >> id;

            bool found = false;
            for (int i = 0; i < count; i++) {
                if (library[i]->getBookId() == id) {
                    library[i]->displayBook();
                    found = true;
                    break;
                }
            }

            if (!found) {
                cout << "Book not found!\n";
            }
        }

        else if (choice == 4) {
            int id;
            cout << "Enter Book ID to issue : ";
            cin >> id;

            bool found = false;
            for (int i = 0; i < count; i++) {
                if (library[i]->getBookId() == id) {
                    library[i]->issueBook();
                    found = true;
                    break;
                }
            }

            if (!found) {
                cout << "Book not found!\n";
            }
        }

        else if (choice == 5) {
            int id;
            cout << "Enter Book ID to return : ";
            cin >> id;

            bool found = false;
            for (int i = 0; i < count; i++) {
                if (library[i]->getBookId() == id) {
                    library[i]->returnBook();
                    found = true;
                    break;
                }
            }

            if (!found) {
                cout << "Book not found!\n";
            }
        }

        else if (choice == 6) {
            cout << "Exiting Library System...\n";
        }

        else {
            cout << "Invalid choice!\n";
        }

    } while (choice != 6);

    return 0;
}
