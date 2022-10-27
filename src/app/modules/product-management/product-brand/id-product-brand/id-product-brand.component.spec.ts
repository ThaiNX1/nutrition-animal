import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdProductBrandComponent } from './id-product-brand.component';

describe('IdProductBrandComponent', () => {
  let component: IdProductBrandComponent;
  let fixture: ComponentFixture<IdProductBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdProductBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdProductBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
