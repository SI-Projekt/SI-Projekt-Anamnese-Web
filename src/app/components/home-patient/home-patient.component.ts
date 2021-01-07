import { Component, OnInit } from '@angular/core'
import { rootingPath } from '../../shared/rooting-path'

// @ts-ignore
import personsJson from '../../shared/data/person-list.json'
import { SessionService } from '../../core/authentification-and-authority/session.service'
import { IPerson } from '../../model/person.interface'
import { MyProfileModalComponent } from './my-profile-modal/my-profile-modal.component'
import { MatDialog } from '@angular/material/dialog'

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
    public dialog: MatDialog,
    private sessionService: SessionService
  ) {
    this.aufnahme_path = '/' + rootingPath.aufnahme
    this.patient_info_view_path = '/' + rootingPath.patient_info_view
  }

  ngOnInit(): void {
    this.getCurrentUser()
  }

  openMyProfilModal(): void {
    this.currentUser.address = {country: null, city: null, postalCode: null, streetAndNumber: null}
    const dialogRef = this.dialog.open(MyProfileModalComponent, {
      width: '750px',
      data: this.currentUser
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      // this.animal = result
    })
  }

  private getCurrentUser(): void {
    const username = this.sessionService.getUsername()
    this.currentUser = personsJson.filter(
      (patient: IPerson) => patient.userName === username)[0]
  }
}
