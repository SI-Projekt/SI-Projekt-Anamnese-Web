import { Component, OnInit } from '@angular/core'
// @ts-ignore
import personsJson from '../../../shared/data/person-list.json'
import { IPerson } from '../../../model/person.interface'

@Component({
  selector: 'app-diagnosis-list-patient',
  templateUrl: './diagnosis-list-patient.component.html',
  styleUrls: ['./diagnosis-list-patient.component.css']
})
export class DiagnosisListPatientComponent implements OnInit {

  displayedColumns: string[] = ['#', 'Untersuchungsname', 'Datum', 'Körperteil', 'action']
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
