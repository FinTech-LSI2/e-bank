import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';  // Required for *ngFor in standalone components

@Component({
    selector: 'app-contact',
    imports: [NgFor, NgClass], // Import necessary Angular modules
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactCards = [
    { iconClass: 'fas fa-phone', label: 'CALL US!' },
    { iconClass: 'fas fa-envelope', label: 'SEND US AN EMAIL' },
    { iconClass: 'fas fa-map-marker-alt', label: 'FIND AN AGENCY' },
    { iconClass: 'fas fa-question-circle', label: 'FAQ' },
  ];
}
