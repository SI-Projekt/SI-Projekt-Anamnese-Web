import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PatientInfoViewComponent } from './patient-info-view.component'

describe('PatientInfoViewComponent', () => {
  let component: PatientInfoViewComponent
  let fixture: ComponentFixture<PatientInfoViewComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientInfoViewComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientInfoViewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
