import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from '../../../../../../services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/models/usuario';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-cadastro-usuario',
  templateUrl: './page-cadastro-usuario.component.html',
  styles: []
})
export class PageCadastroUsuarioComponent implements OnInit {
  usuario: Usuario = new Usuario();
  nome: string = '';
  registerForm: FormGroup;

  // masks
  public maskTelefone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskCPF = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  public maskCEP = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  constructor(
    private service: UsuarioService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private location: Location
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
          confirmarSenha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(24)]]
        }, { validator: this.compararSenhas })
      });
    }

    cadastrarUsuario() {
      this.service.adicionar(this.usuario).subscribe(x => {
        this.toastr.success('Cadastro Bem Sucedido!');
      }, error => {
        this.toastr.error('Não Foi Possível Realizar o Cadastro!');
      });
    }

    compararSenhas(fb: FormGroup) {
      const confirmarSenhaControle = fb.get('confirmPassword');
      if (confirmarSenhaControle.errors === null || 'mismatch' in confirmarSenhaControle.errors) {
        if (fb.get('password').value !== confirmarSenhaControle.value) {
          confirmarSenhaControle.setErrors ({ mismatch: true});
        } else {
          confirmarSenhaControle.setErrors(null);
        }
      }
    }

    goBack() {
      this.location.back();
      this.location.back();
    }
  }


  // buscarPorCep(cep: string): Promise<Endereco>;
