

import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/models/cliente';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/services/cliente.service';


@Component({
    selector: 'app-page-profile',
    templateUrl: './page-profile.component.html',
    styles: []
})

export class PageProfileComponent implements OnInit {
   returnUrl: string; 
   id: number;
   cliente: Cliente = new Cliente();
    constructor(
        private service: ClienteService,
        private route: ActivatedRoute,
        private router: Router) { }
        clientes:   Cliente[] = [];

    ngOnInit() {
        this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.obterPeloId(this.id);
        this.returnUrl = "/";
              }
            
    salvar() {
        this.service.adicionar(this.cliente).subscribe(x => {
        // sucesso
        alert("Cadastrou")
        }, 
        error => {
        // erro
        alert("Não foi possível cadastrar")
        })
        }
    obterPeloId(id) {
        this.service.obterPeloId(id).subscribe(x => {
        this.cliente = x;
        })
        }
        
    alterar(cliente) {
        this.service.alterar(cliente).subscribe( x => {
        alert("Registro Alterado com Sucesso")
        },
        error => {
        alert("Não foi possível alterar")
        })
       }
    }

