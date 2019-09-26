import { Component, OnInit, TemplateRef } from '@angular/core';
import { EnderecoCliente } from 'src/models/endereco-cliente';
import { EnderecoService } from 'src/services/endereco.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-endereco-cadastro',
  templateUrl: './endereco.component.html',
  styles: []
})
export class EnderecoCadastro {

  endereco: EnderecoCliente = new EnderecoCliente();


  constructor(
    private service: EnderecoService,
    private route: ActivatedRoute,
    private router: Router
   ) { }

  salvar() {
    this.service.adicionar(this.endereco).subscribe(x => {
      alert("Cadastrado")
    }, error => {
      alert("Não Cadastrou")
    })
  }


}

