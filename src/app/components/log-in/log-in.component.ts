import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Router } from '@angular/router'
import { LoginService } from './login.service'
import { SessionService } from '../../core/authentification-and-authority/session.service'
import { AuthorityService } from '../../core/authentification-and-authority/authority.service'
import { MatSnackBar } from '@angular/material/snack-bar'
// @ts-ignore
import personsJson from '../../shared/data/person-list.json'
import { IPerson } from '../../model/person.interface'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  @Output() registered: EventEmitter<any> = new EventEmitter()
  hidePassword: boolean = true
  isClicked: boolean
  error: string
  username: string
  password: string

  constructor(
    private router: Router,
    private loginService: LoginService,
    private sessionService: SessionService,
    private authorityService: AuthorityService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void { this.cleanAllOnInit() }

  /*** to log the current user in ***/
  login(): void {
    this.isClicked = true

    const persons: Array<IPerson> = personsJson
    const personFound: IPerson = persons
      .filter((personItem: IPerson) => personItem.userName === this.username)
      .filter((personItem: IPerson) => personItem.passWord === this.password)[0]

    if (personFound) {
      this.sessionService.setUsername(this.username)
      this.sessionService.setPersonTypeKey(personFound.type)
      this.toDashboard(personFound)
    } else {
      this.isClicked = false
      console.log('Error in LoginComponent.login()')
      this.snackBar.open(
        'Invalid User Name and/or password. Please try again.', 'Close',
        {duration: 4000}
      )
    }




    // this.loginService.login(this.username, this.password)
    //   .subscribe((data: any) => {
    //       this.sessionService.setSession(data, this.username)
    //       this.getAuthority()
    //       console.log('token: ' + this.sessionService.getToken())
    //       this.toDashboard()
    //     },
    //     (error: any) => {
    //       console.log('Error in LoginComponent.login()')
    //
    //       if (error.status === 401) {
    //         this.snackBar.open(
    //           'Invalid User Name and/or password. Please try again.', 'Close',
    //           {duration: 4000}
    //         )
    //       }
    //
    //       if (error.status === 403) {
    //         this.snackBar.open(
    //           'Access Denied! Please refer to System Administrator', 'Close',
    //           {duration: 4000}
    //         )
    //       }
    //
    //       this.cleanAllOnInit()
    //     }
    //   )
  }

  goToHomePage(): void {
    this.router.navigate(['/login/reset'])
  }

  /*** to go to the dashboard ***/
  private toDashboard(person: IPerson): void {
    this.registered.emit()
    this.router.navigate(['/home_' + person.type.toLowerCase()])
  }

  /*** to get the authorities of the current user ***/
  private getAuthority(): void {
    this.authorityService.loadAuthorities()
  }


  /*** to clean the current session ***/
  private cleanAllOnInit(): void {
    this.sessionService.clearSession()
    this.username = ''
    this.password = ''
    this.isClicked = false
  }

}
