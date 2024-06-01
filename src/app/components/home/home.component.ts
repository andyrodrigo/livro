import { Component, OnInit } from '@angular/core';
import { variaveis } from 'src/app/constants/variaveis.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trailer: string = './assets/midia/trailer.mp4';
  linkLivro: string = './assets/images/mockup.jpg';

  imagensGif: string = '/assets/midia/imagens.gif';

  linkAmazon = variaveis.AMAZON;

  constructor() { }

  ngOnInit(): void {}

  navegar(): void {
    window.open(variaveis.AMAZON, '_blank');
  }

}
