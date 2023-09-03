import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductOverviewRoutingModule } from './product-overview-routing.module';
import { ProductOverviewPage } from '../product-overview/product-overview.page';


@NgModule({
  declarations: [
    ProductOverviewPage
  ],
  imports: [
    CommonModule,
    ProductOverviewRoutingModule
  ]
})
export class ProductOverviewModule { }
