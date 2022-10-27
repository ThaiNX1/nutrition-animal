import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdProductCategoryComponent } from './id-product-category.component';

describe('IdProductCategoryComponent', () => {
  let component: IdProductCategoryComponent;
  let fixture: ComponentFixture<IdProductCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdProductCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
