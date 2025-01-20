import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    imports: [],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) {} // Inject Router

  // Method to navigate to the credit request page
  navigateToCreditRequest() {
    this.router.navigate(['/credit-request']);
  }
  navigateToBecomeClient(): void {
    this.router.navigate(['/become-client']);  // Navigation vers le composant 'BecomeclientComponent'
  }
  navigateToLogin(){
    this.router.navigate(['/log-in-page']);
  }
  backToHome(){
    this.router.navigate(['/']);

  }
  navigateToConverter(){
    this.router.navigate(['/currency-converter']);
  }


}
