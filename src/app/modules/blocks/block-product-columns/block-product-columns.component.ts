import { Component, Input } from '@angular/core';
import { BlockProductColumn } from '../../../shared/interfaces/block-product-column';

@Component({
    selector: 'app-block-product-columns',
    templateUrl: './block-product-columns.component.html',
    styleUrls: ['./block-product-columns.component.scss']
})
export class BlockProductColumnsComponent {
    @Input() columns: BlockProductColumn[] = [];

    constructor() { }
}
