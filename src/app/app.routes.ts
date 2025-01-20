import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreditRequestComponent } from './components/credit-request/credit-request.component';
import { BecomeclientComponent } from './components/becomeclient/becomeclient.component';
import { LoanApplicationComponent } from './components/loan-application/loan-application.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoanApplicationListComponent } from './components/loan-application-list/loan-application-list.component';
import { RegisterComponent } from './components/register/register.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { CompteFormComponent } from './components/compte-form/compte-form.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CompteListComponent } from './components/compte-list/compte-list.component';
import { DasboardclientComponent } from './components/dasboardclient/dasboardclient.component';
import { PaiementComponent } from './components/paiement/paiement.component';
import { RetraitComponent } from './components/retrait/retrait.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { VersementComponent } from './components/versement/versement.component';
import { VirementComponent } from './components/virement/virement.component';
import { PdfGeneratorComponent } from './components/pdf-generator/pdf-generator.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { DashboardadminComponent } from './components/dashboardadmin/dashboardadmin.component';


// Exportez la constante `routes`
export const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'credit-request', component: LoanApplicationComponent  },
  { path: 'become-client', component: BecomeclientComponent },
  { path: 'SIDE', component: SidebarComponent },
  { path: 'List-demande', component: LoanApplicationListComponent },
  { path: 'client-form', component: ClientFormComponent },
  { path: 'client-list', component: ClientListComponent },
  {path: 'compte-form', component: CompteFormComponent },
  {path: 'currency-converter', component: CurrencyConverterComponent },
  { path: 'employees', component: EmployeeFormComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
  

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
  { path: '', redirectTo: '', pathMatch: 'full' },

  {
    path: 'admin-dashboard',
    component: DashboardadminComponent,
    children: [
      { path: 'employee-list', component: EmployeeListComponent },
      { path: 'employees', component: EmployeeFormComponent },
  
      { path: '', redirectTo: 'employee-list', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: '/admin-dashboard', pathMatch: 'full' },

  {
    path: 'client-dashboard',
    component: DasboardclientComponent,
    children: [
      { path: 'list-transaction', component: TransactionListComponent },
      { path: 'generate-pdf', component: PdfGeneratorComponent },
      { path: 'virement-form', component: VirementComponent },
      { path: 'versement-form', component: VersementComponent },
      { path: 'retrait-form', component: RetraitComponent },
      { path: 'paiement-form', component: PaiementComponent },
      { path: '', redirectTo: 'list-transaction', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: '/client-dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
