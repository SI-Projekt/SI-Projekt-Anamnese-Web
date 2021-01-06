import { Component, OnInit } from '@angular/core'
// @ts-ignore
import personsJson from '../../../shared/data/person-list.json'
import { IPerson } from '../../../model/person.interface'

@Component({
  selector: 'app-medication-in-take-list',
  templateUrl: './medication-in-take-list.component.html',
  styleUrls: ['./medication-in-take-list.component.css']
})
export class MedicationInTakeListComponent implements OnInit {

  displayedColumns: string[] = ['#', 'patient', 'designation', 'dosage', 'startDate', 'action']
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
