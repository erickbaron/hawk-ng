import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-block-categories',
    templateUrl: './block-categories.component.html',
    styleUrls: ['./block-categories.component.scss']
})
export class BlockCategoriesComponent {
    @Input() header = '';
    @Input() layout: 'classic'|'compact' = 'classic';
    @Input() categories: any[] = [];

    constructor() { }
}
