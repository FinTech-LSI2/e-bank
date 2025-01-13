import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreditRequestComponent } from './components/credit-request/credit-request.component';
import { BecomeclientComponent } from './components/becomeclient/becomeclient.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { LoanApplicationComponent } from './components/loan-application/loan-application.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoanApplicationListComponent } from './components/loan-application-list/loan-application-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'credit-request', component: LoanApplicationComponent  },
  { path: 'become-client', component: BecomeclientComponent },
  { path: 'log-in-page', component: LogInComponent },
  { path: 'SIDE', component: SidebarComponent },
  { path: 'List-demande', component: LoanApplicationListComponent },


  
];
