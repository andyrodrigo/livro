import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesonagem',
  templateUrl: './pesonagem.component.html',
  styleUrls: ['./pesonagem.component.css'],
})
export class PesonagemComponent implements OnInit {
  @Input() imagem: string = '';
  @Input() nome: string = '';
  @Input() texto1: string = '';
  @Input() texto2: string = '';

  constructor() {}

  ngOnInit(): void {}
}
