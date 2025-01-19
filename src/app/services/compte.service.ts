import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompteDTO } from '../models/compte-dto';

@Injectable({
  providedIn: 'root',
})
export class CompteService {
  private apiUrl = 'http://localhost:8222/api/client/comptes'; // Replace with your backend URL
  private token = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9DTElFTlQiLCJzdWIiOiJzaWhhbSIsImlhdCI6MTczNzI0OTI1OCwiZXhwIjoxNzM4MTEzMjU4fQ.EwHZgn7OgbUgngyhx-5fdnICC6T7qvM2BBM_ulQREYA'; // Replace with your actual token

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
  }

  // Create a new account
  createCompte(compteDto: CompteDTO): Observable<CompteDTO> {
    return this.http.post<CompteDTO>(this.apiUrl, compteDto, { headers: this.getHeaders() });
  }

  // Get all accounts
  getAllComptes(): Observable<CompteDTO[]> {
    return this.http.get<CompteDTO[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  // Get savings accounts
  getComptesEpargnes(): Observable<CompteDTO[]> {
    return this.http.get<CompteDTO[]>(`${this.apiUrl}/epargne`, { headers: this.getHeaders() });
  }

  // Get current accounts
  getComptesCourants(): Observable<CompteDTO[]> {
    return this.http.get<CompteDTO[]>(`${this.apiUrl}/courant`, { headers: this.getHeaders() });
  }

  // Activate an account
  activateCompte(rib: string): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/activer/${rib}`, null, { headers: this.getHeaders() });
  }

  // Suspend an account
  suspendCompte(rib: string): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/suspendre/${rib}`, null, { headers: this.getHeaders() });
  }
}
