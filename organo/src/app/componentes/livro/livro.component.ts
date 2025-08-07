import { Component, input } from '@angular/core';
import { Livro } from './livro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

  livro = input.required<Livro>();

  alterarFavorito() {
    this.livro().favorito = !this.livro().favorito;
  }

} 
