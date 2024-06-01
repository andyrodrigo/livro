import { Component, OnInit } from '@angular/core';
import { variaveis } from 'src/app/constants/variaveis.constants';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrls: ['./artigos.component.css']
})
export class ArtigosComponent implements OnInit {

  lancamento: string = './assets/images/lancamento.jpg';
  diagramacao: string = './assets/images/diagramacao.jpg';
  ilustracaoCapa: string = './assets/images/ilustracaoCapa.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  navegar(): void {
    window.open(variaveis.AMAZON, '_blank');
  }
}
