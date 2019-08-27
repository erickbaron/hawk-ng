import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { ProductFilter } from '../../../shared/interfaces/product-filter';
import { isPlatformBrowser } from '@angular/common';
import { DirectionService } from '../../../shared/services/direction.service';

@Component({
    selector: 'app-widget-filters',
    templateUrl: './widget-filters.component.html',
    styleUrls: ['./widget-filters.component.scss']
})
export class WidgetFiltersComponent {
    @Input() filters: ProductFilter[] = [];
    @Input() offcanvas: 'always'|'mobile' = 'mobile';

    isPlatformBrowser = isPlatformBrowser(this.platformId);
    rightToLeft = false;

    constructor(
        @Inject(PLATFORM_ID) private platformId: any,
        private direction: DirectionService
    ) {
        this.rightToLeft = this.direction.isRTL();
    }
}
