import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormCalculator } from "./form-calculator/form-calculator";
import { Header } from "./header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormCalculator, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('investiment-calculator');
}
