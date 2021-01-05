import { Component, Inject, OnInit } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { IPerson } from '../../../model/person.interface'

@Component({
  selector: 'app-my-profile-modal',
  templateUrl: './my-profile-modal.component.html',
  styleUrls: ['./my-profile-modal.component.css']
})
export class MyProfileModalComponent implements OnInit {

  changeDisabled: boolean = true

  constructor(
    public dialogRef: MatDialogRef<MyProfileModalComponent>,
    @Inject(MAT_DIALOG_DATA) public receivedData: IPerson
  ) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close()
  }

  onFormSubmit(): void {
    console.log(this.receivedData)
    this.changeDisabled = true
  }

}
