import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NewRegistrationComponent } from './new-registration.component'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card'
import { MatTabsModule } from '@angular/material/tabs'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

describe('NewRegistrationComponent', () => {
  let component: NewRegistrationComponent
  let fixture: ComponentFixture<NewRegistrationComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewRegistrationComponent],
      imports: [
        RouterTestingModule, HttpClientTestingModule, CommonModule,
        MatCardModule, MatTabsModule, MatSnackBarModule, FormsModule,
        ReactiveFormsModule
      ],
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRegistrationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
