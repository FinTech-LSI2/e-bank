import { Component } from '@angular/core';
import { PdfService } from '../../services/pdf.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-pdf-generator',
    imports: [CommonModule, HttpClientModule, FormsModule],
    providers: [PdfService],
    templateUrl: './pdf-generator.component.html',
    styleUrl: './pdf-generator.component.css'
})
export class PdfGeneratorComponent {
  rib: string = '';

  constructor(private pdfService: PdfService) {}

  generatePdf() {
    if (this.rib) {
      this.pdfService.generatePdf(this.rib).subscribe(
        (data: Blob) => {
          const blob = new Blob([data], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          window.open(url);
        },
        error => {
          console.error('Erreur lors de la génération du PDF', error);
        }
      );
    } else {
      alert('Veuillez entrer un RIB valide.');
    }
  }
}
