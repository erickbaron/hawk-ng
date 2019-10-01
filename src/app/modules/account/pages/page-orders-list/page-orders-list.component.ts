import { Component } from '@angular/core';
import { Compra } from 'src/models/compra';
import { CompraService } from 'src/services/compra.service';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
    selector: 'app-page-orders-list',
    templateUrl: './page-orders-list.component.html',
    styleUrls: ['./page-orders-list.component.sass']
})
export class PageOrdersListComponent {
    returnUrl: string;

    compra: Compra = new Compra();

    constructor(
        private service: CompraService,
        private route: ActivatedRoute,
        private router: Router) { }


}
