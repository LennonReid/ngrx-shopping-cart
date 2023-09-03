import { Component } from '@angular/core';
import { CartService } from "../../services/cart.service";
import { catchError, Observable, shareReplay } from "rxjs";
import { IFProduct } from "../../interfaces/FakeProduct.interface";
import { IFCart } from "../../interfaces/cart.interface";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss']
})
export class ShoppingCartPage {
  carts$: Observable<IFCart[]> = this.cartService.getFakeData().pipe(
    catchError((error) => {
      console.log(error);
      return this.cartService.getLocalData();
    }),
    shareReplay(1)
  );
  randomNum = (Math.round((Math.random()) + 1 * 100));

  trackByProductLists(index: number, item: IFCart): number {
    return item.id;
  }

  mobileMenuOpen = false;
  desktopMenuOpen = false;

  constructor(private cartService: CartService) {
    this.carts$.subscribe(res => {
      console.log(res);
    })
  }

}
