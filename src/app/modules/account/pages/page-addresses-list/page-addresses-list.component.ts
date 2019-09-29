import { Component, TemplateRef } from '@angular/core';
import { EnderecoClienteInterface } from 'src/app/shared/interfaces/endereco-cliente';
import { EnderecoCliente } from 'src/models/endereco-cliente';
import { EnderecoService } from 'src/services/endereco.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';



@Component({
    selector: 'app-page-addresses-list',
    templateUrl: './page-addresses-list.component.html',
    styles: []
})



export class PageAddressesListComponent {
    enderecos: EnderecoClienteInterface[] = [];

    enderecoCliente: EnderecoCliente = new EnderecoCliente();


    message: string;
    modalRef: BsModalRef;

    constructor(private service: EnderecoService,
        private modalService: BsModalService
    ) { }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    openModalEditar(templateEditar: TemplateRef<any>){
        this.modalRef = this.modalService.show(templateEditar);
    }

    salvar() {
        this.service.adicionar(this.enderecoCliente).subscribe(x => {
          alert("Cadastrado")
        }, error => {
          alert("Não Cadastrou")
        })
    }
    

    // openModalOption(templateOption: TemplateRef<any>) {
    //     this.modalRef = this.modalService.show(templateOption, { class: 'modal-sm' });
    // }

    apagar(id) {
        this.service.apagar(id).subscribe(x => {
            alert("Registro Apagado")
        }, error => {
            alert("Não foi possível apagar")
        })
    }
}
