import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListsRoutingModule } from './product-lists-routing.module';
import { ProductListsPage } from './product-lists.page';
import { CommonSharedModule } from "../../common/common-shared.module";


@NgModule({
  declarations: [
    ProductListsPage
  ],
  imports: [
    CommonModule,
    ProductListsRoutingModule,
    CommonSharedModule
  ]
})
export class ProductListsModule {
}
