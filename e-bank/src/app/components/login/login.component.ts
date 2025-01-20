import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-login',
    imports: [HttpClientModule, FormsModule, CommonModule, NavbarComponent, RouterLink, FooterComponent],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [AuthService]
})
export class LoginComponent {
  credentials = {
    username: '', // Change 'name' to 'username'
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    const credentials = {
      username: this.credentials.username, // Change 'name' to 'username'
      password: this.credentials.password,
    };

    this.authService.login(credentials).subscribe(
      (response: any) => {
        console.log('Connexion réussie', response);
        this.authService.setToken(response.token); // Stocker le token
        this.router.navigate(['/become-client']); // Rediriger vers le tableau de bord
      },
      (error) => {
        console.error('Erreur lors de la connexion', error);
      }
    );
  }
}
