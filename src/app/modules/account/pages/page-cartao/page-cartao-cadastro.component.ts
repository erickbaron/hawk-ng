
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
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-page-cartao',
  templateUrl: './page-cartao.component.html',
  styles: ['']
})

export class PageCartaoComponent implements OnInit {

  returnUrl: string;
  cartoes: Cartao[] = [];

  cartao: Cartao = new Cartao();
  clientes: Cliente[] = []
  modalRef: BsModalRef;

  id: number


  public maskCVC = [/\d/, /\d/, /\d/,];
  public maskDataVencimento = [/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];



  constructor(
    private service: CartaoService,
    private modalService: BsModalService,
    private serviceCliente: ClienteService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }


  ngOnInit(): void {
    this.returnUrl = 'compact/account/cart'
    this.atualizarDados();
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.obterPeloId(this.id);

  }


  // FUNÇÕES

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

  alterar(cartao) {
    this.service.alterar(cartao).subscribe(x => {this.atualizarDados()
      this.id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.obterPeloId(this.id);
      this.toastr.success("Registro Alterado!")
    },
      error => {
        this.toastr.error("Não Foi Possível alterar!")
      })
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

  atualizarDados() {

    this.service.obterTodos().subscribe(x => {
      this.cartoes = x;
    })
  }

  obterPeloId(id) {
    this.service.obterPeloId(id).subscribe(x => {
      this.cartao = x;
    })
  }




  // MODAIS

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.atualizarDados();
  }

  openModalEditarCartao(templateEditarCartao: TemplateRef<any>) {
    this.modalRef = this.modalService.show(templateEditarCartao);
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.obterPeloId(this.id);
  }



}