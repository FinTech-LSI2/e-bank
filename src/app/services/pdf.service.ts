import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private apiUrl = 'http://localhost:8222/api/client/pdf/pdf/generate'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  generatePdf(rib: string): Observable<Blob> {
    const headers = new HttpHeaders({
      'Accept': 'application/pdf'
    });

    return this.http.get(`${this.apiUrl}/${rib}`, {
      headers: headers,
      responseType: 'blob'
    });
  }
}