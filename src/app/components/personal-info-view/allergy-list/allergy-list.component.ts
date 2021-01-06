import { Component, OnInit } from '@angular/core'
// @ts-ignore
import personsJson from '../../../shared/data/person-list.json'
import { IPerson } from '../../../model/person.interface'

@Component({
  selector: 'app-allergy-list',
  templateUrl: './allergy-list.component.html',
  styleUrls: ['./allergy-list.component.css']
})
export class AllergyListComponent implements OnInit {

  displayedColumns: string[] = ['#', 'patient', 'name', 'action']
  allergyList: any

  constructor() {
  }

  ngOnInit(): void {
    this.getDisease()
  }

  deleteDisease(): void {
    console.log('deleted')
  }

  private getDisease(): void {
    this.allergyList = personsJson.filter(
      (person: IPerson) => person.type === 'patient')
  }

}
