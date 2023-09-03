import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListsPage } from "./product-lists.page";

const routes: Routes = [
  {
    path: '',
    component: ProductListsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductListsRoutingModule {
}
