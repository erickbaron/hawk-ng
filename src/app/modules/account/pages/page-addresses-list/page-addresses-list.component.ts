import { Component, TemplateRef } from '@angular/core';
import { EnderecoCliente } from 'src/models/endereco-cliente';
import { EnderecoService } from 'src/services/endereco.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';



@Component({
    selector: 'app-page-addresses-list',
    templateUrl: './page-addresses-list.component.html',
    styles: []
})



export class PageAddressesListComponent {
    enderecos: EnderecoCliente[] = [];

    enderecoCliente: EnderecoCliente = new EnderecoCliente();


    message: string;
    modalRef: BsModalRef;

    public maskCEP = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

    constructor(
        private service: EnderecoService,
        private modalService: BsModalService,
        private toastr: ToastrService
    ) { }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    openModalEditar(templateEditar: TemplateRef<any>) {
        this.modalRef = this.modalService.show(templateEditar);
    }

    salvar() {
        this.service.adicionar(this.enderecoCliente).subscribe(x => {
            this.toastr.success("Cadastrado Com Cucesso!")
        }, error => {
            this.toastr.error("Não Foi Possível Cadastrar!")
        })
    }


    // openModalOption(templateOption: TemplateRef<any>) {
    //     this.modalRef = this.modalService.show(templateOption, { class: 'modal-sm' });
    // }

    apagar(id) {
        this.service.apagar(id).subscribe(x => {
            this.toastr.success("Registro Apagado!")
        }, error => {
            this.toastr.error("Não Foi Possível Apagar!")
        })
    }

    editar() {
        this.service.alterar(this.enderecoCliente.id).subscribe(
            x => {
                this.toastr.success("Registro Alterado!")

            }, error => { this.toastr.error("Não Foi Possível Alterar!") }
        )
    }

    atualizarDados() {
        this.service.obterTodos().subscribe(x => {
            this.enderecos = x;
        })
        
    }

    
}

