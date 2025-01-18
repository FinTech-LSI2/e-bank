import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompteService } from '../../services/compte.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

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

  
  constructor(private fb: FormBuilder, private compteService: CompteService) {
    this.compteForm = this.fb.group({
      balance: [0, [Validators.required, Validators.min(0)]],
      typeCompte: ['CURRANT', Validators.required],
      status: ['ACTIVATED', Validators.required],
      idClient: [null, [Validators.required, Validators.min(1)]], // Ajout d'idClient avec validation
      interetRate: [0, [Validators.min(0)]], // Optionnel pour les comptes non-épargne
    });
  }
  

  onSubmit() {
    if (this.compteForm.valid) {
      this.compteService.createCompte(this.compteForm.value).subscribe({
        next: (res) => alert(res),
        error: (err) => console.error(err),
      });
    } else {
      alert("Form is not valid");
    }
  }
}
