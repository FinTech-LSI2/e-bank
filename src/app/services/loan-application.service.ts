import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoanApplication } from '../models/loan-application';

@Injectable({
  providedIn: 'root',
})
export class LoanApplicationService {
  private apiUrl = 'http://localhost:8222/api/loan-applications';

  constructor(private http: HttpClient) { }

  createLoanApplication(loanApplication: LoanApplication): Observable<LoanApplication> {
    return this.http.post<LoanApplication>(this.apiUrl, loanApplication);
  }


  getAllLoanApplications(): Observable<LoanApplication[]> {
    return this.http.get<LoanApplication[]>(this.apiUrl);
  }

  acceptLoanApplication(id: number): Observable<LoanApplication> {
    return this.http.put<LoanApplication>(`${this.apiUrl}/${id}/accept`, {});
  }

  rejectLoanApplication(id: number): Observable<LoanApplication> {
    return this.http.put<LoanApplication>(`${this.apiUrl}/${id}/reject`, {});
  }
  simulateLoanApplication(id: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${id}/simulate`, {});
  }

}
