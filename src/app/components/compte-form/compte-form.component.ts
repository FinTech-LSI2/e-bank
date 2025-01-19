import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompteService } from '../../services/compte.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CompteDTO } from '../../models/compte-dto';

@Component({
  selector: 'app-compte-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [CompteService],
  templateUrl: './compte-form.component.html',
  styleUrl: './compte-form.component.css'
})
export class CompteFormComponent {
  compteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private compteService: CompteService
  ) {
    this.compteForm = this.fb.group({
      idClient: ['', [Validators.required, Validators.min(1)]], // Add client ID field
      balance: ['', [Validators.required, Validators.min(0)]],
      typeCompte: ['', Validators.required],
      decouvert: [0], // Optional, only for current accounts
      interetRate: [0], // Optional, only for savings accounts
    });
  }

  // Handle account type change
  onAccountTypeChange(): void {
    const typeCompte = this.compteForm.get('typeCompte')?.value;

    if (typeCompte === 'CURRANT') {
      // Add validators for decouvert (overdraft limit)
      this.compteForm.get('decouvert')?.setValidators([Validators.required, Validators.min(0)]);
      this.compteForm.get('interetRate')?.clearValidators();
    } else if (typeCompte === 'SAVING') {
      // Add validators for interetRate (interest rate)
      this.compteForm.get('interetRate')?.setValidators([Validators.required, Validators.min(0)]);
      this.compteForm.get('decouvert')?.clearValidators();
    }

    // Update the form control validity
    this.compteForm.get('decouvert')?.updateValueAndValidity();
    this.compteForm.get('interetRate')?.updateValueAndValidity();
  }

  onSubmit(): void {
    if (this.compteForm.invalid) {
      alert('Please fill out the form correctly.');
      return;
    }

    const compteDto: CompteDTO = this.compteForm.value;
    console.log('Sending payload:', compteDto); // Log the payload

    this.compteService.createCompte(compteDto).subscribe({
      next: (response) => {
        alert('Compte created successfully!');
        this.compteForm.reset();
      },
      error: (error) => {
        console.error('Error creating compte:', error);
        alert('Failed to create compte. Please try again.');
      }
    });
  }
}
