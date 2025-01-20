import { Component, OnInit } from '@angular/core';
import { LoanApplication } from '../../models/loan-application';
import { LoanApplicationService } from '../../services/loan-application.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { MailSenderService } from '../../services/mail-sender.service';
import { CreditResponse } from '../../models/CreditResponse';

@Component({
    selector: 'app-loan-application-list',
    imports: [CommonModule, HttpClientModule, SidebarComponent],
    providers: [LoanApplicationService, MailSenderService], // Add MailSenderService to providers
    templateUrl: './loan-application-list.component.html',
    styleUrl: './loan-application-list.component.css'
})
export class LoanApplicationListComponent implements OnInit {
  loanApplications: LoanApplication[] = [];

  constructor(
    private loanApplicationService: LoanApplicationService,
    private mailSenderService: MailSenderService // Inject MailSenderService
  ) { }

  ngOnInit(): void {
    this.loadLoanApplications();
  }

  loadLoanApplications(): void {
    this.loanApplicationService.getAllLoanApplications()
      .subscribe(response => {
        this.loanApplications = response;
      });
  }

  simulateLoanApplication(id: number): void {
    this.loanApplicationService.simulateLoanApplication(id)
      .subscribe(
        response => {
          const result = response.simulationResult;
          const message = `Simulation Result: ${result}`;
          alert(message);
        },
        error => {
          console.error('Simulation error:', error);
          alert('Failed to simulate loan application');
        }
      );
  }

  acceptLoanApplication(id: number): void {
    this.loanApplicationService.acceptLoanApplication(id)
      .subscribe(response => {
        this.loadLoanApplications();
        alert('Loan application accepted');
  
        const loanApplication = this.loanApplications.find(app => app.id === id);
        if (loanApplication) {
          const creditResponse: CreditResponse = {
            email: loanApplication.email,
            creditResponse: 'Accepted',
            idCreditDemand: loanApplication.id,
            name: loanApplication.name
          };
          this.mailSenderService.sendCreditResponseEmail(creditResponse).subscribe(
            (response) => {
              console.log('Email sent successfully:', response.message);
              alert('Email successfully sent!'); // Ajoutez cette ligne
            },
            error => {
              console.error('Failed to send email:', error);
              alert('Loan application accepted but email notification failed');
            }
          );
        }
      });
  }
  rejectLoanApplication(id: number): void {
    this.loanApplicationService.rejectLoanApplication(id)
      .subscribe(response => {
        this.loadLoanApplications();
        alert('Loan application rejected');
  
        const loanApplication = this.loanApplications.find(app => app.id === id);
        if (loanApplication) {
          const creditResponse: CreditResponse = {
            email: loanApplication.email,
            creditResponse: 'Rejected',
            idCreditDemand: loanApplication.id,
            name:loanApplication.name
          };
          this.mailSenderService.sendCreditResponseEmail(creditResponse).subscribe(
            (response) => {
              console.log('Email sent successfully:', response.message);
              alert('Email successfully sent!');
            },
            error => {
              console.error('Failed to send email:', error);
              alert('Loan application rejected but email notification failed');
              alert('Loan application accepted but email notification failed');
            }
          );
        }
      });
  }
}
