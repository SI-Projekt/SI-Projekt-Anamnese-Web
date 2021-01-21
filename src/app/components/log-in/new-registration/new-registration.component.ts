import { Component, OnInit } from '@angular/core'
import { rootingPath } from '../../../shared/rooting-path'

@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.css']
})
export class NewRegistrationComponent implements OnInit {

  readonly login_path: string

  constructor() {
    this.login_path = rootingPath.login
  }

  ngOnInit(): void { }

}
