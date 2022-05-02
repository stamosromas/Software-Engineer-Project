import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkerComponent } from './linker.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LinkerComponent', () => {
  let component: LinkerComponent;
  let fixture: ComponentFixture<LinkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkerComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
