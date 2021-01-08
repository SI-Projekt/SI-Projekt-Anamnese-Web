import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AllergyListPatientComponent } from './allergy-list-patient.component'

describe('AllergyListComponent', () => {
  let component: AllergyListPatientComponent
  let fixture: ComponentFixture<AllergyListPatientComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllergyListPatientComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergyListPatientComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
