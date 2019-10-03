
import { Component, TemplateRef, OnInit } from '@angular/core'; 
import { CartaoInterface } from 'src/app/shared/interfaces/cartao';
import { Cartao } from 'src/models/cartao';
import { CartaoService } from 'src/services/cartao.service';
import { } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Cliente } from 'src/models/cliente';
import { ClienteService } from 'src/services/cliente.service'
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-page-cartao-cadastro',
  templateUrl: './page-cartao-cadastro.component.html',
  styles: ['']
})

export class PageCartaoComponent implements OnInit{
  
  returnUrl: string;
  cartoes: Cartao[] = [];
  id: number;
  cartao: Cartao = new Cartao();
  clientes: Cliente[] = []
  modalRef: BsModalRef;
  
  
  public maskCVC = [/\d/, /\d/, /\d/,];
  public maskDataVencimento = [ /\d/,/\d/, '/',/\d/,/\d/ ];
  
  ngOnInit(): void {
    this.atualizarDados();
  }
  
  
  constructor(
    private service: CartaoService,
    private modalService: BsModalService,
    private serviceCliente: ClienteService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
    ) { }
    
    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
      this.atualizarDados();
    }
    
    openModalEditarCartao(templateEditarCartao: TemplateRef<any>) {
      this.modalRef = this.modalService.show(templateEditarCartao);
      this.obterPeloId(this.id);
    }
    
    obterPeloId(id) {
      this.service.obterPeloId(id).subscribe(x => {
        this.cartao = x;
      })
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
      });
    }
    
    alterar(cartao) {
      this.service.alterar(cartao).subscribe(x => {
        this.atualizarDados();
      },
      error => {
        this.toastr.success("Não Foi Possível alterar!")
      })
    }
    
    
    // atualizarDados(){
    //   this.service.obterTodos().subscribe(x => {
    //     this.cartoes = x;
    //   })
    // }
    
    // cancelar() {
    //   // this.router.navigateByUrl(this.returnUrl)
    // }
    
    // chamarCliente(){
    //   this.serviceCliente.obterTodos().subscribe(x => {
    //     this.clientes = x;
    //   })
    // }
    
    // selecionadoCliente(event) {
    //   this.cartao.clienteId = event == undefined ? 0 : event.id;
    // }
    
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