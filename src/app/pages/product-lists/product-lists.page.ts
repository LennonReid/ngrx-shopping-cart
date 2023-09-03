import { Component, OnInit } from '@angular/core';
import { ProductListsService } from "../../services/product-lists.service";
import { catchError, Observable, shareReplay } from "rxjs";
import { IFProduct } from "../../interfaces/FakeProduct.interface";


@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.page.html',
  styleUrls: ['./product-lists.page.scss']
})
export class ProductListsPage implements OnInit {
  productLists$: Observable<IFProduct[]> = this.productListsService.getFakeData().pipe(
    catchError((error) => {
      console.log(error);
      return this.productListsService.getLocalData();
    }),
    shareReplay(1)
  );
  randomNum = (Math.round((Math.random()) + 1 * 100));

  trackByProductLists(index: number, item: IFProduct): number {
    return item.id;
  }

  ratingArrays = Array.from({length: 5}, (v, i) => i);

  constructor(
    private productListsService: ProductListsService
  ) {
  }

  addToCart() {
    console.log('clicked button');

  }

  ngOnInit(): void {
  }

  onImgLoadError(event: Event) {
    const image = event.target as HTMLImageElement;
    image!.src = "/assets/images/AI_not_found.png"
    image.onerror = null

  }
}
