import { Component } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [ClientService],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export class ClientFormComponent {
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

  constructor(private clientService: ClientService) {}

  saveClient(): void {
    this.clientService.createClient(this.client).subscribe(() => {
      alert('Client created successfully!');
      this.resetForm();
    });
  }

  resetForm(): void {
    this.client = {
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
  }
}
