import { Component, OnInit } from '@angular/core';
import { variaveis } from 'src/app/constants/variaveis.constants';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.css'],
})
export class DepoimentosComponent implements OnInit {
  constructor() {}

  texto_1: string =
    'Uma imersão em uma aventura cheia de suspense, melancolia, romance e erotismo. Saindo do lógico e sempre surpreendendo, a história conseguiu me prender com um enredo muito detalhista e bem construído, juntamente com os personagens que conquistam e proporcionam  um misto de emoções, entre amar alguns e odiar outros, pude sentir alegria e angústia com eles.';
  nome_1: string = 'Glaucia Lima';

  texto_2: string =
    'Fui completamente envolvida pela trama com uma escrita direta e envolvente. Sem enrolações, a história vai direto ao ponto, prendendo a atenção desde o início. Logo no primeiro capítulo, somos presenteados com um clímax que deixa um gostinho de quero mais e a narrativa sempre consegue me surpreender.';
  nome_2: string = 'Clara Daliane';

  texto_3: string =
    'O livro é um misto de aventura, romance e ficção, uma maravilha de ser lido, te prende de um jeito que sempre dá vontade de saber o que vai acontecer na próxima página. Toda a ação e investigação da Valéria torna o livro envolvente e o romance vivido por ela com certeza apimenta a história.';
  nome_3: string = 'Ariadne Elisa';

  texto_4: string =
    'A personagem principal do livro, nos leva a caminhar por sua dramática história de vida e morte, ao mesmo tempo em que se apaixona de forma improvável. Com uma narrativa muito bem escrita, personagens cativantes e intrigantes, Garota da Noite faz pensar sobre vários aspectos da personalidade humana, bem como das tramas da sociedade. Além disso, nos tira o fôlego com suas cenas picantes e confrontos mortais. Uma obra que nos causa emoções intensas e que eu quero ver se tornar uma série de TV. Maravilhoso!';
  nome_4: string = 'Jordana Souza';

  ngOnInit(): void {}

  navegar(): void {
    window.open(variaveis.AMAZON, '_blank');
  }
}
