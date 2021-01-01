import { Component, OnInit, Output } from '@angular/core'
import { rootingPath } from '../../shared/rooting-path'

@Component({
  selector: 'app-home-patient',
  templateUrl: './home-patient.component.html',
  styleUrls: ['./home-patient.component.css']
})
export class HomePatientComponent implements OnInit {
  headerTitle: string = 'Home - Willkomen!'

  readonly aufnahme_path: string
  readonly patient_info_view_path: string

  constructor() {
    this.aufnahme_path = '/' + rootingPath.aufnahme
    this.patient_info_view_path = '/' + rootingPath.patient_info_view
  }

  ngOnInit(): void {
  }

}
