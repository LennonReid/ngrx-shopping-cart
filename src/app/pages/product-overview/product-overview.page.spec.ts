import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOverviewPage } from './product-overview.component';

describe('ProductOverviewComponent', () => {
  let component: ProductOverviewPage;
  let fixture: ComponentFixture<ProductOverviewPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductOverviewPage]
    });
    fixture = TestBed.createComponent(ProductOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
