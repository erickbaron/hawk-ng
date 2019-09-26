import { Component } from '@angular/core';
import { enderecos } from 'src/data/endereco-cliente';
import { EnderecoClienteInterface } from 'src/app/shared/interfaces/endereco-cliente';
import { EnderecoClienteService } from 'src/services/endereco-cliente.service';
import { EnderecoCliente } from 'src/models/endereco-cliente';


@Component({
    selector: 'app-page-addresses-list',
    templateUrl: './page-addresses-list.component.html',
    styles: []
})
export class PageAddressesListComponent {
    endereco: EnderecoClienteInterface[] = enderecos;

    enderecoCliente: EnderecoCliente = new EnderecoCliente();
  
    constructor(private service: EnderecoClienteService) { }

    apagar(id){
        this.service.apagar(id).subscribe(x=>{
            alert("Registro Apagado")
        },error =>{
        alert("Não foi possível apagar")
        })
    }
}
