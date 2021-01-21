import { Component, Inject, OnInit } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { IAllergy } from '../../../model/person.interface'
import { AllergyService } from '../../../components/services/allergy.service'

@Component({
  selector: 'app-allergy-modal',
  templateUrl: './allergy-modal.component.html',
  styleUrls: ['./allergy-modal.component.css']
})
export class AllergyModalComponent implements OnInit {
  allergies: Array<IAllergy> = []
  allergiesNames: Array<string> = []

  constructor(
    public dialogRef: MatDialogRef<AllergyModalComponent>,
    @Inject(MAT_DIALOG_DATA) public receivedData: any,
    private allerService: AllergyService
  ) { }

  ngOnInit(): void {
    console.log(this.receivedData)
  }

  onNoClick(answerValue: boolean): void {
    this.dialogRef.close({answer: answerValue})
  }

}
