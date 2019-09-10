import { NgModule } from "@angular/core";

// modules (angular)
import { CommonModule } from '@angular/common';

// modules
import { AdministradorRoutingModule } from './administrador-routing.module';
import { SharedModule } from 'src/services/shared.module';

// components
import { AdministradorLayoutComponent } from './components/layout/layout.component';





@NgModule({
    declarations: [
        AdministradorLayoutComponent,
    ],
    imports: [
        CommonModule,
        AdministradorRoutingModule,
        SharedModule
    ]
})
export class AdministradorModule { }