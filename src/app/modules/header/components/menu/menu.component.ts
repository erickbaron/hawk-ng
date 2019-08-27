import { Component, Input } from '@angular/core';
import { NestedLink } from '../../../../shared/interfaces/nested-link';

@Component({
    selector: 'app-header-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
    @Input() layout: 'classic'|'topbar' = 'classic';
    @Input() items: NestedLink[] = [];

    constructor() { }
}
