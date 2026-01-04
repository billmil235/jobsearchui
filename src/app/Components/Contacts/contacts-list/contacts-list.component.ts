import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { Contact } from '../../../Models/contact.model';

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
  contacts: Contact[] = [
    {
      contactId: '1',
      userId: '1',
      contactName: 'John Doe',
      companyName: 'Acme Inc',
      phoneNumber: '555-1234',
      emailAddress: 'john.doe@example.com',
      deleted: false
    },
    {
      contactId: '2',
      userId: '1',
      contactName: 'Jane Smith',
      companyName: 'Globex Corp',
      phoneNumber: '555-5678',
      emailAddress: 'jane.smith@example.com',
      deleted: false
    },
    {
      contactId: '3',
      userId: '1',
      contactName: 'Bob Johnson',
      companyName: 'Initech',
      phoneNumber: '555-9012',
      emailAddress: 'bob.johnson@example.com',
      deleted: false
    }
  ];

  // Add contact method
  addContact() {
    // Implementation for adding a contact
  }

  // Edit contact method
  editContact(contactId: string) {
    // Implementation for editing a contact
  }

  // Delete contact method
  deleteContact(contactId: string) {
    // Implementation for deleting a contact
  }
}