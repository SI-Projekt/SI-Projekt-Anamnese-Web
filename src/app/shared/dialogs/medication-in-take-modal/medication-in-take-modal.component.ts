import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { MatInput } from '@angular/material/input'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { IMedication, IMedicationTO } from '../../../model/medication.interface'
import { IPerson } from '../../../model/person.interface'
import { PersonService } from '../../../components/services/person.service'
import { MatSnackBar } from '@angular/material/snack-bar'
import { MedicationService } from '../../../components/services/medication.service'
import { FilterService } from '../../../core/filter.service'

@Component({
  selector: 'app-medication-in-take-modal',
  templateUrl: './medication-in-take-modal.component.html',
  styleUrls: ['./medication-in-take-modal.component.css']
})
export class MedicationInTakeModalComponent implements OnInit {
  @ViewChild('startDatumInput', { read: MatInput, static: true }) startDatumInput: MatInput
  medicamentInTakeFormGroup: FormGroup
  modalTitle: string
  startDatumCtrl: FormControl

  searching: boolean
  editedMod: boolean
  patient: IPerson = <IPerson>{}
  patientsList: Array<IPerson> = []
  patientsListFiltered: Array<IPerson> = []
  medication: IMedication = <IMedication>{}
  medicationTO: IMedicationTO = <IMedicationTO>{bloodDiluent: false}

  constructor(
    private _formBuilder: FormBuilder,
    private personService: PersonService,
    private medicationService: MedicationService,
    private filterService: FilterService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<MedicationInTakeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public receivedData: any
  ) { }

  ngOnInit(): void {
    this.patient = this.receivedData.patient
    this.patientsList = this.receivedData.patientsList
    this.patientsListFiltered = this.receivedData.patientsList

    if (this.patient && this.patient.id) {
      this.medicationTO.patientId = this.patient.id
    }

    if (this.receivedData.update && this.receivedData.update.id) {
      this.editedMod = true
      this.modalTitle = 'Medikamenteneinnahme bearbeiten'
      this.medication = this.receivedData.update
    } else {
      this.editedMod = false
      this.modalTitle = 'Neue Medikamenteneinnahme hinzufügen'
    }

    this.formGroupInit()
  }

  onSave(): void {
    this.searching = true
    this.editedMod ? this.updateMedication() : this.createMedication()
  }

  onNoClick(dataSaved: boolean): void {
    this.searching = false
    this.dialogRef.close({answer: dataSaved})
  }

  onBlutverduennungsmittel(event: any): void {
    this.medicationTO.bloodDiluent = event === 'true' ? true : false
    this.medication.bloodDiluent = event === 'true' ? true : false
  }

  applyPatientFilter(filterValue: any): void {
    if (filterValue && filterValue.value.length >= 2) {
      this.patientsListFiltered = this.filterService.searchBy(this.patientsList, filterValue.value, 'firstName')
    } else {
      this.patientsListFiltered = this.patientsList
    }
  }

  displayAutoComplete(patient: IPerson): string {
    return patient ? patient.firstName + ' ' + patient.lastName : ''
  }

  private formGroupInit(): void {
    this.startDatumCtrl = new FormControl(
      {value: this.editedMod ? this.medication.startDate : '', disabled: true}
      )
    this.startDatumCtrl.valueChanges.subscribe(value => {
      this.medicationTO.startDate = new Date(value)
      this.medication.startDate = new Date(value)
    })

    this.medicamentInTakeFormGroup = this._formBuilder.group({
      patientennameCtrl: [{
        value: this.getPatientName(),
        disabled: this.receivedData.parent === 'patient'},
        Validators.required],
      medikamentnameCtrl: [this.editedMod ? this.medication.designation : '', Validators.required],
      dosierungCtrl: [this.editedMod ? this.medication.dosage : '', Validators.required],
    })

    this.medicamentInTakeFormGroup.controls.patientennameCtrl.valueChanges.subscribe(
      (value: IPerson) => {
        this.patient = value
        this.medicationTO.patientId = value.id
        this.medication.person = value
      }
    )

    this.medicamentInTakeFormGroup.controls.medikamentnameCtrl.valueChanges.subscribe(
      value => {
        this.medicationTO.designation = value
        this.medication.designation = value
      }
    )

    this.medicamentInTakeFormGroup.controls.dosierungCtrl.valueChanges.subscribe(
      value => {
        this.medicationTO.dosage = value
        this.medication.dosage = value
      }
    )

  }

  private createMedication(): void {
    this.medicationService.add(this.medicationTO).subscribe(() => {
        console.log('New medication added!')
        this.onNoClick(true)
      },
      err => {
        console.log('Error in MedicationInTakeModalComponent.createMedication()')
        console.log(err)
        this.searching = false
        this.snackBar.open('Could not create medication', 'Close', {
          duration: 4000
        })
      }
    )
  }

  private updateMedication(): void {
    this.medicationService.edit(this.medication.id, this.medication).subscribe(() => {
        console.log('Medication updated!')
        this.onNoClick(true)
      },
      err => {
        console.log('Error in MedicationInTakeModalComponent.updateMedication()')
        console.log(err)
        this.searching = false
        this.snackBar.open('Could not update medication', 'Close', {
          duration: 4000
        })
      }
    )
  }

  private getPatientName(): IPerson {
    if (this.receivedData.parent === 'patient') {
      return this.receivedData.patient
    } else {
      if (this.medication && this.medication.person) {
        return this.medication.person
      } else {
        return null
      }
    }
  }

}
