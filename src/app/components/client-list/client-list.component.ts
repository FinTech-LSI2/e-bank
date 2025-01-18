import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule],
  providers: [ClientService],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.clientService.getClients().subscribe((data) => {
      this.clients = data;
    });
  }

  deleteClient(id: number): void {
    this.clientService.deleteClient(id).subscribe(() => {
      this.loadClients();
    });
  }
}