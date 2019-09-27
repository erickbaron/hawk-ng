import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/models/produto';
import { ProdutoService } from 'src/services/produto.service';

@Component({
  selector: 'app-lista-produto-index',
  templateUrl: './lista-produto-index.component.html',
  styles: []
})
export class ListaProdutoIndexComponent implements OnInit {
  returnUrl: string;

  produto: Produto = new Produto();
  
  constructor(
    private service: ProdutoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.returnUrl = '/lista-produto'
  }


}
