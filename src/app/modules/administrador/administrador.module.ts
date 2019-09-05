import { NgModule } from "@angular/core";

// modules (angular)
import { CommonModule } from '@angular/common';

// modules
import { AdministradorRoutingModule } from './administrador-routing.module';
import { SharedModule } from 'src/services/shared.module';

// components
import { AdministradorLayoutComponent } from './components/layout/layout.component';

// pages
import { PageFinancasComponent } from './pages/page-financas/page-financas.component';
import { PageListaProdutosComponent } from './pages/page-lista-produtos/page-lista-produtos.component';




@NgModule({
    declarations: [
        AdministradorLayoutComponent,
        PageFinancasComponent,        
        PageListaProdutosComponent
    ],
    imports: [
        CommonModule,
        AdministradorRoutingModule,
        SharedModule
    ]
})
export class AdministradorModule { }