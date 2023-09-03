import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'product-lists',
    pathMatch: 'full'
  },
  {
    path: 'product-overview',
    loadChildren: () => import('./pages/product-overview/product-overview.module').then(m => m.ProductOverviewModule)
  },
  {
    path: 'product-lists',
    loadChildren: () => import('./pages/product-lists/product-lists.module').then(m => m.ProductListsModule)
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./pages/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
