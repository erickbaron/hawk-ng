import { Component, TemplateRef, OnInit } from '@angular/core';
import { CartaoInterface } from 'src/app/shared/interfaces/cartao';
import { Cartao } from 'src/models/cartao';
import { CartaoService } from 'src/services/cartao.service';
// import { Router, ActivatedRoute  } from '@angular/router';
// import { } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Cliente } from 'src/models/cliente';
import { ClienteService } from 'src/services/cliente.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-cartao',
  templateUrl: './page-cartao.component.html',
  styles: ['']
})

export class PageCartaoComponent implements OnInit{
  cartoes: Cartao[] = [];

  cartao: Cartao = new Cartao();
  clientes: Cliente[] = []
  modalRef: BsModalRef;

  returnUrl: string;

  public maskCVC = [/\d/, /\d/, /\d/,];
  public maskDataVencimento = [/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  ngOnInit(): void {
    this.returnUrl = 'compact/account/cart'

    this.atualizarDados();
}

  constructor(
    private service: CartaoService,
    private modalService: BsModalService,
    private serviceCliente: ClienteService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  salvar() {
    this.service.adicionar(this.cartao).subscribe(x => {
      this.atualizarDados()
      this.toastr.success("Cadastrado Com Sucesso!")
    },
      error => {
        // erro
        this.toastr.error("Não Foi Possível Cadastrar!")
      })
  }

  atualizarDados() {
    this.service.obterTodos().subscribe(x => {
      this.cartoes = x;
    })
  }

  cancelar() {
    this.router.navigateByUrl(this.returnUrl)
  }

  chamarCliente() {
    this.serviceCliente.obterTodos().subscribe(x => {
      this.clientes = x;
    })
  }

  selecionadoCliente(event) {
    this.cartao.clienteId = event == undefined ? 0 : event.id;
  }

  apagar(id) {
    this.service.apagar(id).subscribe(x => {
      this.atualizarDados()
      this.toastr.success("Registro Apagado!")
    },
      error => {
        // erro
        this.toastr.error("Não Foi Possível Apagar!")
      })
  }

}