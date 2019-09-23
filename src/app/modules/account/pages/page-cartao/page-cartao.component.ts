import { Component, OnInit } from '@angular/core';
import { Cartao } from 'src/models/cartao';
import { CartaoService } from 'src/services/cartao.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-page-cartao',
  templateUrl: './page-cartao.component.html',
  styles: []
})
export class PageCartaoComponent implements OnInit{
  returnUrl: string;

  cartao: Cartao = new Cartao ();

  constructor(
    private service: CartaoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.returnUrl = '/compact/account/profile'
  }

  salvar() {
    this.service.adicionar(this.cartao).subscribe(x => {
      this.router.navigateByUrl(this.returnUrl)
      // sucesso
      alert("Cartão cadastrado com sucesso.")
    }, 
    error => {
      // erro
      alert("Não foi possível cadastrar.")
    })
  }

    cancelar() {
      this.router.navigateByUrl(this.returnUrl)
    }
}