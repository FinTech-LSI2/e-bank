import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreditRequestComponent } from './components/credit-request/credit-request.component';
import { BecomeclientComponent } from './components/becomeclient/becomeclient.component';
import { LoanApplicationComponent } from './components/loan-application/loan-application.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoanApplicationListComponent } from './components/loan-application-list/loan-application-list.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { CompteFormComponent } from './components/compte-form/compte-form.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CompteListComponent } from './components/compte-list/compte-list.component';

// Exportez la constante `routes`
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'credit-request', component: LoanApplicationComponent },
  { path: 'become-client', component: BecomeclientComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'client-list', component: ClientListComponent },

  {
    path: 'employee-dashboard', // Chemin sans espace
    component: DashboardComponent, // Le tableau de bord contient la barre latérale
    children: [
      { path: 'client-list', component: ClientListComponent }, // Chargé dans le <router-outlet>
      { path: 'compte-form', component: CompteFormComponent },
      {path:'compte-list',component:CompteListComponent} ,// Chargé dans le <router-outlet>
      
    ],
  },
  // Rediriger vers le tableau de bord par défaut
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
