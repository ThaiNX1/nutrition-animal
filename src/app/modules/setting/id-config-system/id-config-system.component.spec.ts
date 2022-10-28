import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdConfigSystemComponent } from './id-config-system.component';

describe('IdConfigSystemComponent', () => {
  let component: IdConfigSystemComponent;
  let fixture: ComponentFixture<IdConfigSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdConfigSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdConfigSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
