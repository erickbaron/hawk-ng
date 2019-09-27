import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/models/produto';
import { ProdutoService } from 'src/services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.sass']
})
export class ProdutoComponent implements OnInit {
  produto: string;
  produtos: Produto[] = [];
  returnUrl: string;
  
  constructor(
    private service: ProdutoService,
    private route: ActivatedRoute,
    private router: Router){ }
  
  ngOnInit(){
    this.returnUrl = '/produto'
    this.service.obterTodos().subscribe(
      x => {
        this.produtos = x;
      }
      );
    }
    
    salvar() {
      let nomeCompleto = this.produto
      let produto = new Produto();
      produto.id = 1000;
      produto.nome = this.produto;
      this.service.adicionar(produto).subscribe(x => {
        
        this.produto = '';
        
        document.getElementById("campo-produto").focus();
      })
      
      /*listaProdutos() {
        this.router.navigateByUrl(this.returnUrl)
      }*/
      
      
    }
    
  }
  
  