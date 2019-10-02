import { Component, TemplateRef, OnInit } from '@angular/core';
import { EnderecoCliente } from 'src/models/endereco-cliente';
import { EnderecoService } from 'src/services/endereco.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
    selector: 'app-page-addresses-list',
    templateUrl: './page-addresses-list.component.html',
    styles: []
})



export class PageAddressesListComponent implements OnInit {
    returnUrl: string;
    
    enderecoCliente: EnderecoCliente = new EnderecoCliente();
    
    id: number;
    
    modalRef: BsModalRef;
    
    
    // masks
    public maskCEP = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

    constructor(
        private service: EnderecoService,
        private route: ActivatedRoute,
        private router: Router,
        private toastr: ToastrService,
        private modalService: BsModalService) { }


    enderecos: EnderecoCliente[] = [];

    ngOnInit(): void {

        this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.obterPeloId(this.id);

        this.atualizarDados();

    }



    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    openModalEditar(templateEditar: TemplateRef<any>) {
        this.modalRef = this.modalService.show(templateEditar);
    }

    salvar() {
        this.service.adicionar(this.enderecoCliente).subscribe(x => {
            this.atualizarDados();
            this.toastr.success("Cadastrado Com Cucesso!")
        }, error => {
            this.toastr.error("Não Foi Possível Cadastrar!")
        })
    }


    apagar(id) {
        this.service.apagar(id).subscribe(x => {
            this.atualizarDados();
            this.toastr.success("Registro Apagado!")
        }, error => {
            this.toastr.error("Não Foi Possível Apagar!")
        })
    }

    obterPeloId(id) {
        this.service.obterPeloId(id).subscribe(x => {
            this.enderecoCliente = x;
        })
    }

    atualizarDados() {
        this.service.obterTodos().subscribe(x => {
            this.enderecos = x;
        }, error => {
            alert("ERROR");
        });
    }

    alterar(enderecoCliente) {
        this.service.alterar(enderecoCliente).subscribe(x => {
            this.atualizarDados()
            this.toastr.success("Registro Alterado com Sucesso")
        },
            error => {
                this.toastr.error("Não foi possível alterar")
            })
    }
}
