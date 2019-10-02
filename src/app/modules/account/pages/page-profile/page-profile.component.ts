import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/models/cliente';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/services/cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { NgxViacepModule } from '@brunoc/ngx-viacep';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-page-profile',
    templateUrl: './page-profile.component.html',
    styles: []
})
export class PageProfileComponent implements OnInit {
    cliente: Cliente = new Cliente();
    registerForm: FormGroup;
    
    // masks
    public maskTelefone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    public maskCPF = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    
    constructor(
        private toastr: ToastrService,
        private service: ClienteService,
        private viacep: NgxViacepModule,
        private fb: FormBuilder,
        private location: Location,
        private route: Router
        ) { }

        
        clientes: Cliente[] = []

        ngOnInit() {
            this.validacao();
        }

        validacao() {
            this.registerForm = this.fb.group({
                nome: ['', Validators.required, Validators.minLength(3), Validators.maxLength(100)],
                email: ['', [Validators.required, Validators.email]],
                cpf: ['', Validators.required],
                sexo: ['', Validators.required],
                senhas: this.fb.group({
                    senha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(24)]],
                })
            });
        }

        salvarCliente() {
            this.service.adicionar(this.cliente).subscribe(x => {
                this.toastr.success("Perfil salvo com sucesso");
            }, error => {
                this.toastr.error("Não Foi Possível Salvar o Seu Perfil");
            });
        }

        chamarCliente() {
            this.service.obterTodos().subscribe(x => {
                this.clientes = x;
            });

        }

        goBack() {
            this.location.back();
            this.location.back();
        }

    }
