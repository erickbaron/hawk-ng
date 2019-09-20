import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AdministradorLayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
    {
        path: 'administrador',
        component: AdministradorLayoutComponent
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministradorRoutingModule { }