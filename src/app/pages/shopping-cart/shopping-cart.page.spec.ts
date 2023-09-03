import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartPage } from './shopping-cart.component';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartPage;
  let fixture: ComponentFixture<ShoppingCartPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingCartPage]
    });
    fixture = TestBed.createComponent(ShoppingCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
