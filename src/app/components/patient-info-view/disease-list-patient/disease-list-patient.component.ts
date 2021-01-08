import { Component, OnInit } from '@angular/core'
// @ts-ignore
import personsJson from '../../../shared/data/person-list.json'
import { IPerson } from '../../../model/person.interface'

@Component({
  selector: 'app-disease-list-patient',
  templateUrl: './disease-list-patient.component.html',
  styleUrls: ['./disease-list-patient.component.css']
})
export class DiseaseListPatientComponent implements OnInit {

  displayedColumns: string[] = ['#', 'Vorerkrankung', 'Operation', 'Operationsgrund', 'action']
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
