import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8222/auth'; // URL de votre backend

  constructor(private http: HttpClient) {}


  private registeredUsers: { email: string }[] = [];
  checkEmailExists(email: string): boolean {
    return this.registeredUsers.some((user) => user.email === email);
  }


  // Enregistrement d'un nouvel utilisateur
  register(user: { name: string; email: string; password: string; role: string }): Observable<any> {
    // Vérifier si l'email existe déjà
    if (this.checkEmailExists(user.email)) {
      return of({ error: 'Cet email est déjà utilisé.' }); // Retourner une erreur si l'email existe déjà
    }

    // Ajouter l'utilisateur au tableau local
    this.registeredUsers.push({ email: user.email });

    // Envoyer la requête au backend pour l'inscription (optionnel)
    return this.http.post(`${this.apiUrl}/register`, user, { responseType: 'text' }).pipe(
      map((response: any) => ({ message: response })) // Convertir la réponse en objet JSON
    );
  }

  // Connexion d'un utilisateur
  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/token`, credentials).pipe(
      tap((response: any) => {
        this.setToken(response.token); // Save the token
      })
    );
  }

  // Stocker le token dans le localStorage
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Récupérer le token du localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Supprimer le token (déconnexion)
  logout(): void {
    localStorage.removeItem('token');
  }

  // Vérifier si l'utilisateur est connecté
  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
}
