import { Component, OnInit } from '@angular/core';
import { variaveis } from 'src/app/constants/variaveis.constants';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css'],
})
export class LivroComponent implements OnInit {
  capa: string = './assets/images/capa.png';

  titulo: string = 'Garota da Noite';
  data: string = '31/05/24';
  autor: string = 'Anderson Benício';
  genero: string = 'Romance / Ficção';
  editora: string = 'Viseu';
  formato: string = '2 x 16 x 23 cm';
  acabamento: string = 'Brochura, Capa com Brilho e Miolo Amarelo';
  paginas: number = 682;

  resumo: string =
    'Valéria é uma assassina impiedosa, mas, por trás de toda raiva, esconde um passado tenebroso. Todas as noites, ela observa o jovem Daniel. Sua curiosidade e desejo aumentam quanto mais ela percebe o quão diferente ele é da crueldade à qual ela está acostumada. Observá-lo torna-se um vício prazeroso, no entanto ela duvida que ele possa interessar-se por uma vampira assassina. Quando o rapaz se torna um alvo do misterioso grupo rival dos vampiros, ela precisa sair das sombras para protegê-lo e tenta equilibrar encontros noturnos com ele e o seu trabalho de assassina na guerra pela disputa de poder na cidade. Quanto mais tempo passam juntos, mais difícil fica de esconder sua verdadeira identidade. E enquanto a paixão aumenta, também aumentam as revelações sobre o passado sombrio de Valéria. Ela começa a desejar viver um romance em uma vida comum, porém será que a Srta. M. permitirá? Valéria conseguirá protegê-los de tantos inimigos? E será que Daniel realmente aceitará sua verdadeira natureza?';

  imageUrls: string[] = [
    '/assets/images/cidade.jpeg',
    '/assets/images/alcateia.jpeg',
    '/assets/images/castelo.jpeg',
    '/assets/images/xadrez.jpeg',
    '/assets/images/cenario.jpeg',
  ];

  currentImageIndex: number = 0;

  constructor() {}

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
