import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CompteDTO } from '../models/compte-dto';

@Injectable({
  providedIn: 'root',
})
export class CompteService {
  private apiUrl = 'http://localhost:8222/api/client/comptes'; // URL de votre API

  constructor(private http: HttpClient) {}

  // Méthode pour créer un compte
  createCompte(compteDto: CompteDTO): Observable<CompteDTO> {
    return this.http.post<CompteDTO>(this.apiUrl, compteDto, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // Méthode pour récupérer tous les comptes
  getAllComptes(): Observable<CompteDTO[]> {
    return this.http.get<CompteDTO[]>(this.apiUrl, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // Méthode pour récupérer les comptes d'épargne
  getComptesEpargnes(): Observable<CompteDTO[]> {
    return this.http.get<CompteDTO[]>(`${this.apiUrl}/epargne`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // Méthode pour récupérer les comptes courants
  getComptesCourants(): Observable<CompteDTO[]> {
    return this.http.get<CompteDTO[]>(`${this.apiUrl}/courant`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

// Méthode pour activer un compte
activateCompte(rib: string): Observable<any> {
  const encodedRib = encodeURIComponent(rib); // Encoder le RIB
  return this.http.put<any>(`${this.apiUrl}/activer/${encodedRib}`, null, { headers: this.getHeaders() }).pipe(
    catchError(this.handleError)
  );
}

// Méthode pour suspendre un compte
suspendCompte(rib: string): Observable<any> {
  const encodedRib = encodeURIComponent(rib); // Encoder le RIB
  return this.http.put<any>(`${this.apiUrl}/suspendre/${encodedRib}`, null, { headers: this.getHeaders() }).pipe(
    catchError(this.handleError)
  );
}
  // Méthode pour récupérer un compte par son RIB
  getCompteByRib(rib: string): Observable<CompteDTO> {
    return this.http.get<CompteDTO>(`${this.apiUrl}/${rib}`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // Méthode pour gérer les erreurs HTTP
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Une erreur inconnue est survenue';
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      errorMessage = `Erreur : ${error.error.message}`;
    } else {
      // Erreur côté serveur
      errorMessage = `Code d'erreur : ${error.status}\nMessage : ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  // Méthode pour obtenir les en-têtes HTTP
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // Récupérer le token JWT du stockage local
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }
}
