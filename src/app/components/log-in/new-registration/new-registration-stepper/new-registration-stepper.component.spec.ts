import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NewRegistrationStepperComponent } from './new-registration-stepper.component'

describe('NewRegistrationModalComponent', () => {
  let component: NewRegistrationStepperComponent
  let fixture: ComponentFixture<NewRegistrationStepperComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewRegistrationStepperComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRegistrationStepperComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
