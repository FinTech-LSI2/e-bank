import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionService } from '../../services/transaction.service';
import { Versement } from '../../models/versement';

@Component({
    selector: 'app-versement',
    imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule],
    providers: [TransactionService],
    templateUrl: './versement.component.html',
    styleUrl: './versement.component.css'
})
export class VersementComponent implements OnInit {
  versement: Versement = { rib: '', amount: 0, transactionDate: new Date() };

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.transactionService.makeVersement(this.versement).subscribe(
      response => console.log('Versement réussi', response),
      error => console.error('Erreur lors du versement', error)
    );
  }
}
