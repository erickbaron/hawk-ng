import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// modules (third-party)
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ModalModule } from 'ngx-bootstrap/modal';

// directives
import { ClickDirective } from '../app/shared/directives/click.directive';
import { CollapseContentDirective, CollapseDirective, CollapseItemDirective } from '../app/shared/directives/collapse.directive';
import { DepartmentsAreaDirective } from '../app/shared/directives/departments-area.directive';
import { DropdownDirective } from '../app/shared/directives/dropdown.directive';
import { FakeSlidesDirective } from '../app/shared/directives/fake-slides.directive';
import { OwlPreventClickDirective } from '../app/shared/directives/owl-prevent-click.directive';

// components
import { AlertComponent } from '../app/shared/components/alert/alert.component';
import { IconComponent } from '../app/shared/components/icon/icon.component';
import { InputNumberComponent } from '../app/shared/components/input-number/input-number.component';
import { LoadingBarComponent } from '../app/shared/components/loading-bar/loading-bar.component';
import { PageHeaderComponent } from '../app/shared/components/page-header/page-header.component';
import { PaginationComponent } from '../app/shared/components/pagination/pagination.component';
import { PostCardComponent } from '../app/shared/components/post-card/post-card.component';
import { ProductCardComponent } from '../app/shared/components/product-card/product-card.component';
import { ProductComponent } from '../app/shared/components/product/product.component';
import { QuickviewComponent } from '../app/shared/components/quickview/quickview.component';
import { RatingComponent } from '../app/shared/components/rating/rating.component';

// pipes
import { CurrencyFormatPipe } from '../app/shared/pipes/currency-format.pipe';


@NgModule({
    declarations: [
        // directives
        ClickDirective,
        CollapseContentDirective,
        CollapseDirective,
        CollapseItemDirective,
        DepartmentsAreaDirective,
        DropdownDirective,
        FakeSlidesDirective,
        OwlPreventClickDirective,
        // components
        AlertComponent,
        IconComponent,
        InputNumberComponent,
        LoadingBarComponent,
        PageHeaderComponent,
        PaginationComponent,
        PostCardComponent,
        ProductCardComponent,
        ProductComponent,
        QuickviewComponent,
        RatingComponent,
        // pipes
        CurrencyFormatPipe
    ],
    imports: [
        // modules (angular)
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        // modules (third-party)
        CarouselModule,
        ModalModule.forRoot()
    ],
    exports: [
        // directives
        ClickDirective,
        CollapseContentDirective,
        CollapseDirective,
        CollapseItemDirective,
        DepartmentsAreaDirective,
        DropdownDirective,
        FakeSlidesDirective,
        OwlPreventClickDirective,
        // components
        AlertComponent,
        IconComponent,
        InputNumberComponent,
        LoadingBarComponent,
        PageHeaderComponent,
        PaginationComponent,
        PostCardComponent,
        ProductCardComponent,
        ProductComponent,
        QuickviewComponent,
        RatingComponent,
        // pipes
        CurrencyFormatPipe
    ]
})
export class SharedModule { }
