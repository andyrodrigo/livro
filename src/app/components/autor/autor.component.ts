import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css'],
})
export class AutorComponent implements OnInit {
  foto: string = './assets/images/perfil.jpg';
  texto1: string =
    'Anderson Benício nasceu em Natal-RN no dia de natal. Quando jovem gostava de desenhar, criar jogos e histórias em quadrinhos. Seu gosto pela leitura teve incentivo de sua avó, que até hoje, aos 95 anos, é uma leitora assídua.';
  texto2: string =
    'É formado em Ciência & Tecnologia e Engenharia da Computação pela Universidade Federal do Rio Grande do Norte. Atualmente trabalha com desenvolvimento de softwares e cria, além de histórias, também jogos eletrônicos como hobby.';

  constructor() {}

  ngOnInit(): void {}
}
