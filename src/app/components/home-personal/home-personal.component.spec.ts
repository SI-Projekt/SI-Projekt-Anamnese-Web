import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HomePersonalComponent } from './home-personal.component'

describe('HommePersonalComponent', () => {
  let component: HomePersonalComponent
  let fixture: ComponentFixture<HomePersonalComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePersonalComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePersonalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
