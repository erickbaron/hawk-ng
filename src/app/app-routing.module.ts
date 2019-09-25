import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeOneComponent } from './pages/page-home-one/page-home-one.component';
import { RootComponent } from './components/root/root.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'compact'
    },
    {
        path: 'compact',
        component: RootComponent,
        data: {
            headerLayout: 'compact'
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home'
            },
            {
                path: 'home',
                component: PageHomeOneComponent
            },
            {
                path: 'blog',
                loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
            },
            {
                path: 'shop',
                loadChildren: () => import('./modules/shop/shop.module').then(m => m.ShopModule)
            },
            {
                path: 'account',
                loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule)
            },
            {
                path: 'site',
                loadChildren: () => import('./modules/site/site.module').then(m => m.SiteModule)
            },
            {
                path: 'administrador',
                loadChildren: () => import('./modules/administrador/administrador.module').then(m => m.AdministradorModule)
            },
           
        ],
    },
    {
        path: 'compact',
        component: RootComponent,
        data: {
            headerLayout: 'compact'
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home'
            },
            {
                path: 'home',
                component: PageHomeOneComponent
            },
            {
                path: 'blog',
                loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
            },
            {
                path: 'shop',
                loadChildren: () => import('./modules/shop/shop.module').then(m => m.ShopModule)
            },
            {
                path: 'account',
                loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule)
            },
            {
                path: 'site',
                loadChildren: () => import('./modules/site/site.module').then(m => m.SiteModule)
            },
            {
                path: 'administrador',
                loadChildren: () => import('./modules/administrador/administrador.module').then(m => m.AdministradorModule)
            },
            {
                path: 'categoria',
                loadChildren: () => import('src/app/app.module')
            },
           
        ],
    },
    {
        path: '**',
        redirectTo: 'compact'
        
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
