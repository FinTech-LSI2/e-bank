import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreditResponse } from '../models/CreditResponse';
import { Observable, catchError } from 'rxjs';

interface ApiResponse {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class MailSenderService {
  private apiUrl = 'http://localhost:8222/api/notifications/send';

  constructor(private http: HttpClient) { }

  sendCreditResponseEmail(creditResponse: CreditResponse): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.apiUrl, creditResponse).pipe(
      catchError((error) => {
        console.error('Error sending email:', error);
        throw error;
      })
    );
  }
}