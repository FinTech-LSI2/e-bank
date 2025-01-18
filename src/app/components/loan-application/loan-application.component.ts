import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoanApplicationService } from '../../services/loan-application.service';
import { CreditQuestionComponent } from "../credit-question/credit-question.component";
import { FooterComponent } from "../footer/footer.component";
import { SimulatorComponent } from "../simulator/simulator.component";
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../contact/contact.component';
import { FaqComponent } from '../faq/faq.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { LoanApplication } from '../../models/loan-application';


@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [FormsModule, NavbarComponent, CommonModule, SimulatorComponent, FooterComponent, ContactComponent, FaqComponent, CreditQuestionComponent, HttpClientModule, ReactiveFormsModule],
  providers: [LoanApplicationService],
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css'],


})
export class LoanApplicationComponent {
  loanApplication: LoanApplication = {
    name: '',
    cin: '',
    personAge: 0,
    personIncome: 0,
    personHomeOwnership: '',
    personEmpLength: 0,
    loanIntent: '',
    loanAmnt: 0,
    cbPersonDefaultOnFile: '',
    cbPersonCredHistLength: 0,
    id: 0,
    email:''
  };

  constructor(private loanApplicationService: LoanApplicationService) { }

  submitForm() {
    this.loanApplicationService.createLoanApplication(this.loanApplication)
      .subscribe(response => {
        console.log('Loan Application Created:', response);
        alert('Loan Application Submitted Successfully!');
      }, error => {
        console.error('Error:', error);
        alert('Failed to submit the application');
      });
  }
}
