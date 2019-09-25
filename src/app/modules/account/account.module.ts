import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';

// modules
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../../../services/shared.module';

// components
import { LayoutComponent } from './components/layout/layout.component';

// pages

import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageOrdersListComponent } from './pages/page-orders-list/page-orders-list.component';
import { PagePasswordComponent } from './pages/page-password/page-password.component';
import { PageProfileComponent } from './pages/page-profile/page-profile.component';
import { PageCartaoComponent } from './pages/page-cartao/page-cartao.component';
import { EnderecoComponent } from './pages/page-addresses-list/page-addresses-list.component';


@NgModule({
    declarations: [
        // components
        LayoutComponent,
        // pages
       ,
        PageDashboardComponent,
        PageLoginComponent,
        PageOrdersListComponent,
        PagePasswordComponent,
        PageProfileComponent,
        PageCartaoComponent,
        PageCartaoComponent,
        EnderecoComponent

        
    ],
    imports: [
        // modules (angular)
        CommonModule,
        // modules
        AccountRoutingModule,
        SharedModule
    ]
})
export class AccountModule { }
