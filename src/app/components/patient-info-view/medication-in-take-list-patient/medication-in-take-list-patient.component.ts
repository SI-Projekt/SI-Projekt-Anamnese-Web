import { Component, Input, OnInit } from '@angular/core'
import { v4 as uuid } from 'uuid'
import { IPerson } from '../../../model/person.interface'
import { IMedication } from '../../../model/medication.interface'
import { MedicationService } from '../../services/medication.service'
import { MatSnackBar } from '@angular/material/snack-bar'
import { SessionService } from '../../../core/authentification-and-authority/session.service'
import { MatDialog } from '@angular/material/dialog'
import { MedicationInTakeModalComponent } from '../../../shared/dialogs/medication-in-take-modal/medication-in-take-modal.component'
import { DeleteConfirmationComponent } from '../../../shared/dialogs/delete-confirmation-modal/delete-confirmation.component'
import { IDeleteConfirmation } from '../../../model/delete-confirmation.interface'

@Component({
  selector: 'app-medication-in-take-list-patient',
  templateUrl: './medication-in-take-list-patient.component.html',
  styleUrls: ['./medication-in-take-list-patient.component.css']
})
export class MedicationInTakeListPatientComponent implements OnInit {
  displayedColumns: string[] = ['#', 'Bezeichnung ', 'Dosierung', 'Startdatum', 'bloodDiluent', 'action']
  medicationInTakeList: Array<IMedication> = []
  @Input() currentUser: IPerson = <IPerson>{}

  constructor(
    private medicationService: MedicationService,
    private sessionService: SessionService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.listPatientMedicationInTake()
  }

  onAddNewOrEdit(medication?: IMedication): void {
    const dialogRef = this.dialog.open(MedicationInTakeModalComponent, {
      width: '750px',
      data: {update: medication, parent: 'patient', patient: this.currentUser}
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.answer) {
        this.listPatientMedicationInTake()
      }
    })
  }

  onDelete(medication: IMedication): void {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      disableClose: true,
      data: <IDeleteConfirmation>{entityType: 'Medikament', entityName: medication.designation}
    })

    dialogRef.afterClosed().subscribe(answer => {
      if (answer) {
        this.deleteMedication(medication.id)
      }
    })
  }

  private saveOnAddNew(medication: IMedication): void {
    this.medicationService.add(medication).subscribe(() => {
        this.listPatientMedicationInTake()
      },
      err => {
        console.log('Error in MedicationInTakeListPatientComponent.saveAddNewMedication()')
        console.log(err)
        this.snackBar.open('Could not add this medication', 'Close', {
          duration: 4000
        })
      }
    )
  }

  private listPatientMedicationInTake(): void {
    this.medicationService.getAllByPatientId(this.sessionService.getUserId())
      .subscribe((medications: Array<IPerson>) => {
          this.medicationInTakeList = medications
        },
        err => {
          console.log('Error in MedicationInTakeListPatientComponent.listPatientMedicationInTake()')
          console.log(err)
          this.snackBar.open('Could not fetch persons', 'Close', {
            duration: 4000
          })
        }
      )
  }

  private deleteMedication(medicationId: uuid): void {
    this.medicationService.delete(medicationId).subscribe(() => {
        this.listPatientMedicationInTake()
      },
      err => {
        console.log('Error in MedicationInTakeListPatientComponent.deleteMedication()')
        console.log(err)
        this.snackBar.open('Could not delete medication', 'Close', {
          duration: 4000
        })
      }
    )
  }

}
