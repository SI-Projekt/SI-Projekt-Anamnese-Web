import { Component, Input, OnInit } from '@angular/core'
import { IAllergy, IPerson } from '../../../model/person.interface'
import { AllergyService } from '../../services/allergy.service'
import { SessionService } from '../../../core/authentification-and-authority/session.service'
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatDialog } from '@angular/material/dialog'
import { AllergyModalComponent } from '../../../shared/dialogs/allergy-modal/allergy-modal.component'
import { DeleteConfirmationComponent } from '../../../shared/dialogs/delete-confirmation-modal/delete-confirmation.component'
import { IDeleteConfirmation } from '../../../model/delete-confirmation.interface'
import { PersonService } from '../../services/person.service'
import { v4 as uuid } from 'uuid'

@Component({
  selector: 'app-allergy-list-patient',
  templateUrl: './allergy-list-patient.component.html',
  styleUrls: ['./allergy-list-patient.component.css']
})
export class AllergyListPatientComponent implements OnInit {

  displayedColumns: string[] = ['#', 'Name', 'action']
  @Input() currentUser: IPerson

  constructor(
    private allergyService: AllergyService,
    private personService: PersonService,
    private sessionService: SessionService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void { }

  onAddNewOrEdit(allergy?: IAllergy): void {
    const dialogRef = this.dialog.open(AllergyModalComponent, {
      width: '750px',
      data: {update: allergy, parent: 'patient', patient: this.currentUser}
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.answer) {
        this.listCurrentUserAllergy()
      }
    })
  }

  onDelete(allergy: IAllergy): void {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      disableClose: true,
      data: <IDeleteConfirmation>{entityType: 'Allergy', entityName: allergy.name}
    })

    dialogRef.afterClosed().subscribe(answer => {
      if (answer) {
        this.deleteAllergy(allergy.id)
      }
    })
  }

  private deleteAllergy(allergyId: uuid): void {
    this.allergyService.delete(allergyId).subscribe(() => {
        this.listCurrentUserAllergy()
      },
      err => {
        console.log('Error in AllergyListPatientComponent.deleteAllergy()')
        console.log(err)
        this.snackBar.open('Could not delete allergy', 'Close', {
          duration: 4000
        })
      }
    )
  }

  private listCurrentUserAllergy(): void {
    this.personService.getOne(this.sessionService.getUserId()).subscribe(
      (person: IPerson) => {
        this.currentUser = person
      }
      ,
      err => {
        console.log('Error in AllergyListPatientComponent.listCurrentUserAllergy()')
        console.log(err)
        this.snackBar.open('Could not fetch allergies', 'Close', {
          duration: 4000
        })
      }
    )
  }

}
