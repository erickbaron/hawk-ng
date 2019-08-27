import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageHomeOneComponent } from './pages/page-home-one/page-home-one.component';
import { PageHomeTwoComponent } from './pages/page-home-two/page-home-two.component';
import { RootComponent } from './components/root/root.component';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'classic'
    },
    {
        path: 'classic',
        component: RootComponent,
        data: {
            headerLayout: 'classic'
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
                path: '**',
                component: PageNotFoundComponent
            }
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
                component: PageHomeTwoComponent
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
                path: '**',
                component: PageNotFoundComponent
            }
        ],
    },
    {
        path: '**',
        redirectTo: 'classic'
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
