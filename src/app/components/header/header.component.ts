import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() mobileMenuOpen: boolean = false;
  @Input() cartCount: number = 68;

  @Output()
  readonly login: EventEmitter<void> = new EventEmitter();

  loginClicked() {
    this.login.emit();
  }
}
