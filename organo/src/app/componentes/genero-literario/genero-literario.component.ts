import { Component, input } from '@angular/core';
import { LivroComponent } from "../livro/livro.component";
import { livros } from '../../mock-livros';
import { Genero } from '../livro/livro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genero-literario',
  standalone: true,
  imports: [
    LivroComponent,
    CommonModule
  ],
  templateUrl: './genero-literario.component.html',
  styleUrl: './genero-literario.component.css'
})
export class GeneroLiterarioComponent {
  
  genero = input.required<Genero>();
  
}
