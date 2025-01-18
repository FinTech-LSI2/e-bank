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
  standalone:true,
  imports:[HttpClientModule,FormsModule,CommonModule,NavbarComponent,RouterLink,FooterComponent],
  providers:[AuthService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  credentials = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.credentials).subscribe(
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
