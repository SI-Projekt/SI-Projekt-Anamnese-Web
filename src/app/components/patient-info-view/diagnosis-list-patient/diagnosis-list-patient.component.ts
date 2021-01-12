import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core'
import { v4 as uuid } from 'uuid'
import { DiagnosisService } from '../../services/diagnosis.service'
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatDialog } from '@angular/material/dialog'
import { SessionService } from '../../../core/authentification-and-authority/session.service'
import { IDiagnosis } from '../../../model/diagnosis.interface'
import { DiagnosisModalComponent } from '../../../shared/dialogs/diagnosis-modal/diagnosis-modal.component'
import { DeleteConfirmationComponent } from '../../../shared/dialogs/delete-confirmation-modal/delete-confirmation.component'
import { IDeleteConfirmation } from '../../../model/delete-confirmation.interface'

@Component({
  selector: 'app-diagnosis-list-patient',
  templateUrl: './diagnosis-list-patient.component.html',
  styleUrls: ['./diagnosis-list-patient.component.css']
})
export class DiagnosisListPatientComponent implements OnInit, OnChanges {
  @Input() patientId: uuid

  displayedColumns: string[] = ['#', 'Untersuchungsname', 'Datum', 'Körperteil', 'action']
  diagnosisList: Array<IDiagnosis> = []

  constructor(
    private diagnosisService: DiagnosisService,
    private sessionService: SessionService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.listPersonDiagnosis()
  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
    console.log(changes)

    if (changes.patientId && this.patientId) {
      this.listPersonDiagnosis()
    }

  }

  onAddNewOrEdit(diagnosis?: IDiagnosis): void {
    const dialogRef = this.dialog.open(DiagnosisModalComponent, { // TODO
      width: '750px',
      data: diagnosis
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.answer) {
        this.listPersonDiagnosis()
      }
    })
  }

  onDelete(diagnosis: IDiagnosis): void {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      disableClose: true,
      data: <IDeleteConfirmation>{entityType: 'Diagnosis', entityName: diagnosis.examinationName}
    })

    dialogRef.afterClosed().subscribe(answer => {
      if (answer) {
        this.deleteDiagnosis(diagnosis.id)
      }
    })
  }

  private saveOnAddNew(diagnosis: IDiagnosis): void {
    this.diagnosisService.add(diagnosis).subscribe(() => {
        this.listPersonDiagnosis()
      },
      err => {
        console.log('Error in DiagnosisListPatientComponent.saveAddNewDiagnosis()')
        console.log(err)
        this.snackBar.open('Could not add this allergy', 'Close', {
          duration: 4000
        })
      }
    )
  }

  private saveOnEdit(diagnosisId: uuid, update: IDiagnosis): void {
    this.diagnosisService.edit(diagnosisId, update).subscribe(() => {
        this.listPersonDiagnosis()
      },
      err => {
        console.log('Error in DiagnosisListPatientComponent.saveEditDiagnosis()')
        console.log(err)
        this.snackBar.open('Could not edit this diagnosis', 'Close', {
          duration: 4000
        })
      }
    )
  }

  private deleteDiagnosis(diagnosisId: uuid): void {
    this.diagnosisService.delete(diagnosisId).subscribe(() => {
        this.listPersonDiagnosis()
      },
      err => {
        console.log('Error in DiagnosisListPatientComponent.deleteDiagnosis()')
        console.log(err)
        this.snackBar.open('Could not delete diagnosis', 'Close', {
          duration: 4000
        })
      }
    )
  }

  private listPersonDiagnosis(): void {
    if (!this.patientId) {
      this.patientId = this.sessionService.getUserId()
    }
    this.diagnosisService.getAllByPersonId(this.patientId).subscribe((diagnosis: any) => {
        this.diagnosisList = diagnosis
      },
      err => {
        console.log('Error in DiagnosisListPatientComponent.listPersonDiagnosis()')
        console.log(err)
        this.snackBar.open('Could not fetch diagnosis', 'Close', {
          duration: 4000
        })
      }
    )
  }

}
