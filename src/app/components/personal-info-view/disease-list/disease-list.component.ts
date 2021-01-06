import { Component, OnInit } from '@angular/core'

// @ts-ignore
import personsJson from '../../../shared/data/person-list.json'
import { IPerson } from '../../../model/person.interface'
@Component({
  selector: 'app-disease-list',
  templateUrl: './disease-list.component.html',
  styleUrls: ['./disease-list.component.css']
})
export class DiseaseListComponent implements OnInit {

  displayedColumns: string[] = ['#', 'patient', 'undergoneSurgery', 'surgeryReason', 'surgeries', 'action']
  diseaseList: any

  constructor() {
  }

  ngOnInit(): void {
    this.getDisease()
  }

  deleteDisease(): void {
    console.log('deleted')
  }

  private getDisease(): void {
    this.diseaseList = personsJson.filter(
      (person: IPerson) => person.type === 'patient')
  }

}
