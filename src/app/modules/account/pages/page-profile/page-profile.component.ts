import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/services/profile.service';
import { Profile } from 'src/models/profile';
import { Cliente } from 'src/models/cliente';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/services/cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
//import { NgxViacepModule } from '@brunoc/ngx-viacep';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-page-profile',
    templateUrl: './page-profile.component.html',
    styles: []
})
export class PageProfileComponent implements OnInit {
    profile: Profile = new Profile();
    cliente: Cliente[] = [];
    registerForm: FormGroup;

    // masks
    public maskTelefone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    public maskCPF = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    public maskCEP = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

    constructor(
        private service: ProfileService,
        private toastr: ToastrService,
        private clienteService: ClienteService,
        //private viacep: NgxViacepModule,
        private fb: FormBuilder,
        private location: Location,
        private route: Router
        ) { }

        ngOnInit() {
            this.validacao();
        }

        validacao() {
            this.registerForm = this.fb.group({
                nome: ['', Validators.required, Validators.minLength(3), Validators.maxLength(100)],
                email: ['', [Validators.required, Validators.email]],
                cpf: ['', Validators.required],
                senhas: this.fb.group({
                    senha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(24)]],
                })
            });
        }

        salvarCliente() {
            this.service.adicionar(this.profile).subscribe(x => {
                this.toastr.success('Perfil salvo com sucesso');
            }, error => {
                this.toastr.error('Não foi possível salvar o seu perfil');
            });
        }

        chamarCliente() {
            this.clienteService.obterTodos().subscribe(x => {
                this.cliente = x;
            });

        }

        goBack() {
            this.location.back();
            this.location.back();
        }

    }
