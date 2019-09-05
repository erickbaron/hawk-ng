import { Component, Input } from '@angular/core';
import { Megamenu } from '../../../../shared/interfaces/megamenu';

@Component({
    selector: 'app-header-megamenu',
    templateUrl: './megamenu.component.html',
    styleUrls: ['./megamenu.component.scss']
})
export class MegamenuComponent {
    @Input() menu: Megamenu;
    @Input() departments = false;

    constructor() { }
}
