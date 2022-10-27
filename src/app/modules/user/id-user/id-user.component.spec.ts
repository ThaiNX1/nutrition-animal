import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdUserComponent } from './id-user.component';

describe('IdUserComponent', () => {
  let component: IdUserComponent;
  let fixture: ComponentFixture<IdUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
