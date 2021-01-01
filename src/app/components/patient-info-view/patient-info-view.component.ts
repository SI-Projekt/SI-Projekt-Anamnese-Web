import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-patient-info-view',
  templateUrl: './patient-info-view.component.html',
  styleUrls: ['./patient-info-view.component.css']
})
export class PatientInfoViewComponent implements OnInit {
  headerTitle: string = 'Patient information view'

  constructor() {
  }

  ngOnInit(): void {
  }

}
