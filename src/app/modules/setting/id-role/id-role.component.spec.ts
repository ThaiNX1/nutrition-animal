import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdRoleComponent } from './id-role.component';

describe('IdRoleComponent', () => {
  let component: IdRoleComponent;
  let fixture: ComponentFixture<IdRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
