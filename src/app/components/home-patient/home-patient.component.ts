import { Component, OnInit } from '@angular/core'
import { rootingPath } from '../../shared/rooting-path'

// @ts-ignore
import personsJson from '../../shared/data/person-list.json'
import { SessionService } from '../../core/authentification-and-authority/session.service'
import { IPerson } from '../../model/person.interface'

@Component({
  selector: 'app-home-patient',
  templateUrl: './home-patient.component.html',
  styleUrls: ['./home-patient.component.css']
})
export class HomePatientComponent implements OnInit {
  headerTitle: string = 'Home - Willkomen!'
  currentUser: IPerson = <IPerson>{}

  readonly aufnahme_path: string
  readonly patient_info_view_path: string

  constructor(
    private sessionService: SessionService
  ) {
    this.aufnahme_path = '/' + rootingPath.aufnahme
    this.patient_info_view_path = '/' + rootingPath.patient_info_view
  }

  ngOnInit(): void {
    this.getCurrentUser()
  }

  openMyProfilModal(): void {
  }

  private getCurrentUser(): void {
    const username = this.sessionService.getUsername()
    this.currentUser = personsJson.filter(
      (patient: IPerson) => patient.userName === username)[0]
  }
}
