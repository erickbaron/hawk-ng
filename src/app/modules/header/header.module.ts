import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// modules
import { SharedModule } from '../../../services/shared.module';

// components
import { DepartmentsComponent } from './components/departments/departments.component';
import { DropcartComponent } from './components/dropcart/dropcart.component';
import { HeaderComponent } from './header.component';
import { LinksComponent } from './components/links/links.component';
import { MegamenuComponent } from './components/megamenu/megamenu.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavComponent } from './components/nav/nav.component';
import { SearchComponent } from './components/search/search.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        // components
        DepartmentsComponent,
        DropcartComponent,
        HeaderComponent,
        LinksComponent,
        MegamenuComponent,
        MenuComponent,
        NavComponent,
        SearchComponent,
        TopbarComponent,
        CategoriaComponent,
    ],
    imports: [
        // modules (angular)
        CommonModule,
        RouterModule,
        HttpClientModule,
        // modules
        SharedModule
    ],
    exports: [
        // components
        HeaderComponent
    ]
})
export class HeaderModule { }
