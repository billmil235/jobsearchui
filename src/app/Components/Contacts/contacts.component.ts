import { Component } from '@angular/core';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

@Component({
  selector: 'app-contacts',
  templateUrl: 'contacts.component.html',
  standalone: true,
  imports: [ContactsListComponent]
})
export class ContactsComponent {}