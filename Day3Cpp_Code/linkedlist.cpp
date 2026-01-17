#include<iostream>
using namespace std;

// Node structure
struct Node {
    int data;
    Node* next;
};

// Insert node at end
void insert(Node* &head, int value) {

    Node* newNode = new Node();
    newNode->data = value;
    newNode->next = NULL;

    if(head == NULL) {
        head = newNode;
        return;
    }

    Node* temp = head;
    while(temp->next != NULL) {
        temp = temp->next;
    }
    temp->next = newNode;
}

// Display linked list
void display(Node* head) {

    Node* temp = head;
    while(temp != NULL) {
        cout << temp->data << " -> ";
        temp = temp->next;
    }
    cout << "NULL";
}

// Main function
int main() {

    Node* head = NULL;

    insert(head, 5);
    insert(head, 15);
    insert(head, 25);

    display(head);

    return 0;
}
