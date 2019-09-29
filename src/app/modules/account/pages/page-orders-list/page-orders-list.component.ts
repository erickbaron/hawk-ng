import { Component } from '@angular/core';
import { Compra } from 'src/models/compra';

@Component({
    selector: 'app-page-orders-list',
    templateUrl: './page-orders-list.component.html',
    styleUrls: ['./page-orders-list.component.sass']
})
export class PageOrdersListComponent {
   compras: Compra[] = [];

   
    constructor() { }
}
