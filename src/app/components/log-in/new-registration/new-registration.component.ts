// @ts-ignore
import personsJson from '../../../shared/data/person-list.json'
import { Component, OnInit } from '@angular/core'
import { IPerson } from '../../../model/person.interface'
import { MatSnackBar } from '@angular/material/snack-bar'
import { rootingPath } from '../../../shared/rooting-path'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.css']
})
export class NewRegistrationComponent implements OnInit {
  personenbezogeneFormGroup: FormGroup
  kontaktdatenFormGroup: FormGroup
  anschriftFormGroup: FormGroup
  zugangdatenFormGroup: FormGroup

  readonly geschlechte: Array<string> = ['M', 'W']
  readonly geheimfragen: Array<string> = [
    'In welcher Straße sind Sie aufgewachsen?',
    'Wie lautet der Mädchenname Ihrer Mutter?',
    'Was war der Name Ihres Haustiers aus der Kindheit?',
    'Wo haben Sie die Grundschule besucht?',
    'Wie lautete der Name Ihres besten Freundes, als Sie aufwuchsen?'
  ]

  person: IPerson = <IPerson>{}
  hidePassword1: boolean = true
  hidePassword2: boolean = true
  username: string

  constructor(
    private router: Router,
    private _formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.formGroupInit()
  }

  toLogInPage(): void {
    this.router.navigate(['/' + rootingPath.login])
  }

  checkForUnicness(): void {

  }

  // onUserName(event: any): void {
  //   if (event.length > 2) {
  //     this.person = personsJson.filter((item: IPerson) => item.userName === event)[0]
  //
  //     if (this.person && this.person.id !== null) {
  //       this.secretQuestion = this.person.security.secretQuestion
  //     } else {
  //       this.snackBar.open(
  //         'No user found with this userName "' + event + '"', 'Close',
  //         {duration: 4000}
  //       )
  //     }
  //   }
  // }

  confirmPwdRegistration(): void {
    let newUserName = this.zugangdatenFormGroup.get('benutzernameCtrl').value
    const personFound = personsJson.filter(
      (person: IPerson) => person.userName === newUserName)

    if (personFound.length > 0) {
      newUserName += '_' + Math.floor(Math.random() * 3).toString()
      this.zugangdatenFormGroup.controls['benutzernameCtrl'].setValue(newUserName)
      this.person.userName = newUserName
    }

    console.log(newUserName)
  }

  private formGroupInit(): void {
    // Personenbezogene Daten:............
    this.personenbezogeneFormGroup = this._formBuilder.group({
      geschlechtCtrl: [this.geschlechte[0], Validators.required],
      vornameCtrl: ['', Validators.required],
      nachnameCtrl: ['', Validators.required],
      berufCtrl: '',
      groeßeCtrl: '',
      gewichtCtrl: '',
    })

    this.personenbezogeneFormGroup.controls['geschlechtCtrl'].valueChanges.subscribe(
      (geschlecht: string) => this.person.gender = geschlecht
    )

    this.personenbezogeneFormGroup.controls['vornameCtrl'].valueChanges.subscribe(
      (vorname: string) => {
        this.person.firstName = vorname
        this.zugangdatenFormGroup.controls['benutzernameCtrl'].setValue(vorname.toLowerCase())
      })

    this.personenbezogeneFormGroup.controls['nachnameCtrl'].valueChanges.subscribe(
      (nachname: string) => {
        const userNameValue: string = this.person.firstName + this.firstLatterToUpperCase(nachname)
        this.zugangdatenFormGroup.controls['benutzernameCtrl'].setValue(userNameValue)
      })

    this.personenbezogeneFormGroup.controls['berufCtrl'].valueChanges.subscribe(
      (beruf: string) => {
        this.person.firstName = beruf
      })

    this.personenbezogeneFormGroup.controls['nachnameCtrl'].valueChanges.subscribe(
      (nachnameCtrl: string) => {
        this.person.firstName = vorname
      })




    // Kontaktdaten:..............
    this.kontaktdatenFormGroup = this._formBuilder.group({
      handynumberCtrl: '',
      emailCtrl: ''
    })

    // Anschrift Infos:
    this.anschriftFormGroup = this._formBuilder.group({
      strasseCtrl: ['', Validators.required],
      plzCtrl: ['', Validators.required],
      landCtrl: ['', Validators.required],
      stadtCtrl: ['', Validators.required],
    })

    // zugangdaten:
    this.zugangdatenFormGroup = this._formBuilder.group({
      benutzernameCtrl: ['', Validators.required],
      passwort1Ctrl: ['', Validators.required],
      passwort2Ctrl: ['', Validators.required],
      geheimfrageCtrl: ['', Validators.required],
      antwortCtrl: ['', Validators.required],
    })

  }

  private firstLatterToUpperCase(text: string): string {
    return text.toLowerCase().replace(/^[a-zA-z]|\s(.)/ig, L => L.toUpperCase())
  }

}
