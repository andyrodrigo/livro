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

  linkAmazon = variaveis.AMAZON;

  imageUrls: string[] = [
    '/assets/images/cidade.jpeg',
    '/assets/images/alcateia.jpeg',
    '/assets/images/castelo.jpg',
    '/assets/images/xadrez.jpeg',
    '/assets/images/cenario.jpeg',
  ];

  currentImageIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.changeImage();
    }, 3000);
  }

  changeImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.imageUrls.length;
  }

  navegar(): void {
    window.open(variaveis.AMAZON, '_blank');
  }

}
