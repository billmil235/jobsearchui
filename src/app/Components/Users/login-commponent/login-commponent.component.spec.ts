import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCommponentComponent } from './login-commponent.component';

describe('LoginCommponentComponent', () => {
  let component: LoginCommponentComponent;
  let fixture: ComponentFixture<LoginCommponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginCommponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCommponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
