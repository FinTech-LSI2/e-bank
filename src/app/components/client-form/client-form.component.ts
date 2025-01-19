import { Component } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [ClientService],
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent {
  clientForm: FormGroup;
  client: Client = {
    lastname: '',
    firstname: '',
    cin: '',
    email: '',
    numeroTelephone: '',
    dateNaissance: '',
    adresse: '',
    natureClient: '',
    inscriptionDate: '',
    password: '',
  };

  constructor(
    private clientService: ClientService,
    private fb: FormBuilder
  ) {
    this.clientForm = this.fb.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      cin: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      email: ['', [Validators.required, Validators.email]],
      numeroTelephone: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      dateNaissance: ['', Validators.required],
      adresse: ['', Validators.required],
      natureClient: ['', Validators.required],
      inscriptionDate: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  saveClient(): void {
    if (this.clientForm.invalid) {
      alert('Please fill out the form correctly.');
      return;
    }

    this.client = { ...this.clientForm.value };

    this.clientService.createClient(this.client).subscribe({
      next: () => {
        alert('Client created successfully!');
        this.resetForm();
      },
      error: (error) => {
        console.error('Error creating client:', error);
        alert('Failed to create client. Please try again.');
      }
    });
  }

  resetForm(): void {
    this.clientForm.reset();
  }
}
