import { Component, OnInit } from '@angular/core'
// @ts-ignore
import personsJson from '../../../shared/data/person-list.json'
import { IPerson } from '../../../model/person.interface'

@Component({
  selector: 'app-diagnosis-list',
  templateUrl: './diagnosis-list.component.html',
  styleUrls: ['./diagnosis-list.component.css']
})
export class DiagnosisListComponent implements OnInit {

  displayedColumns: string[] = ['#', 'patient', 'examinations', 'date', 'type', 'action']
  diagnosisList: any

  constructor() {
  }

  ngOnInit(): void {
    this.getDiagnosis()
  }

  deleteDiagnosis(): void {
    console.log('deleted')
  }

  private getDiagnosis(): void {
    this.diagnosisList = personsJson.filter(
      (person: IPerson) => person.type === 'patient')
  }

}
