import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router
  ) {

  }

  title = 'ngrx-shopping-cart';
  desktopMenuOpen = false;
  mobileMenuOpen = false;

  login() {
    this.router.navigate(['/login']);

  }
}
