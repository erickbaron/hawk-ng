import { Component } from '@angular/core';
import { AuthService } from '../../../../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Usuario } from 'src/models/usuario';
import { UsuarioService } from 'src/services/usuario.service';

@Component({
    selector: 'app-login',
    templateUrl: './page-login.component.html',
    styles: []
})
export class PageLoginComponent {
    usuario: Usuario = new Usuario();

    constructor(
        private service: AuthService,
        private toastr: ToastrService,
        private route: Router,
        private location: Location
    ) { }

    login() {
        this.service.login(this.usuario).subscribe(x => {
            localStorage.setItem('UsuarioToken', x.token);
            localStorage.setItem('UsuarioEmail', x.usuario.email);
            localStorage.setItem("UsuarioId", x.usuario.id.toString());
            localStorage.setItem('UsuarioSenha', x.usuario.senha);
            this.toastr.success('Bem vindo ao Hawk!')
        }, error => {
            this.toastr.error('Login e/ou senha incorretos');
        });
    }
    goBack() {
        this.location.back();
    }
}
