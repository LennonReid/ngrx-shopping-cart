import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListsPage } from './product-lists.component';

describe('ProductListsComponent', () => {
  let component: ProductListsPage;
  let fixture: ComponentFixture<ProductListsPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListsPage]
    });
    fixture = TestBed.createComponent(ProductListsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
