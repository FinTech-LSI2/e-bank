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
  clients: Client[] = []; // Array to store the list of clients

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.fetchClients(); // Fetch the list of clients when the component initializes
  }

  fetchClients(): void {
    this.clientService.getAllClients().subscribe({
      next: (clients) => {
        this.clients = clients; // Store the fetched clients in the array
      },
      error: (error) => {
        console.error('Error fetching clients:', error);
        alert('Failed to fetch clients. Please try again.');
      }
    });
  }

  deleteClient(id: number): void {
    if (confirm('Are you sure you want to delete this client?')) {
      this.clientService.deleteClient(id).subscribe({
        next: () => {
          alert('Client deleted successfully!');
          this.fetchClients(); // Refresh the list after deletion
        },
        error: (error) => {
          console.error('Error deleting client:', error);
          alert('Failed to delete client. Please try again.');
        }
      });
    }
  }
}
