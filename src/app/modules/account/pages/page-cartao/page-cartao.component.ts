import { Component, OnInit } from '@angular/core';
import { Cartao } from 'src/models/cartao';

Component

@Component({
  selector: 'app-page-cartao',
  templateUrl: './page-cartao.component.html',
  styles: []
})
export class PageCartaoComponent implements OnInit{
  returnUrl: string;

  cartao: Cartao = new Cartao ();

  constructor(
    private service: 
  ) { }
}