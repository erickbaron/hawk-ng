import { Component } from '@angular/core';
import { Compra } from 'src/models/compra';
import { CompraService } from 'src/services/compra.service';
import { Router, ActivatedRoute  } from '@angular/router';


@Component({
    selector: 'app-page-orders-list',
    templateUrl: './page-orders-list.component.html',
    styleUrls: ['./page-orders-list.component.sass']
})
export class PageOrdersListComponent {
    compra: Compra = new Compra();
    compras: Compra[] = [];
   
    constructor(
        private service: CompraService,
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    salvar() {
        this.service.adicionar(this.compra).subscribe(x => {
            
        })
    }
}
