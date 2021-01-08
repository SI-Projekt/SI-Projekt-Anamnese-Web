import { Component, OnInit } from '@angular/core'
// @ts-ignore
import personsJson from '../../../shared/data/person-list.json'
import { IPerson } from '../../../model/person.interface'

@Component({
  selector: 'app-medication-in-take-list-patient',
  templateUrl: './medication-in-take-list-patient.component.html',
  styleUrls: ['./medication-in-take-list-patient.component.css']
})
export class MedicationInTakeListPatientComponent implements OnInit {

  displayedColumns: string[] = ['#', 'Bezeichnung ', 'Dosierung', 'Startdatum', 'action']
  medicationInTakeList: any

  constructor() {
  }

  ngOnInit(): void {
    this.getMedicationInTakeList()
  }

  deleteMedicationInTakeList(): void {
    console.log('deleted')
  }

  private getMedicationInTakeList(): void {
    this.medicationInTakeList = personsJson.filter(
      (person: IPerson) => person.type === 'patient')
  }

}
