import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IFLogin, IFLoginParam } from "../interfaces/login.interface";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(params: IFLoginParam) {
    return this.http.post<IFLogin>('/fakestoreapi/login', params);
  }
}
