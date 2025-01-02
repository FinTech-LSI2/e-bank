import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreditRequestComponent } from './components/credit-request/credit-request.component';
import { BecomeclientComponent } from './components/becomeclient/becomeclient.component';
import { LogInComponent } from './components/log-in/log-in.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'credit-request', component: CreditRequestComponent },
  { path: 'become-client', component: BecomeclientComponent },
  { path: 'log-in-page', component: LogInComponent },
];
