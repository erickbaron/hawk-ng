import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule, NgSwitch } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

// modules
import { NgxViacepModule } from '@brunoc/ngx-viacep';
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../../../services/shared.module';
import { TextMaskModule } from 'angular2-text-mask';

// components
import { LayoutComponent } from './components/layout/layout.component';

// pages

import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageOrdersListComponent } from './pages/page-orders-list/page-orders-list.component';
import { PagePasswordComponent } from './pages/page-password/page-password.component';
import { PageProfileComponent } from './pages/page-profile/page-profile.component';
import { PageAddressesListComponent } from './pages/page-addresses-list/page-addresses-list.component';
import { EnderecoCadastro } from './pages/page-endereco/endereco-cadastro/endereco-cadastro.component';
import { EnderecoEditar } from './pages/page-endereco/endereco-editar/endereco-editar.component';
import { FormControl } from '@angular/forms';
import { EnderecoCliente } from 'src/models/endereco-cliente';
import { PageListaProdutoComponent } from './pages/page-lista-produto/page-lista-produto.component';
import { PageUsuarioComponent } from './pages/page-usuario/page-usuario.component';
import { PageLoginComponent } from './pages/page-usuario/page-login/page-login.component';
import { PageCadastroUsuarioComponent } from './pages/page-usuario/page-cadastro-usuario/page-cadastro-usuario.component';
import { PageCartaoComponent } from './pages/page-cartao/page-cartao-cadastro.component';
import { ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { PageEditarUsuarioComponent } from './pages/page-usuario/page-editar-usuario/page-editar-usuario.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        // components
        LayoutComponent,

        // pages
        PageAddressesListComponent,
        PageDashboardComponent,
        PageLoginComponent,
        PageOrdersListComponent,
        PagePasswordComponent,
        PageProfileComponent,
        PageListaProdutoComponent,
        PageAddressesListComponent,
        PageCartaoComponent,
        EnderecoCadastro,
        EnderecoEditar,
        PageCartaoComponent,
        PageCadastroUsuarioComponent,
        PageUsuarioComponent,
        PageEditarUsuarioComponent


    ],
    imports: [
        // modules (angular)
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgSelectModule,
        // modules
        NgxViacepModule,
        TextMaskModule,
        AccountRoutingModule,
        SharedModule,
        ModalModule.forRoot(),
        BsDatepickerModule.forRoot()
    ]
})
export class AccountModule { }
