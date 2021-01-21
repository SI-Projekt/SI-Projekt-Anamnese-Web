import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NewRegistrationStepperComponent } from './new-registration-stepper.component'
import { RouterTestingModule } from '@angular/router/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

describe('NewRegistrationStepperComponent', () => {
  let component: NewRegistrationStepperComponent
  let fixture: ComponentFixture<NewRegistrationStepperComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewRegistrationStepperComponent],
      imports: [
        RouterTestingModule, FormsModule, ReactiveFormsModule
      ],
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRegistrationStepperComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  // it('should create', () => {
  //   expect(component).toBeTruthy()
  // })
})
