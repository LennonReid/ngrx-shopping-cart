import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IFProduct } from "../interfaces/FakeProduct.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductListsService {

  constructor(private http: HttpClient) {
  }

  getLocalData(): Observable<IFProduct[]> {
    return this.http.get<IFProduct[]>('/assets/FAKE_PRODUCTS.json')
  }

  getFakeData(): Observable<IFProduct[]> {
    return this.http.get<IFProduct[]>('/fakestoreapi/products2')
  }
}
