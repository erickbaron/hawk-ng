import { Component, TemplateRef } from '@angular/core';
import { CartaoInterface } from 'src/app/shared/interfaces/cartao';
import { Cartao } from 'src/models/cartao';
import { CartaoService } from 'src/services/cartao.service';
// import { Router, ActivatedRoute  } from '@angular/router';
// import { } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Cliente } from 'src/models/cliente';
import { ClienteService } from 'src/services/cliente.service'


@Component({
  selector: 'app-page-cartao',
  templateUrl: './page-cartao.component.html',
  styles: ['']
})

export class PageCartaoComponent {
  cartoes: CartaoInterface[] = [];

  cartao: Cartao = new Cartao();
  clientes: Cliente[] = []
  modalRef: BsModalRef;

  public maskNumeroCartao = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/,/\d/, '-' , /\d/, /\d/, /\d/,/\d/, '-' , /\d/, /\d/, /\d/,/\d/,];
  public maskCVC = [/\d/,/\d/,/\d/,];

  constructor(private service: CartaoService,
    private modalService: BsModalService,
    private serviceCliente: ClienteService,
  ) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  salvar() {
    this.service.adicionar(this.cartao).subscribe(x => {
      // this.router.navigateByUrl(this.returnUrl)
      // sucesso
      alert("Cadastrado com sucesso!")
    },
      error => {
        // erro
        alert("Não foi possível cadastrar!")
      })
  }

  cancelar() {
    // this.router.navigateByUrl(this.returnUrl)
  }

  chamarCliente(){
    this.serviceCliente.obterTodos().subscribe(x => {
      this.clientes = x;
    })
  }

  selecionadoCliente(event) {
    this.cartao.clienteId = event == undefined ? 0 : event.id;
  }

}