import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IFProduct } from "../interfaces/FakeProduct.interface";
import { IFCart } from "../interfaces/cart.interface";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {
  }

  getLocalData(): Observable<IFCart[]> {
    return this.http.get<IFCart[]>('/assets/FAKE_CARTS.json')
  }

  getFakeData(): Observable<IFCart[]> {
    return this.http.get<IFCart[]>('/fakestoreapi/carts')
  }
}
