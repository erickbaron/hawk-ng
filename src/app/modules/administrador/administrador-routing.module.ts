import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AdministradorLayoutComponent } from './components/layout/layout.component';
import { PageFinancasComponent } from './pages/page-financas/page-financas.component';
import { PageListaProdutosComponent } from './pages/page-lista-produtos/page-lista-produtos.component';

const routes: Routes = [
    {
        path: '',
        component: AdministradorLayoutComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'financas'
            },
            {
                path: 'financas',
                component: PageFinancasComponent
            },
            {
                path: 'lista-produtos',
                component: PageListaProdutosComponent
            }

        ]
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministradorRoutingModule { }