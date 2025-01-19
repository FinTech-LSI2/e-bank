import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Transaction } from '../../models/transaction';
import { TransactionService } from '../../services/transaction.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  providers: [TransactionService],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css',
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = []; // Liste des transactions
  transactionData: { date: string; amount: number }[] = []; // Données pour le graphique
  public chart: any; // Référence au graphique
  rib: string = ''; // RIB pour filtrer les transactions
  totalAmount: number = 0; // Montant total des transactions

  constructor(private transactionService: TransactionService) {
    Chart.register(...registerables); // Enregistrer les modules de Chart.js
  }

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    if (this.rib) {
      this.transactionService.getTransactionsByRib(this.rib).subscribe({
        next: (transactions) => {
          this.transactions = transactions; // Stocker les transactions
          this.prepareTransactionData(transactions); // Préparer les données pour le graphique
          this.calculateTotalAmount(); // Calculer le montant total
          this.createChart(); // Créer le graphique
        },
        error: (error) => {
          console.error('Error fetching transactions:', error);
          alert('Failed to fetch transactions. Please try again.');
        },
      });
    }
  }

  prepareTransactionData(transactions: Transaction[]): void {
    const dataMap: { [key: string]: number } = {};

    transactions.forEach((transaction) => {
      const date = new Date(transaction.transactionDate).toLocaleDateString();
      if (date) {
        dataMap[date] = (dataMap[date] || 0) + transaction.amount;
      }
    });

    this.transactionData = Object.keys(dataMap).map((date) => ({
      date: date,
      amount: dataMap[date],
    }));
  }

  calculateTotalAmount(): void {
    this.totalAmount = this.transactionData.reduce((sum, item) => sum + item.amount, 0);
  }

  createChart(): void {
    if (this.chart) {
      this.chart.destroy(); // Détruire le graphique existant avant d'en créer un nouveau
    }

    const labels = this.transactionData.map((item) => item.date);
    const data = this.transactionData.map((item) => item.amount);

    this.chart = new Chart('TransactionChart', {
      type: 'line', // Type de graphique (ligne)
      data: {
        labels: labels, // Dates des transactions
        datasets: [
          {
            label: 'Montant des Transactions',
            data: data, // Montants des transactions
            backgroundColor: '#1b365c', // Couleur de fond
            borderColor: '#1b365c', // Couleur de la ligne
            tension: 0.4, // Courbure de la ligne
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top', // Position de la légende
          },
          title: {
            display: true,
            text: 'Montant des Transactions par Date', // Titre du graphique
          },
        },
        scales: {
          y: {
            beginAtZero: true, // Commencer l'axe Y à zéro
          },
        },
      },
    });
  }
}