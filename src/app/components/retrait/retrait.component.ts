import { Component, OnInit } from '@angular/core';
import { Retrait } from '../../models/retrait';
import { TransactionService } from '../../services/transaction.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-retrait',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule],
    providers: [TransactionService],
  templateUrl: './retrait.component.html',
  styleUrl: './retrait.component.css'
})
export class RetraitComponent implements OnInit {
  retrait: Retrait = { rib: '', amount: 0, transactionDate: new Date() };

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.transactionService.makeRetrait(this.retrait).subscribe(
      response => console.log('Retrait réussi', response),
      error => console.error('Erreur lors du retrait', error)
    );
  }
}