import { Component, OnInit } from '@angular/core';
import { EnderecoCliente } from 'src/models/endereco-cliente';
import { EnderecoClienteService } from 'src/services/endereco-cliente.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-page-endereco',
  templateUrl: './page-endereco.component.html',
  styles: []
})
export class PageEnderecoComponent implements OnInit{
returnUrl: string;

endereco: EnderecoCliente = new EnderecoCliente ();

  constructor(
    private service: EnderecoClienteService,
    private route: ActivatedRoute,
    private router: Router) { }

    
}
