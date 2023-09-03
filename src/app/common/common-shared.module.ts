import { NgModule } from '@angular/core';
import { FirstImagePipe } from "./pipes/first-image.pipe";
import { CommonModule } from "@angular/common";
import { Price } from "./pipes/price.pipe";
import { RatingPipe } from "./pipes/rating.pipe";


@NgModule({
  declarations: [
    FirstImagePipe,
    Price,
    RatingPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FirstImagePipe,
    Price,
    RatingPipe
  ]
})
export class CommonSharedModule {
}
