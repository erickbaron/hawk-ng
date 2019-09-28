import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/models/produto';
import { ProdutoService } from 'src/services/produto.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './page-lista-produto.component.html',
  styles: []
})
export class PageListaProdutoComponent implements OnInit {
  returnUrl: string;

  produto: Produto = new Produto();
  
  constructor(
    private service: ProdutoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.returnUrl = '/lista-produto'
  }

  irPraLista() {
    this.router.navigateByUrl(this.returnUrl)
  }

}
