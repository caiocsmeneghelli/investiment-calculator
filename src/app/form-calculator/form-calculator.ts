import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxMaskDirective } from 'ngx-mask';

import { InvestmentData } from '../models/investiment-data';

@Component({
  selector: 'app-form-calculator',
  imports: [CommonModule, FormsModule, NgxMaskDirective],
  templateUrl: './form-calculator.html',
  styleUrl: './form-calculator.scss',
})
export class FormCalculator {
  initialInvestment: number = 0;
  annualInvestment: number = 0;
  expectedReturn: number = 0;
  duration: number = 0;

  onSubmit(): void {
    const investmentData: InvestmentData = {
      initialInvestiment: this.initialInvestment,
      anualInvestiment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration,
    };
    console.log('Investment Data:', investmentData);
    // Aqui você pode adicionar a lógica para processar os dados do formulário
  }
}
