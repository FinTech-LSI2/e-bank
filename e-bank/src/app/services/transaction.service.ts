import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paiement } from '../models/paiement';
import { Retrait } from '../models/retrait';
import { Transaction } from '../models/transaction';
import { Versement } from '../models/versement';
import { Virement } from '../models/virement';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'http://localhost:8222/api/transactions';

  constructor(private http: HttpClient) {}

  getTransactionsByRib(rib: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}/clients/${rib}`);
  }

  makeRetrait(retrait: Retrait): Observable<Retrait> {
    return this.http.post<Retrait>(`${this.apiUrl}/retrait`, retrait);
  }

  makeVersement(versement: Versement): Observable<Versement> {
    return this.http.post<Versement>(`${this.apiUrl}/versement`, versement);
  }

  makePaiement(paiement: Paiement): Observable<Paiement> {
    return this.http.post<Paiement>(`${this.apiUrl}/paiement`, paiement);
  }

  makeVirement(virement: Virement): Observable<Virement> {
    return this.http.post<Virement>(`${this.apiUrl}/virement`, virement);
  }
}