import { Component, OnInit } from '@angular/core'

// @ts-ignore
import personsJson from '../../../shared/data/person-list.json'
import { IPerson } from '../../../model/person.interface'

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  displayedColumns: string[] = ['#', 'vorname', 'nachname', 'username', 'action']
  patientList: any

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.patientList)
    this.getPatients()
    console.log(this.patientList)
  }

  deletePatient(): void {
    console.log('deleted')
  }

  private getPatients(): void {
    this.patientList = personsJson.filter(
      (person: IPerson) => person.type === 'patient')

    console.log('done')
  }

}
