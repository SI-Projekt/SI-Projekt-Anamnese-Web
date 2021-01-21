import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { IPerson, ISecurity } from '../../../../model/person.interface'
import { IAddress } from '../../../../model/address.interface'
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar'
import { rootingPath } from '../../../../shared/rooting-path'
import { PersonService } from '../../../services/person.service'

@Component({
  selector: 'app-new-registration-stepper',
  templateUrl: './new-registration-stepper.component.html',
  styleUrls: ['./new-registration-stepper.component.css']
})
export class NewRegistrationStepperComponent implements OnInit {
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

  person: IPerson = <IPerson>{
    userName: null,
    passWord: null,
    security: <ISecurity>{},

    firstName: null,
    lastName: null,
    profession: null,
    address: <IAddress>{},
    phoneNumber: null,
    email: null,
    maritalStatus: null,
    children: true,

    gender: null,
    height: null,
    weight: null,

    type: 'patient',
    recorded: false
  }

  hidePassword1: boolean = true
  hidePassword2: boolean = true

  readonly login_path: string

  private userNamesList: Array<String> = []

  constructor(
    private router: Router,
    private _formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private personService: PersonService,
  ) {
    this.login_path = rootingPath.login
  }

  ngOnInit(): void {
    this.formGroupInit()
    this.listPersons()
  }


  toLogInPage(): void {
    this.router.navigate(['/' + rootingPath.login])
  }

  checkForUnicness(): void {
    if (this.userNamesList.length > 0 && this.userNamesList.includes(this.person.userName)) {
      this.person.userName += '_' + Math.floor(Math.random() * 3).toString()
      this.zugangdatenFormGroup.controls['benutzernameCtrl'].setValue([this.person.userName])
    }
    console.log(this.person.userName)
  }

  confirmPwdRegistration(): void {
    this.person.gender = this.personenbezogeneFormGroup.controls.geschlechtCtrl.value
    this.createPerson()
  }

  private formGroupInit(): void {

    // INIT:............................................................

    // Personenbezogene Daten:
    this.personenbezogeneFormGroup = this._formBuilder.group({
      geschlechtCtrl: [this.geschlechte[0], Validators.required],
      vornameCtrl: ['', Validators.required],
      nachnameCtrl: ['', Validators.required],
      berufCtrl: '',
      groeßeCtrl: '',
      gewichtCtrl: '',
    })

    // Kontaktdaten:
    this.kontaktdatenFormGroup = this._formBuilder.group({
      handyNumberCtrl: '',
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
      benutzernameCtrl: [{value: '', disabled: true}, Validators.required],
      passwort1Ctrl: ['', Validators.required],
      passwort2Ctrl: ['', Validators.required],
      geheimfrageCtrl: ['', Validators.required],
      antwortCtrl: ['', Validators.required],
    })


    // ON DATA CHANGE:.....................................................

    // Personenbezogene Daten:
    this.personenbezogeneFormGroup.controls['vornameCtrl'].valueChanges.subscribe(
      (vorname: string) => {
        this.person.firstName = vorname
        this.person.userName = vorname.toLowerCase()
      })

    this.personenbezogeneFormGroup.controls['nachnameCtrl'].valueChanges.subscribe(
      (nachname: string) => {
        this.person.lastName = nachname
        this.person.userName = this.person.firstName + this.firstLatterToUpperCase(nachname)
      })

    this.personenbezogeneFormGroup.controls['berufCtrl'].valueChanges.subscribe(
      (beruf: string) => {
        this.person.profession = beruf
      })

    this.personenbezogeneFormGroup.controls['groeßeCtrl'].valueChanges.subscribe(
      (groeße: string) => {
        this.person.height = +groeße
      })

    this.personenbezogeneFormGroup.controls['gewichtCtrl'].valueChanges.subscribe(
      (gewicht: string) => {
        this.person.weight = +gewicht
      })


    // Kontaktdaten:

    this.kontaktdatenFormGroup.controls['handyNumberCtrl'].valueChanges.subscribe(
      (handynumber: string) => {
        this.person.phoneNumber = '+49' + handynumber
      })

    this.kontaktdatenFormGroup.controls['emailCtrl'].valueChanges.subscribe(
      (email: string) => {
        this.person.email = email
      })


    // Anschrift Infos:

    const address: IAddress = <IAddress>{}

    this.anschriftFormGroup.controls['strasseCtrl'].valueChanges.subscribe(
      (strasse: string) => {
        address.streetAndNumber = strasse
      })

    this.anschriftFormGroup.controls['plzCtrl'].valueChanges.subscribe(
      (plz: string) => {
        address.postalCode = plz
      })

    this.anschriftFormGroup.controls['landCtrl'].valueChanges.subscribe(
      (land: string) => {
        address.country = land
      })

    this.anschriftFormGroup.controls['stadtCtrl'].valueChanges.subscribe(
      (stadt: string) => {
        address.city = stadt
      })

    this.person.address = address


    // zugangdaten:

    let password: string = ''
    const security: ISecurity = <ISecurity>{}

    this.zugangdatenFormGroup.controls['passwort1Ctrl'].valueChanges.subscribe(
      (passwort1: string) => {
        password = passwort1
      })

    this.zugangdatenFormGroup.controls['passwort2Ctrl'].valueChanges.subscribe(
      (passwort2: string) => {
        password === passwort2
          ? this.person.passWord = passwort2
          : this.snackBar.open(
          'Die Passwörter stimmen nicht überein!', 'Close',
          {duration: 5000}
          )
      })

    this.zugangdatenFormGroup.controls['geheimfrageCtrl'].valueChanges.subscribe(
      (geheimfrage: string) => {
        security.secretQuestion = geheimfrage
      })

    this.zugangdatenFormGroup.controls['antwortCtrl'].valueChanges.subscribe(
      (antwort: string) => {
        security.answer = antwort
      })

    this.person.security = security

  }

  private firstLatterToUpperCase(text: string): string {
    return text.toLowerCase().replace(/^[a-zA-z]|\s(.)/ig, L => L.toUpperCase())
  }

  private listPersons(): void {
    this.personService.getAll().subscribe((data: Array<IPerson>) => {
        this.userNamesList = data.map((person: IPerson) => person.userName)
      },
      err => {
        console.log('Error in NewRegistrationModalComponent.listPersons()')
        console.log(err)
        this.snackBar.open('Could not fetch persons', 'Close', {
          duration: 4000
        })
      }
    )
  }

  private createPerson(): void {
    this.personService.add(this.person).subscribe(() => {
      },
      err => {
        console.log('Error in NewRegistrationModalComponent.listPersons()')
        console.log(err)
        this.snackBar.open('Could not create new person', 'Close', {
          duration: 4000
        })
      }
    )
  }

}
