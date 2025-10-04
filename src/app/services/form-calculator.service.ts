import { Injectable } from "@angular/core";
import { InvestmentData } from "../models/investment-data";

@Injectable({
  providedIn: 'root'
})

export class FormCalculatorService {

  calculateTotalInvestment(data: InvestmentData): number {
    const { initialInvestment, anualInvestment, expectedReturn, duration } = data;
    let total = initialInvestment;
    for (let year = 1; year <= duration; year++) {
      total += anualInvestment;
      total += total * (expectedReturn / 100);
    }

    return total;
  }
}
