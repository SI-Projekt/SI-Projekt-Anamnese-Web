import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PersonalInfoViewComponent } from './personal-info-view.component'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card'
import { MatTabsModule } from '@angular/material/tabs'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatTableModule } from '@angular/material/table'
import { PatientListComponent } from './patient-list/patient-list.component'
import { DiagnosisListComponent } from './diagnosis-list/diagnosis-list.component'

describe('PersonalInfoViewComponent', () => {
  let component: PersonalInfoViewComponent
  let fixture: ComponentFixture<PersonalInfoViewComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PersonalInfoViewComponent, PatientListComponent, DiagnosisListComponent,
      ],
      imports: [MatTableModule],
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInfoViewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
