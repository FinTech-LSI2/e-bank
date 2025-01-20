import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyConversionRequest } from '../models/currency-conversion-request';
import { CurrencyConversionResponse } from '../models/currency-conversion-response';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'http://localhost:8222/api/finance/devise'; // Adjust this URL as needed

  constructor(private http: HttpClient) { }

  getSupportedCurrencies(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/`);
  }

  convertCurrency(request: CurrencyConversionRequest): Observable<CurrencyConversionResponse> {
    return this.http.post<CurrencyConversionResponse>(`${this.apiUrl}/convert`, request);
  }
}

