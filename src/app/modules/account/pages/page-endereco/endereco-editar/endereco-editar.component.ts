import { Component, OnInit } from '@angular/core';
import { EnderecoService } from 'src/services/endereco.service';
import { EnderecoCliente } from 'src/models/endereco-cliente';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-endereco-editar',
  templateUrl: './endereco-editar.component.html',
  styles: []
})
export class EnderecoEditar implements OnInit {

  enderecoCliente: EnderecoCliente = new EnderecoCliente();

  returnUrl: string;
  id:number;

  

  public maskCEP = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  constructor(
    private service: EnderecoService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  enderecos: EnderecoCliente[] = [];


ngOnInit(){
  this.returnUrl = '/address'
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.obterPeloId(this.id);

    this.atualizarDados()
  }

  atualizarDados() {
    this.service.obterTodos().subscribe(x => {
      this.enderecos = x;
    }, error => {
      alert("ERROR");
    });
  }

  editar(enderecoCliente) {
    this.router.navigateByUrl(this.returnUrl)
    this.service.alterar(enderecoCliente).subscribe(
      x => {this.atualizarDados()
        this.toastr.success("Registro Alterado!")

      }, error => { this.toastr.error("Não Foi Possível Alterar!") }
    )
  }

  obterPeloId(id) {
    this.service.obterPeloId(id).subscribe(x => {
      this.enderecoCliente = x;
    })
  }

  cancelar() {
    this.router.navigateByUrl(this.returnUrl)
  }

}
