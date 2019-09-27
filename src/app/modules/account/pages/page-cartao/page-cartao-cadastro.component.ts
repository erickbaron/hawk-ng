import { Component, TemplateRef } from '@angular/core';
import { CartaoInterface } from 'src/app/shared/interfaces/cartao';
import { Cartao } from 'src/models/cartao';
import { CartaoService } from 'src/services/cartao.service';
// import { Router, ActivatedRoute  } from '@angular/router';
// import { from } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';


@Component({
  selector: 'app-page-cartao',
  templateUrl: './page-cartao.component.html',
  styles: []
})

export class PageCartaoComponent {
  cartoes: CartaoInterface[] = [];

  cartao: Cartao = new Cartao ();

  modalRef: BsModalRef;

  constructor(private service: CartaoService,
    private modalService: BsModalService
    ) { }

openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}

  salvar() {
    this.service.adicionar(this.cartao).subscribe(x => {
      // this.router.navigateByUrl(this.returnUrl)
      // sucesso
      alert("Cartão cadastrado com sucesso.")
    }, 
    error => {
      // erro
      alert("Não foi possível cadastrar.")
    })
  }

    cancelar() {
      // this.router.navigateByUrl(this.returnUrl)
    }
}