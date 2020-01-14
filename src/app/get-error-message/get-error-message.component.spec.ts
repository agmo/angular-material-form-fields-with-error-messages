import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetErrorMessageComponent } from './get-error-message.component';
import { FormControl, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('GetErrorMessageComponent', () => {
  let component: GetErrorMessageComponent;
  let fixture: ComponentFixture<GetErrorMessageComponent>;
  let errorEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetErrorMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an error message to enter a value if the control has no value and has been touched', () => {
    component.control = new FormControl('', [Validators.required, Validators.email]);
    fixture.detectChanges();

    errorEl = fixture.debugElement.query(By.css('span'));
    expect(errorEl.nativeElement.textContent).toContain('You must enter a value');
  });

  it('should display an error message that e-mail is not valid if the control has an invalid e-mail as value', () => {
    component.control = new FormControl('invalid email', [Validators.required, Validators.email]);
    fixture.detectChanges();

    errorEl = fixture.debugElement.query(By.css('span'));
    expect(errorEl.nativeElement.textContent).toContain('Not a valid email');
  })
});
