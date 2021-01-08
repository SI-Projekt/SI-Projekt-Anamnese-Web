import { Component, OnInit } from '@angular/core'
// @ts-ignore
import personsJson from '../../../shared/data/person-list.json'
import { IPerson } from '../../../model/person.interface'

@Component({
  selector: 'app-allergy-list-patient',
  templateUrl: './allergy-list-patient.component.html',
  styleUrls: ['./allergy-list-patient.component.css']
})
export class AllergyListPatientComponent implements OnInit {

  displayedColumns: string[] = ['#', 'Name', 'action']
  allergyList: any

  constructor() {
  }

  ngOnInit(): void {
    this.getDisease()
  }

  deleteAllergy(): void {
    console.log('deleted')
  }

  private getDisease(): void {
    this.allergyList = personsJson.filter(
      (person: IPerson) => person.type === 'patient')
  }

}
