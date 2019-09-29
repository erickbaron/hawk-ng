import { Component } from '@angular/core';
import { Usuario } from '../../../../../../models/login';
import { LoginService } from '../../../../../../services/login.service';
import { AuthService } from '../../../../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

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

    login(usuario) {
        this.service.login(this.usuario).subscribe(x => {
            localStorage.setItem('UsuarioToken', x.token);
            localStorage.setItem('UsuarioNome', x.usuario.nome);
            localStorage.setItem('UsuarioId', x.usuario.id.toString())
            this.goBack();
        }, error => {
            this.toastr.error('Login e/ou senha incorretos');
        });

    }
    goBack() {
        this.location.back();
    }
}
