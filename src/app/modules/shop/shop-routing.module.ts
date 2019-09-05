import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageCategoryComponent } from './pages/page-category/page-category.component';
import { PageCartComponent } from './pages/page-cart/page-cart.component';
import { PageWishlistComponent } from './pages/page-wishlist/page-wishlist.component';
import { PageCheckoutComponent } from './pages/page-checkout/page-checkout.component';
import { PageCompareComponent } from './pages/page-compare/page-compare.component';
import { PageTrackOrderComponent } from './pages/page-track-order/page-track-order.component';
import { CheckoutGuard } from './guards/checkout.guard';
import { PageProductComponent } from './pages/page-product/page-product.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'category-grid-3-columns-sidebar'
    },
    {
        path: 'category-grid-3-columns-sidebar',
        component: PageCategoryComponent,
        data: {
            columns: 3,
            viewMode: 'grid',
            sidebarPosition: 'start'
        }
    },
    {
        path: 'category-grid-4-columns-full',
        component: PageCategoryComponent,
        data: {
            columns: 4,
            viewMode: 'grid'
        }
    },
    {
        path: 'category-grid-5-columns-full',
        component: PageCategoryComponent,
        data: {
            columns: 5,
            viewMode: 'grid'
        }
    },
    {
        path: 'category-list',
        component: PageCategoryComponent,
        data: {
            columns: 3,
            viewMode: 'list',
            sidebarPosition: 'start'
        }
    },
    {
        path: 'category-right-sidebar',
        component: PageCategoryComponent,
        data: {
            columns: 3,
            viewMode: 'grid',
            sidebarPosition: 'end'
        }
    },
    {
        path: 'product',
        pathMatch: 'full',
        redirectTo: 'product/1'
    },
    {
        path: 'product/:id',
        component: PageProductComponent,
        data: {
            layout: 'standard'
        }
    },
    {
        path: 'product-columnar',
        component: PageProductComponent,
        data: {
            layout: 'columnar'
        }
    },
    {
        path: 'product-sidebar',
        component: PageProductComponent,
        data: {
            layout: 'sidebar',
            sidebarPosition: 'start'
        }
    },
    {
        path: 'cart',
        component: PageCartComponent
    },
    {
        path: 'checkout',
        component: PageCheckoutComponent,
        canActivate: [CheckoutGuard],
    },
    {
        path: 'wishlist',
        component: PageWishlistComponent
    },
    {
        path: 'compare',
        component: PageCompareComponent
    },
    {
        path: 'track-order',
        component: PageTrackOrderComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShopRoutingModule { }
