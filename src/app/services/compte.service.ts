import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from '../models/compte';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private apiUrl = 'http://localhost:8222/api/client/comptes';

  constructor(private http: HttpClient) {}

  getAllComptes(): Observable<Compte[]> {
    return this.http.get<Compte[]>(this.apiUrl);
  }

  getComptesEpargnes(): Observable<Compte[]> {
    return this.http.get<Compte[]>(`${this.apiUrl}/epargne`);
  }

  getComptesCourants(): Observable<Compte[]> {
    return this.http.get<Compte[]>(`${this.apiUrl}/courant`);
  }

  getCompteByRib(rib: string): Observable<Compte> {
    return this.http.get<Compte>(`${this.apiUrl}/${rib}`);
  }

  createCompte(compte: Partial<Compte>): Observable<string> {
    return this.http.post<string>(this.apiUrl, compte);
  }

  activateCompte(rib: string): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/activer/${rib}`, {});
  }

  suspendCompte(rib: string): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/suspendre/${rib}`, {});
  }
}
