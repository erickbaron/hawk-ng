import { Component } from '@angular/core';
import { Address } from '../../../../shared/interfaces/address';
import { addresses } from '../../../../../data/account-addresses';

@Component({
    selector: 'app-page-addresses-list',
    templateUrl: './page-addresses-list.component.html',
    styleUrls: ['./page-addresses-list.component.sass']
})
export class EnderecoComponent {
    addresses: Address[] = addresses;

    constructor() { }
}
