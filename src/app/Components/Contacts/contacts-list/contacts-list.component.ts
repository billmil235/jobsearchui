import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts-list',
  imports: [
    NgForOf
  ],
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
  standalone: true
})
export class ContactsListComponent {
  contacts: any[] = []; // Replace 'any' with your actual contact interface

  // Add contact method
  addContact() {
    // Implementation for adding a contact
  }

  // Edit contact method
  editContact(contactId: number) {
    // Implementation for editing a contact
  }

  // Delete contact method
  deleteContact(contactId: number) {
    // Implementation for deleting a contact
  }
}