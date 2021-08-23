import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLazyComponent } from './auth-lazy.component';

describe('AuthLazyComponent', () => {
  let component: AuthLazyComponent;
  let fixture: ComponentFixture<AuthLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
