import { Component } from '@angular/core';
import {LookupService} from '../../../Services/lookup.service';

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [],
  templateUrl: './application.component.html',
  styleUrl: './application.component.css',
  providers: [LookupService]
})
export class ApplicationComponent {

  constructor(public lookupService: LookupService) {}

}
