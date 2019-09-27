import { NgModule, Component } from '@angular/core';
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
import { PageAddressesListComponent } from './pages/page-addresses-list/page-addresses-list.component';
import { ListaProdutoIndexComponent } from './pages/lista-produto/lista-produto-index/lista-produto-index.component';

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
                component: PageAddressesListComponent
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
        component: EnderecoCadastro
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


    },
    {
        path: 'listaproduto',
        component: ListaProdutoIndexComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
