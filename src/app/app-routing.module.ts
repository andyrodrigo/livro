import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LivroComponent } from './components/livro/livro.component';
import { AutorComponent } from './components/autor/autor.component';
import { ImagensComponent } from './components/imagens/imagens.component';
import { ContatoComponent } from './components/contato/contato.component';
import { DepoimentosComponent } from './components/depoimentos/depoimentos.component';
import { ArtigosComponent } from './components/artigos/artigos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'livro', component: LivroComponent },
  { path: 'autor', component: AutorComponent },
  { path: 'personagens', component: ImagensComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'depoimentos', component: DepoimentosComponent },
  { path: 'artigos', component: ArtigosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
