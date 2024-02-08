import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {}
}
