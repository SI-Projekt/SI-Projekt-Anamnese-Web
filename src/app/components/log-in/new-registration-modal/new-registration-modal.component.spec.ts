import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRegistrationModalComponent } from './new-registration-modal.component';

describe('NewRegistrationModalComponent', () => {
  let component: NewRegistrationModalComponent;
  let fixture: ComponentFixture<NewRegistrationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRegistrationModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRegistrationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
