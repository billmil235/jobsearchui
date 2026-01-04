import { Component } from '@angular/core';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

@Component({
  selector: 'app-contacts',
  template: `
    <app-contacts-list></app-contacts-list>
  `,
  standalone: true,
  imports: [ContactsListComponent]
})
export class ContactsComponent {}