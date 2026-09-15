import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalogo-filmes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './catalogo-filmes.html',
  styleUrl: './catalogo-filmes.css'
})
export class CatalogoFilmes {
  filmes: string[] = ['Interestelar', 'A Origem', 'O Rei Leão', 'Matrix', 'De Volta para o Futuro'];
  filmeSelecionado: string = '';
  novoFilme: string = '';
  favorito: boolean = false;
  visualizacoes: number = 0;

  selecionarFilme(filme: string): void {
    if (this.filmeSelecionado !== filme) {
      this.filmeSelecionado = filme;
      this.favorito = false;
      this.visualizacoes = 0;
    }
  }

  adicionarFilme(): void {
    if (this.novoFilme.trim() !== '') {
      this.filmes.push(this.novoFilme.trim());
      this.novoFilme = '';
    }
  }

  alternarFavorito(): void {
    this.favorito = !this.favorito;
  }

  aumentarVisualizacoes(): void {
    this.visualizacoes++;
  }
}
