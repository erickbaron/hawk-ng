import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../../../models/usuario';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../../../../services/usuario.service';

@Component({
  selector: 'app-page-editar-usuario',
  templateUrl: './page-editar-usuario.component.html',
  styleUrls: []
})
export class PageEditarUsuarioComponent implements OnInit {
  id: number;
  usuario: Usuario = new Usuario();
  constructor(
    private service: UsuarioService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.obterPeloId(this.id);
  }

  loggedIn() {
    return false;
  }
  obterPeloId(id) {
    this.service.obterPeloId(id).subscribe(x => {
      this.usuario = x;
      this.toastr.success('Sucesso!');
    }, error => {
      this.toastr.error('Erro!');
    });
  }
  alterar(usuario) {
  this.service.alterar(usuario).subscribe(x => {
    this.toastr.success('Registro alterado.', 'Sucesso!');
  }, error => {
    this.toastr.error('Não foi possível alterar o registro.', 'Erro!');
  });
  }
}
