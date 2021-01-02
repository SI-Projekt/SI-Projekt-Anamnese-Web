import { Component, OnInit } from '@angular/core'
import { IPerson } from '../../../model/person.interface'
// @ts-ignore
import personsJson from '../../../shared/data/person-list.json'
import { MatSnackBar } from '@angular/material/snack-bar'
import { rootingPath } from '../../../shared/rooting-path'

@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.css']
})
export class NewRegistrationComponent implements OnInit {
  hidePassword: boolean = true
  isClicked: boolean
  person: IPerson = <IPerson>{}
  username: string
  secretQuestion: string
  answer: string
  answerCorrect: boolean
  newPassword: string

  readonly login_path: string

  constructor(
    private snackBar: MatSnackBar
  ) {
    this.login_path = rootingPath.login
  }

  ngOnInit(): void {
  }

  onUserName(event: any): void {
    if (event.length > 2) {
      this.person = personsJson.filter((item: IPerson) => item.userName === event)[0]

      if (this.person && this.person.id !== null) {
        this.secretQuestion = this.person.security.secretQuestion
      } else {
        this.snackBar.open(
          'No user found with this userName "' + event + '"', 'Close',
          {duration: 4000}
        )
      }
    }
  }

  confirmPwdRegistration(): void {

  }

}
