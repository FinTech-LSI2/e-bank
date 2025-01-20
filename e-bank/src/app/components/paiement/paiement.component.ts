import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Paiement } from '../../models/paiement';

@Component({
    selector: 'app-paiement',
    imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule],
    providers: [TransactionService],
    templateUrl: './paiement.component.html',
    styleUrl: './paiement.component.css'
})
export class PaiementComponent implements OnInit {
  paiement: Paiement = { rib: '', amount: 0, numFacture: '', transactionDate: new Date() };

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.transactionService.makePaiement(this.paiement).subscribe(
      response => console.log('Paiement réussi', response),
      error => console.error('Erreur lors du paiement', error)
    );
  }
}