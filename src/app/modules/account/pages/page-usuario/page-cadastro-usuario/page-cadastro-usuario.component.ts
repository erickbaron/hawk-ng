import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../../../../../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/models/login';

@Component({
  selector: 'app-page-cadastro-usuario',
  templateUrl: './page-cadastro-usuario.component.html',
  styles: []
})
export class PageCadastroUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario;
  nome: string = '';
  registerForm: FormGroup;

  constructor(
    private service: LoginService,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  validacao() {
    this.registerForm = this.fb.group({
      nome: ['', Validators.required, Validators.minLength(3), Validators.maxLength(100)],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', Validators.required],
      senhas: this.fb.group({
        senha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(24)]],
        canfirmarSenha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(24)]]
      }, { validator: this.compararSenhas })
    });
  }

  cadastrarUsuario() {
    this.service.adicionar(this.usuario).subscribe(x => {
      this.toastr.success('Cadastro bem sucedido!')
    }, error => {
        this.toastr.error('Não foi possível realizar o cadastro!')
    }
    
      )
  }

}
