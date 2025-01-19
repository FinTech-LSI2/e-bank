import { Component, OnInit } from '@angular/core';
import { Paiement } from '../../models/paiement';
import { Retrait } from '../../models/retrait';
import { Versement } from '../../models/versement';
import { Virement } from '../../models/virement';
import { TransactionService } from '../../services/transaction.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [TransactionService],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.css'
})
export class TransactionFormComponent implements OnInit {
  transactionType: string = 'retrait';
  retrait: Retrait = { rib: '', amount: 0, transactionDate: new Date() };
  versement: Versement = { rib: '', amount: 0, transactionDate: new Date() };
  paiement: Paiement = { rib: '', amount: 0, numFacture: '', transactionDate: new Date() };
  virement: Virement = { rib: '', amount: 0, destinationRib: '', transactionDate: new Date() };

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    switch (this.transactionType) {
      case 'retrait':
        this.transactionService.makeRetrait(this.retrait).subscribe(
          response => console.log('Retrait réussi', response),
          error => console.error('Erreur lors du retrait', error)
        );
        break;
      case 'versement':
        this.transactionService.makeVersement(this.versement).subscribe(
          response => console.log('Versement réussi', response),
          error => console.error('Erreur lors du versement', error)
        );
        break;
      case 'paiement':
        this.transactionService.makePaiement(this.paiement).subscribe(
          response => console.log('Paiement réussi', response),
          error => console.error('Erreur lors du paiement', error)
        );
        break;
      case 'virement':
        this.transactionService.makeVirement(this.virement).subscribe(
          response => console.log('Virement réussi', response),
          error => console.error('Erreur lors du virement', error)
        );
        break;
    }
  }
}