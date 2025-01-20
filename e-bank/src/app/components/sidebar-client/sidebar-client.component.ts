import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TransactionListComponent } from '../transaction-list/transaction-list.component';
import { VersementComponent } from '../versement/versement.component';
import { VirementComponent } from '../virement/virement.component';
import { RetraitComponent } from '../retrait/retrait.component';
import { PaiementComponent } from '../paiement/paiement.component';

@Component({
  selector: 'app-sidebar-client',
  standalone: true,
  imports: [RouterLink,HttpClientModule,CommonModule,FormsModule, TransactionListComponent, VersementComponent, VirementComponent, RetraitComponent, PaiementComponent ],
  templateUrl: './sidebar-client.component.html',
  styleUrl: './sidebar-client.component.css'
})
export class SidebarClientComponent {

}