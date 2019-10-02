import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopSidebarService } from '../../services/shop-sidebar.service';
import { Produto } from 'src/models/produto';

@Component({
    selector: 'app-grid',
    templateUrl: './page-category.component.html',
    styleUrls: ['./page-category.component.scss'],
    providers: [
        {provide: ShopSidebarService, useClass: ShopSidebarService}
    ]
})
export class PageCategoryComponent {
    products: Produto[] = [];
    // filters: ProductFilter[] = filters;

    columns: 3|4|5 = 3;
    viewMode: 'grid'|'grid-with-features'|'list' = 'grid';
    sidebarPosition: 'start'|'end' = 'start'; // For LTR scripts "start" is "left" and "end" is "right"

    constructor(private route: ActivatedRoute) {
        this.route.data.subscribe(data => {
            this.columns = 'columns' in data ? data.columns : this.columns;
            this.viewMode = 'viewMode' in data ? data.viewMode : this.viewMode;
            this.sidebarPosition = 'sidebarPosition' in data ? data.sidebarPosition : this.sidebarPosition;
        });
    }
}
