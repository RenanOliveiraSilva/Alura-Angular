import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-conta',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './conta.component.html',
  styleUrl: './conta.component.css',
})
export class ContaComponent {}
