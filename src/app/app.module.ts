import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LivroComponent } from './components/livro/livro.component';
import { AutorComponent } from './components/autor/autor.component';
import { ImagensComponent } from './components/imagens/imagens.component';
import { ContatoComponent } from './components/contato/contato.component';
import { DepoimentosComponent } from './components/depoimentos/depoimentos.component';
import { ArtigosComponent } from './components/artigos/artigos.component';
import { PesonagemComponent } from './components/pesonagem/pesonagem.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LivroComponent,
    AutorComponent,
    ImagensComponent,
    ContatoComponent,
    DepoimentosComponent,
    ArtigosComponent,
    HomeComponent,
    PesonagemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
