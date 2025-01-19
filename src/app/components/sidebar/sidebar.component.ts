import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ClientListComponent } from '../client-list/client-list.component';
import { TransactionListComponent } from '../transaction-list/transaction-list.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink,HttpClientModule,CommonModule,FormsModule,ClientListComponent, TransactionListComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
