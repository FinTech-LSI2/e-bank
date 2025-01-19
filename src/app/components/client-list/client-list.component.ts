import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Chart, registerables } from 'chart.js';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  providers: [ClientService],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css',
})
export class ClientListComponent implements OnInit {
  clients: Client[] = []; // Liste des clients
  clientTypes: { type: string; count: number }[] = []; // Données pour le Pie Chart
  public chart: any; // Référence au graphique

  constructor(private clientService: ClientService) {
    Chart.register(...registerables); // Enregistrer les modules de Chart.js
  }

  ngOnInit(): void {
    this.fetchClients();
    setInterval(() => {
      this.fetchClients(); // Poll every 30 seconds
    }, 30000);
  }


  fetchClients(): void {
    this.clientService.getAllClients().subscribe({
      next: (clients) => {
        this.clients = clients; // Stocker les clients
        this.calculateClientTypes(clients); // Calculer les types de clients
        this.createChart(); // Créer le Pie Chart
      },
      error: (error) => {
        console.error('Error fetching clients:', error);
        alert('Failed to fetch clients. Please try again.');
      },
    });
  }

  calculateClientTypes(clients: Client[]): void {
    const typeCounts: { [key: string]: number } = {};

    clients.forEach((client) => {
      const type = client.natureClient;
      if (type) {
        typeCounts[type] = (typeCounts[type] || 0) + 1;
      }
    });

    this.clientTypes = Object.keys(typeCounts).map((type) => ({
      type: type,
      count: typeCounts[type],
    }));
  }

  createChart(): void {
    if (this.chart) {
      this.chart.destroy(); // Détruire le graphique existant avant d'en créer un nouveau
    }

    const labels = this.clientTypes.map((item) => item.type);
    const data = this.clientTypes.map((item) => item.count);

    this.chart = new Chart('MyChart', {
      type: 'pie', // Type de graphique
      data: {
        labels: labels, // Étiquettes (types de clients)
        datasets: [
          {
            label: 'Client Types',
            data: data, // Données (nombre de clients par type)
            backgroundColor: [
              '#1b365c', // Bleu foncé
              '#FFD700', // Jaune vif
              '#33A02C', // Vert foncé (pour varier)
              '#FB9A99', // Rose pâle (pour varier)
              '#A6CEE3', // Bleu clair (pour varier)
              '#FDBF6F', // Orange clair (pour varier)
              '#B2DF8A', // Vert clair (pour varier)
              '#CAB2D6', // Violet pâle (pour varier)
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: false, // Désactiver la responsivité
        maintainAspectRatio: false, // Désactiver le maintien du ratio d'aspect
        plugins: {
          legend: {
            position: 'top', // Position de la légende
          },
          title: {
            display: true,
            text: 'Répartition des Types de Clients', // Titre du graphique
          },
        },
      },
    });
  }
  deleteClient(id: number): void {
    if (confirm('Are you sure you want to delete this client?')) {
      this.clientService.deleteClient(id).subscribe({
        next: () => {
          alert('Client deleted successfully!');
          this.fetchClients(); // Rafraîchir la liste après suppression
        },
        error: (error) => {
          console.error('Error deleting client:', error);
          alert('Failed to delete client. Please try again.');
        },
      });
    }
  }
}
