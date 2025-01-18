import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreditRequestComponent } from './components/credit-request/credit-request.component';
import { BecomeclientComponent } from './components/becomeclient/becomeclient.component';
import { LoanApplicationComponent } from './components/loan-application/loan-application.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoanApplicationListComponent } from './components/loan-application-list/loan-application-list.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'credit-request', component: LoanApplicationComponent  },
  { path: 'become-client', component: BecomeclientComponent },
  { path: 'SIDE', component: SidebarComponent },
  { path: 'List-demande', component: LoanApplicationListComponent },
  { path: 'List-demande', component: LoanApplicationListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },



];
