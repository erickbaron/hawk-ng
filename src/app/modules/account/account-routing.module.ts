import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageOrdersListComponent } from './pages/page-orders-list/page-orders-list.component';
import { PageProfileComponent } from './pages/page-profile/page-profile.component';
import { PagePasswordComponent } from './pages/page-password/page-password.component';
import { EnderecoEditar } from './pages/page-endereco/endereco-editar/endereco-editar.component';
import { EnderecoCadastro } from './pages/page-endereco/endereco-cadastro/endereco-cadastro.component';
import { PageCartaoComponent } from './pages/page-cartao/page-cartao.component';
import { EnderecoComponent } from './pages/page-addresses-list/page-addresses-list.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                component: PageDashboardComponent
            },
            {
                path: 'profile',
                component: PageProfileComponent
            },
            {
                path: 'addresses',
                component: EnderecoComponent
            },
            {
                path: 'orders',
                component: PageOrdersListComponent
            },
            {
                path: 'password',
                component: PagePasswordComponent
            },
            {path: 'card',
        component: PageCartaoComponent
        },
        {
        path: 'address',
        component: EnderecoComponent
    }
        ]
    },
    {
        path: 'login',
        component: PageLoginComponent
    },
    

    {
        path: 'card',
        component: PageCartaoComponent

    },
    {
        path: 'editar',
        component: EnderecoEditar


    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
