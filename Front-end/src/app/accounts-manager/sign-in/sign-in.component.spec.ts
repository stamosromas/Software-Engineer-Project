import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';


describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should contain correct the title',()=>{
    const title=fixture.debugElement.query(By.css('.text-uppercase')).nativeElement;
    expect(title.innerHTML).toBe(' Sign in to your Account ');
  })
  it('it should contain username as title of first input box',()=>{
    const firstInputTitle=fixture.debugElement.query(By.css('#username')).nativeElement;
    expect(firstInputTitle.innerHTML).toBe('Username');
  })
  it('it should contain \'Enter your password\' as title of second input box',()=>{
    const firstInputTitle=fixture.debugElement.query(By.css('#password')).nativeElement;
    expect(firstInputTitle.innerHTML).toBe('Enter your password');
  })
  it('connect button should be disabled if two input fields are empty',()=>{
    const submitBtn=fixture.debugElement.query(By.css('#submit-button')).nativeElement;
    expect(submitBtn.disabled).toBeTruthy();
  })

  it('only username isnt enough to get enabled button connect button',()=>{
    component.username.setValue('softeng project');
    component.password.setValue('helloItsMe');
    const submitBtn=fixture.debugElement.query(By.css('#submit-button')).nativeElement;
    expect(submitBtn.disabled).toBeTruthy();
  })

});

/*
const title = fixture.debugElement.query(By.css('.im-outlined')).nativeElement;
    expect(title.innerHTML).toBe('Εκκαθάριση');
*/