import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreditRequestComponent } from './components/credit-request/credit-request.component';
import { BecomeclientComponent } from './components/becomeclient/becomeclient.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { LoanApplicationComponent } from './components/loan-application/loan-application.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoanApplicationListComponent } from './components/loan-application-list/loan-application-list.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { CompteFormComponent } from './components/compte-form/compte-form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'credit-request', component: LoanApplicationComponent  },
  { path: 'become-client', component: BecomeclientComponent },
  { path: 'log-in-page', component: LogInComponent },
  { path: 'SIDE', component: SidebarComponent },
  { path: 'List-demande', component: LoanApplicationListComponent },
  { path: 'client-form', component: ClientFormComponent },
  { path: 'client-list', component: ClientListComponent },
  {path: 'compte-form', component: CompteFormComponent },


  
];
