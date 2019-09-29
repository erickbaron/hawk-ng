import { Component } from '@angular/core';
import { ProfileService } from 'src/services/profile.service';
import { Profile } from 'src/models/profile';
import { Cliente } from 'src/models/cliente';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/services/cliente.service';


@Component({
    selector: 'app-page-profile',
    templateUrl: './page-profile.component.html',
    styles: []
})
export class PageProfileComponent {
profile: Profile = new Profile();
cliente: Cliente[] = [];

    constructor(private service: ProfileService,
        private clienteService: ClienteService) { }

     salvar(){
         this.service.adicionar(this.profile).subscribe(x => 
            alert("Cadastrou"))
     }

     chamarCliente(){
        this.clienteService.obterTodos().subscribe(x => {
          this.cliente = x;
        })

    }

}

