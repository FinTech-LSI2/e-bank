import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Virement } from '../../models/virement';
import { TransactionService } from '../../services/transaction.service';


@Component({
  selector: 'app-virement',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [TransactionService],
  templateUrl: './virement.component.html',
  styleUrl: './virement.component.css'
})
export class VirementComponent implements OnInit {
  virement: Virement = { rib: '', amount: 0, destinationRib: '', transactionDate: new Date() };

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.transactionService.makeVirement(this.virement).subscribe(
      response => console.log('Virement réussi', response),
      error => console.error('Erreur lors du virement', error)
    );
  }
}
