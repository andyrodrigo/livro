import { Component, OnInit } from '@angular/core';
import { variaveis } from 'src/app/constants/variaveis.constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navegar(): void {
    window.open(variaveis.AMAZON, '_blank');
  }
}
