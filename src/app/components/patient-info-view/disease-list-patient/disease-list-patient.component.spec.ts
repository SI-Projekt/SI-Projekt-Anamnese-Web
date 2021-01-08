import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DiseaseListPatientComponent } from './disease-list-patient.component'

describe('DiseaseListPatientComponent', () => {
  let component: DiseaseListPatientComponent
  let fixture: ComponentFixture<DiseaseListPatientComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiseaseListPatientComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseaseListPatientComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
