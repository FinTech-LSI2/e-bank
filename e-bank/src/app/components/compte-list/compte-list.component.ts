import { Component, OnInit } from '@angular/core';
import { CompteService } from '../../services/compte.service';
import { CompteDTO } from '../../models/compte-dto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-compte-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  providers: [CompteService],
  templateUrl: './compte-list.component.html',
  styleUrls: ['./compte-list.component.css'],
})
export class CompteListComponent implements OnInit {
  comptes: CompteDTO[] = []; // Tableau pour stocker les comptes
  isLoading = true; // Indicateur de chargement
  errorMessage: string | null = null; // Message d'erreur
  public pieChart: any; // Référence au Pie Chart
  public barChart: any; // Référence au Bar Chart

  constructor(private compteService: CompteService) {
    Chart.register(...registerables); // Enregistrer les modules de Chart.js
  }

  ngOnInit(): void {
    this.loadComptes();
    setInterval(() => {
      this.loadComptes(); // Rafraîchir les données toutes les 30 secondes
    }, 30000);
  }

  // Méthode pour charger les comptes
  loadComptes(): void {
    this.compteService.getAllComptes().subscribe({
      next: (data) => {
        this.comptes = data; // Stockez les données dans le tableau
        this.isLoading = false; // Désactivez l'indicateur de chargement
        this.calculateCompteTypes(data); // Calculer les types de comptes
        this.createPieChart(); // Créer le Pie Chart
        this.createBarChart(data); // Créer le Bar Chart
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors du chargement des comptes'; // Affichez un message d'erreur
        this.isLoading = false; // Désactivez l'indicateur de chargement
        console.error(err); // Log l'erreur dans la console
      },
    });
  }

  // Méthode pour calculer les types de comptes (seulement ACTIVATED)
  calculateCompteTypes(comptes: CompteDTO[]): { type: string; count: number }[] {
    const typeCounts: { [key: string]: number } = {};

    comptes
      .filter((compte) => compte.status === 'ACTIVATED') // Filtrer les comptes ACTIVATED
      .forEach((compte) => {
        const type = compte.typeCompte;
        if (type) {
          typeCounts[type] = (typeCounts[type] || 0) + 1;
        }
      });

    return Object.keys(typeCounts).map((type) => ({
      type: type,
      count: typeCounts[type],
    }));
  }

  // Méthode pour créer le Pie Chart (seulement ACTIVATED)
  createPieChart(): void {
    if (this.pieChart) {
      this.pieChart.destroy(); // Détruire le graphique existant avant d'en créer un nouveau
    }

    const compteTypes = this.calculateCompteTypes(this.comptes);
    const labels = compteTypes.map((item) => item.type);
    const data = compteTypes.map((item) => item.count);

    this.pieChart = new Chart('PieChart', {
      type: 'pie', // Type de graphique
      data: {
        labels: labels, // Étiquettes (types de comptes)
        datasets: [
          {
            label: 'Types de Comptes',
            data: data, // Données (nombre de comptes par type)
            backgroundColor: [
              '#1b365c', // Bleu foncé
              '#FFD700', // Jaune vif
              '#33A02C', // Vert foncé
              '#FB9A99', // Rose pâle
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top', // Position de la légende
          },
          title: {
            display: true,
            text: 'Répartition des Types de Comptes (ACTIVATED)', // Titre du graphique
          },
        },
      },
    });
  }

  // Méthode pour créer le Bar Chart (seulement ACTIVATED)
  createBarChart(comptes: CompteDTO[]): void {
    if (this.barChart) {
      this.barChart.destroy(); // Détruire le graphique existant avant d'en créer un nouveau
    }

    const activatedComptes = comptes.filter((compte) => compte.status === 'ACTIVATED'); // Filtrer les comptes ACTIVATED
    const labels = activatedComptes.map((compte) => compte.id);
    const data = activatedComptes.map((compte) => compte.balance);

    this.barChart = new Chart('BarChart', {
      type: 'bar', // Type de graphique
      data: {
        labels: labels, // Étiquettes (ID des comptes)
        datasets: [
          {
            label: 'Solde des Comptes',
            data: data, // Données (soldes des comptes)
            backgroundColor: '#1b365c', // Couleur des barres
            borderColor: '#1b365c',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true, // Commencer l'axe Y à 0
            title: {
              display: true,
              text: 'Solde (€)', // Titre de l'axe Y
            },
          },
          x: {
            title: {
              display: true,
              text: 'Comptes', // Titre de l'axe X
            },
          },
        },
        plugins: {
          legend: {
            position: 'top', // Position de la légende
          },
          title: {
            display: true,
            text: 'Soldes des Comptes (ACTIVATED)', // Titre du graphique
          },
        },
      },
    });
  }

  // Méthode pour activer un compte
activateCompte(rib: string): void {
  this.compteService.activateCompte(rib).subscribe({
    next: (response) => {
      console.log('Réponse du serveur :', response);
      alert(response); // Afficher le message de succès
      this.loadComptes(); // Rafraîchir la liste des comptes
    },
    error: (err) => {
      console.error(err);
      alert('Erreur lors de l\'activation du compte.');
    },
  });
}

// Méthode pour suspendre un compte
suspendCompte(rib: string): void {
  this.compteService.suspendCompte(rib).subscribe({
    next: (response) => {
      console.log('Réponse du serveur :', response);
      alert(response); // Afficher le message de succès
      this.loadComptes(); // Rafraîchir la liste des comptes
    },
    error: (err) => {
      console.error(err);
      alert('Erreur lors de la suspension du compte.');
    },
  });
}
}