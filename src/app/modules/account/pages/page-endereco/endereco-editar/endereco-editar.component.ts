import { Component } from '@angular/core';
import { EnderecoService } from 'src/services/endereco.service';
import { EnderecoCliente } from 'src/models/endereco-cliente';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-endereco-editar',
  templateUrl: './endereco-editar.component.html',
  styles: []
})
export class EnderecoEditar{

  endereco: EnderecoCliente = new EnderecoCliente();

  constructor(
    private service: EnderecoService,
    private toastr: ToastrService
    ) { }
    enderecos: EnderecoCliente[] = [];
    
  atualizarDados(){
    this.service.obterTodos().subscribe(x => {
      this.enderecos = x;
    }, error => { 
      alert("ERROR");
    });
  }

  editar(){
    this.service.alterar(this.endereco).subscribe(x =>{this.atualizarDados();
      this.toastr.success("Alterado com sucesso!")
    },
    error => {this.toastr.error("Não foi possível alterar!")
  }) 
}

}
