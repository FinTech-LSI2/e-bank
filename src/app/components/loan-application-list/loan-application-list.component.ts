import { Component, OnInit } from '@angular/core';
import { LoanApplication } from '../../models/loan-application';
import { LoanApplicationService } from '../../services/loan-application.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-loan-application-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, SidebarComponent],
  providers: [LoanApplicationService],
  templateUrl: './loan-application-list.component.html',
  styleUrl: './loan-application-list.component.css'
})
export class LoanApplicationListComponent implements OnInit {
  loanApplications: LoanApplication[] = [];

  constructor(private loanApplicationService: LoanApplicationService) { }

  ngOnInit(): void {
    this.loadLoanApplications();
  }

  loadLoanApplications(): void {
    this.loanApplicationService.getAllLoanApplications()
      .subscribe(response => {
        this.loanApplications = response;
      });
  }

  acceptLoanApplication(id: number): void {
    this.loanApplicationService.acceptLoanApplication(id)
      .subscribe(response => {
        this.loadLoanApplications();  // Reload the list after status change
        alert('Loan application accepted');
      });
  }

  rejectLoanApplication(id: number): void {
    this.loanApplicationService.rejectLoanApplication(id)
      .subscribe(response => {
        this.loadLoanApplications();  // Reload the list after status change
        alert('Loan application rejected');
      });
  }
}
