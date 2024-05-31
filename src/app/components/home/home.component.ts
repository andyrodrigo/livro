import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trailer: string = './assets/midia/trailer.mp4';
  linkLivro: string = './assets/images/AF_Post_Mockup_851x315px.jpg';

  imageUrls: string[] = [
    '/assets/images/cidade.jpeg',
    '/assets/images/alcateia.jpeg',
    '/assets/images/castelo.jpeg',
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

}
