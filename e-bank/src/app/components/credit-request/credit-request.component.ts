import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { CommonModule } from '@angular/common';
import { SimulatorComponent } from "../simulator/simulator.component";
import { FooterComponent } from "../footer/footer.component";
import { ContactComponent } from "../contact/contact.component";
import { FaqComponent } from "../faq/faq.component";
import { CreditQuestionComponent } from "../credit-question/credit-question.component";




@Component({
    selector: 'app-credit-request',
    imports: [FormsModule, NavbarComponent, CommonModule, SimulatorComponent, FooterComponent, ContactComponent, FaqComponent, CreditQuestionComponent],
    templateUrl: './credit-request.component.html',
    styleUrl: './credit-request.component.css'
})
export class CreditRequestComponent {    // Define the model for the form
    model: any = {
      amount: null,
      duration: null,
      age: null,
      sex: '',
      marital_status: ''
    };

    // Method to handle form submission
    submitCreditRequest() {
      console.log('Credit Request Submitted:', this.model);

      // Add your logic here to process the credit request
      // For example, call a service to send data to the backend

  }

}
