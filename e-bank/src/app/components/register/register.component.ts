import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-register',
    imports: [HttpClientModule, FormsModule, CommonModule, NavbarComponent, RouterLink, FooterComponent],
    providers: [AuthService],
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: '',
    role: 'CLIENT', // Par défaut, on enregistre un client
  };

  errorMessage: string = ''; // Pour afficher les messages d'erreur

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    // Vérifier si l'email existe déjà (côté frontend)
    if (this.authService.checkEmailExists(this.user.email)) {
      this.errorMessage = 'Cet email est déjà utilisé. Veuillez utiliser un autre email.';
      return; // Arrêter l'exécution si l'email existe déjà
    }

    // Si l'email n'existe pas, procéder à l'inscription
    this.authService.register(this.user).subscribe(
      (response) => {
        console.log('Inscription réussie', response);
        this.router.navigate(['/login']); // Rediriger vers la page de connexion
      },
      (error) => {
        console.error('Erreur lors de l\'inscription', error);
        this.errorMessage = 'Une erreur est survenue lors de l\'inscription.';
      }
    );
  }
}
