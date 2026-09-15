import { Component } from '@angular/core';
import { CatalogoFilmes } from './catalogo-filmes/catalogo-filmes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CatalogoFilmes],
  template: '<app-catalogo-filmes />'
})
export class App {}
