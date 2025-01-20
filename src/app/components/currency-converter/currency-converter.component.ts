import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyConversionRequest } from '../../models/currency-conversion-request';
import { CurrencyConversionResponse } from '../../models/currency-conversion-response';
import { CurrencyService } from '../../services/currency-conversion.service';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [CurrencyService],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.css'
})
export class CurrencyConverterComponent implements OnInit {
  supportedCurrencies: string[] = [];
  conversionRequest: CurrencyConversionRequest = {
    from: 'USD',
    to: 'EUR',
    amount: 1.00
  };
  conversionResult: CurrencyConversionResponse | null = null;
  error: string | null = null;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.loadSupportedCurrencies();
    this.convertCurrency();
  }

  loadSupportedCurrencies(): void {
    this.currencyService.getSupportedCurrencies().subscribe(
      currencies => this.supportedCurrencies = currencies,
      error => this.error = 'Impossible de charger les devises'
    );
  }

  convertCurrency(): void {
    this.currencyService.convertCurrency(this.conversionRequest).subscribe(
      result => {
        this.conversionResult = result;
        this.error = null;
      },
      error => {
        this.error = 'Échec de la conversion';
        this.conversionResult = null;
      }
    );
  }

  swapCurrencies(): void {
    const temp = this.conversionRequest.from;
    this.conversionRequest.from = this.conversionRequest.to;
    this.conversionRequest.to = temp;
    this.convertCurrency();
  }

  onCurrencyChange(): void {
    if (this.conversionRequest.from && this.conversionRequest.to) {
      this.convertCurrency();
    }
  }

  getExchangeRate(): number {
    if (this.conversionResult) {
      return this.conversionResult.result / this.conversionRequest.amount;
    }
    return 0;
  }

  getCurrencyName(code: string): string {
    const currencyNames: { [key: string]: string } = {
      'USD': 'Dollar des États-Unis',
      'EUR': 'Euro',
      'GBP': 'Livre sterling',
      'JPY': 'Yen japonais',
      'AUD': 'Dollar australien',
      'CAD': 'Dollar canadien',
      'CHF': 'Franc suisse',
      'CNY': 'Yuan chinois',
      'MAD': 'Dirham marocain',
      // Add more currencies as needed
    };
    return currencyNames[code] || code;
  }
}
